/**
 * Cross-Platform Dev Server & Chrome Remote Debug Launcher.
 * What: Spawns the Vite development server and launches Google Chrome with remote debugging across Windows, macOS, and Linux.
 * When: Executed via `pnpm dev:chrome` for interactive development with Chrome DevTools Protocol attached.
 * Why: Ensures seamless local dev and debugging workflows across diverse operating systems.
 */

import { spawn, execSync, type ChildProcess } from "node:child_process";
import { tmpdir } from "node:os";
import { join } from "node:path";
import http from "node:http";
import fs from "node:fs";

const DEV_PORT = 5173;
const DEV_URL = `http://localhost:${DEV_PORT}`;
const DEBUG_PORT = 9222;

/**
 * Main orchestrator: launches dev server and browser.
 */
export const main = async (): Promise<void> => {
  // Start the Vite dev server
  const viteProcess = startViteServer();

  // Wait for dev server readiness before launching browser
  console.log(`[dev-chrome] Waiting for Vite on ${DEV_URL}...`);
  await waitForServerReady(DEV_URL, 15000);
  console.log(`[dev-chrome] Vite is ready. Launching Chrome...`);

  // Launch Chrome with remote debugging flags
  const chromeProcess = launchChrome(DEV_URL, DEBUG_PORT);

  // Setup graceful shutdown handlers
  setupProcessCleanup(viteProcess, chromeProcess);
};

/**
 * Spawns `pnpm dev` in a child process cross-platform.
 */
const startViteServer = (): ChildProcess => {
  const isWindows = process.platform === "win32";
  const cmd = isWindows ? "pnpm.cmd" : "pnpm";

  const proc = spawn(cmd, ["dev"], {
    stdio: "inherit",
    shell: isWindows,
  });

  proc.on("error", (err) => {
    console.error("[dev-chrome] Failed to start Vite dev server:", err);
    process.exit(1);
  });

  return proc;
};

/**
 * Repeatedly polls HTTP endpoint until response is received or timeout expires.
 */
const waitForServerReady = async (url: string, timeoutMs: number): Promise<void> => {
  const startTime = Date.now();

  while (Date.now() - startTime < timeoutMs) {
    const isUp = await pingUrl(url);
    if (isUp) return;
    await new Promise((resolve) => setTimeout(resolve, 300));
  }

  throw new Error(`Timeout waiting for server at ${url}`);
};

/**
 * Performs a lightweight HTTP GET request to test server availability.
 */
const pingUrl = (url: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const req = http.get(url, (res) => {
      resolve(res.statusCode !== undefined && res.statusCode < 500);
    });

    req.on("error", () => resolve(false));
    req.setTimeout(1000, () => {
      req.destroy();
      resolve(false);
    });
  });
};

/**
 * Resolves the appropriate Chrome / Chromium executable path across OS platforms.
 */
const resolveChromeCommand = (): { command: string; extraArgsPrefix: string[] } => {
  if (process.platform === "darwin") {
    // macOS: Use open command targeting Google Chrome application bundle
    const macAppPath = "/Applications/Google Chrome.app";
    if (fs.existsSync(macAppPath)) {
      return { command: "open", extraArgsPrefix: ["-a", "Google Chrome", "--args"] };
    }
    return { command: "open", extraArgsPrefix: ["-a", "Chromium", "--args"] };
  }

  if (process.platform === "win32") {
    // Windows: Use start via cmd.exe
    return { command: "cmd.exe", extraArgsPrefix: ["/c", "start", "chrome"] };
  }

  // Linux: Probe common browser binary names in PATH
  const linuxBinaries = ["google-chrome-stable", "google-chrome", "chromium-browser", "chromium"];

  for (const bin of linuxBinaries) {
    try {
      execSync(`which ${bin}`, { stdio: "ignore" });
      return { command: bin, extraArgsPrefix: [] };
    } catch {
      // Continue search
    }
  }

  return { command: "google-chrome", extraArgsPrefix: [] };
};

/**
 * Launches Chrome with remote debugging flags across Windows, macOS, and Linux.
 */
const launchChrome = (targetUrl: string, debugPort: number): ChildProcess | null => {
  const userDataDir = join(tmpdir(), "chrome-debug-profile");
  const chromeArgs = [
    `--remote-debugging-port=${debugPort}`,
    `--user-data-dir=${userDataDir}`,
    "--no-first-run",
    "--no-default-browser-check",
    targetUrl,
  ];

  const { command, extraArgsPrefix } = resolveChromeCommand();
  const fullArgs = [...extraArgsPrefix, ...chromeArgs];

  console.log(`[dev-chrome] Executing: ${command} ${fullArgs.join(" ")}`);

  const proc = spawn(command, fullArgs, {
    detached: process.platform === "win32",
    stdio: "ignore",
  });

  proc.on("error", (err) => {
    console.warn(`[dev-chrome] Could not launch Chrome (${command}):`, err.message);
    console.log(`[dev-chrome] Open manually: ${targetUrl}`);
  });

  return proc;
};

/**
 * Registers exit and interrupt handlers to terminate child processes cleanly.
 */
const setupProcessCleanup = (
  viteProcess: ChildProcess,
  chromeProcess: ChildProcess | null,
): void => {
  const cleanup = (): void => {
    console.log("\n[dev-chrome] Shutting down development server...");

    // Terminate Vite process tree
    if (process.platform === "win32" && viteProcess.pid) {
      try {
        execSync(`taskkill /pid ${viteProcess.pid} /T /F`, { stdio: "ignore" });
      } catch {
        // Ignore if already dead
      }
    } else if (viteProcess.pid) {
      viteProcess.kill("SIGTERM");
    }

    if (chromeProcess && chromeProcess.pid && process.platform !== "win32") {
      try {
        chromeProcess.kill("SIGTERM");
      } catch {
        // Ignore
      }
    }

    process.exit(0);
  };

  process.on("SIGINT", cleanup);
  process.on("SIGTERM", cleanup);
};

// Execute main script
main().catch((err) => {
  console.error("[dev-chrome] Fatal error:", err);
  process.exit(1);
});
