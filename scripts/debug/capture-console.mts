/**
 * Capture Chrome Console Logs via CDP.
 * What: Connects to Chrome DevTools Protocol on port 9222 to capture runtime exceptions and console logs.
 * When: Used for automated inspection and debugging of browser-side runtime errors.
 * Why: Provides direct access to browser diagnostics without opening manual DevTools windows.
 */

import http from "node:http";

// Chrome target metadata definition
type CdpTarget = {
  id: string;
  title: string;
  type: string;
  url: string;
  webSocketDebuggerUrl?: string;
};

/**
 * Fetches the active page targets from Chrome CDP HTTP endpoint.
 */
const getPageTargets = (): Promise<CdpTarget[]> => {
  return new Promise((resolve, reject) => {
    // Query Chrome HTTP debugging endpoint
    http.get("http://localhost:9222/json", (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve(JSON.parse(data)));
      res.on("error", reject);
    });
  });
};

/**
 * Main console and exception capturing execution routine.
 */
export const main = async (): Promise<void> => {
  // Discover Chrome page target running on Vite dev port 5173
  const targets = await getPageTargets();
  const pageTarget = targets.find((t) => t.type === "page" && t.url.includes("5173"));
  if (!pageTarget || !pageTarget.webSocketDebuggerUrl) return;

  // Open WebSocket to Chrome debugging endpoint
  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);

  // Enable CDP debugging domains and evaluate DOM state
  ws.onopen = () => {
    // Enable Runtime and Log domains for console streaming
    ws.send(JSON.stringify({ id: 1, method: "Runtime.enable" }));
    ws.send(JSON.stringify({ id: 2, method: "Log.enable" }));

    // Evaluate viewport container bounding rect in browser
    const expression = `(() => {
      try {
        const el = document.querySelector('.map-viewport');
        return {
          element: !!el,
          elementRect: el ? el.getBoundingClientRect() : null
        };
      } catch (err) {
        return { error: (err as Error).message };
      }
    })()`;

    // Send evaluation command
    ws.send(
      JSON.stringify({
        id: 3,
        method: "Runtime.evaluate",
        params: { expression, returnByValue: true },
      }),
    );
  };

  // Process incoming CDP events and logs
  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data.toString());

    // Intercept uncaught browser runtime exceptions
    if (msg.method === "Runtime.exceptionThrown") {
      console.error("[cdp exception]", msg.params.exceptionDetails);
    }

    // Intercept console.log, console.warn, and console.error calls
    if (msg.method === "Runtime.consoleAPICalled") {
      console.log(
        "[cdp console]",
        msg.params.type,
        msg.params.args.map((a: { value?: unknown }) => a.value),
      );
    }

    // Intercept DOM check response and terminate gracefully
    if (msg.id === 3) {
      console.log("[cdp DOM check]", msg.result?.result?.value);
      setTimeout(() => {
        ws.close();
        process.exit(0);
      }, 500);
    }
  };
};

// Run script
main();

