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

// Local development server port configuration
const DEV_PORT = 5173;
// Base URL for the local Vite dev server
const DEV_URL = `http://localhost:${DEV_PORT}`;
// Chrome DevTools Protocol remote debugging port
const DEBUG_PORT = 9222;

/**
 * Main orchestrator: launches dev server and browser.
 */
export const main = async (): Promise<void> => {
  // Step 1: Start the Vite dev server background child process
  const viteProcess = startViteServer();

  // Step 2: Wait for dev server HTTP endpoint readiness before launching browser
  console.log(`[dev-chrome] Waiting for Vite on ${DEV_URL}...`);
  await waitForServerReady(DEV_URL, 15000);
  console.log(`[dev-chrome] Vite is ready. Launching Chrome...`);

  // Step 3: Launch Google Chrome with remote debugging flags attached
  const chromeProcess = launchChrome(DEV_URL, DEBUG_PORT);

  // Step 4: Setup process lifecycle hooks for graceful shutdown on SIGINT/SIGTERM
  setupProcessCleanup(viteProcess, chromeProcess);
};

/**
 * Spawns `pnpm dev` in a child process cross-platform.
 */
const startViteServer = (): ChildProcess => {
  // Check if running on Windows OS to pick the correct executable name
  const isWindows = process.platform === "win32";
  const cmd = isWindows ? "pnpm.cmd" : "pnpm";

  // Spawn child process with inherited standard I/O for live console streaming
  const proc = spawn(cmd, ["dev"], {
    stdio: "inherit",
    shell: isWindows,
  });

  // Handle process launch errors
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
  // Record initial timestamp for timeout tracking
  const startTime = Date.now();

  // Poll loop checking server readiness at 300ms intervals
  while (Date.now() - startTime < timeoutMs) {
    const isUp = await pingUrl(url);
    if (isUp) return;
    await new Promise((resolve) => setTimeout(resolve, 300));
  }

  // Abort if server did not respond within allotted timeout
  throw new Error(`Timeout waiting for server at ${url}`);
};

/**
 * Performs a lightweight HTTP GET request to test server availability.
 */
const pingUrl = (url: string): Promise<boolean> => {
  return new Promise((resolve) => {
    // Initiate HTTP GET request to the target URL
    const req = http.get(url, (res) => {
      resolve(res.statusCode !== undefined && res.statusCode < 500);
    });

    // Handle network connection errors
    req.on("error", () => resolve(false));
    // Set 1000ms request timeout
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
    // macOS: Use open command targeting Google Chrome or Chromium application bundle
    const macAppPath = "/Applications/Google Chrome.app";
    if (fs.existsSync(macAppPath)) {
      return { command: "open", extraArgsPrefix: ["-a", "Google Chrome", "--args"] };
    }
    return { command: "open", extraArgsPrefix: ["-a", "Chromium", "--args"] };
  }

  if (process.platform === "win32") {
    // Windows: Use start command via cmd.exe to invoke Chrome executable
    return { command: "cmd.exe", extraArgsPrefix: ["/c", "start", "chrome"] };
  }

  // Linux: Probe common browser binary names in PATH
  const linuxBinaries = ["google-chrome-stable", "google-chrome", "chromium-browser", "chromium"];

  for (const bin of linuxBinaries) {
    try {
      execSync(`which ${bin}`, { stdio: "ignore" });
      return { command: bin, extraArgsPrefix: [] };
    } catch {
      // Continue search if binary not found
    }
  }

  // Fallback to default google-chrome binary name
  return { command: "google-chrome", extraArgsPrefix: [] };
};

/**
 * Launches Chrome with remote debugging flags across Windows, macOS, and Linux.
 */
const launchChrome = (targetUrl: string, debugPort: number): ChildProcess | null => {
  // Temporary directory for dedicated isolated Chrome profile
  const userDataDir = join(tmpdir(), "chrome-debug-profile");
  // Chrome command line flags enabling CDP and disabling first-run prompts
  const chromeArgs = [
    `--remote-debugging-port=${debugPort}`,
    `--user-data-dir=${userDataDir}`,
    "--no-first-run",
    "--no-default-browser-check",
    targetUrl,
  ];

  // Resolve platform-specific command binary and prefix arguments
  const { command, extraArgsPrefix } = resolveChromeCommand();
  const fullArgs = [...extraArgsPrefix, ...chromeArgs];

  console.log(`[dev-chrome] Executing: ${command} ${fullArgs.join(" ")}`);

  // Spawn browser process in background
  const proc = spawn(command, fullArgs, {
    detached: process.platform === "win32",
    stdio: "ignore",
  });

  // Handle browser spawn error with manual fallback instruction
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
  // Clean termination subroutine
  const cleanup = (): void => {
    console.log("\n[dev-chrome] Shutting down development server...");

    // Terminate Vite process tree on Windows or POSIX
    if (process.platform === "win32" && viteProcess.pid) {
      try {
        execSync(`taskkill /pid ${viteProcess.pid} /T /F`, { stdio: "ignore" });
      } catch {
        // Ignore errors if process is already terminated
      }
    } else if (viteProcess.pid) {
      viteProcess.kill("SIGTERM");
    }

    // Terminate Chrome process if running on non-Windows OS
    if (chromeProcess && chromeProcess.pid && process.platform !== "win32") {
      try {
        chromeProcess.kill("SIGTERM");
      } catch {
        // Ignore errors if browser is already closed
      }
    }

    process.exit(0);
  };

  // Register signal listeners for Ctrl+C and termination requests
  process.on("SIGINT", cleanup);
  process.on("SIGTERM", cleanup);
};

// Execute main script workflow with top-level error catcher
main().catch((err) => {
  console.error("[dev-chrome] Fatal error:", err);
  process.exit(1);
});

