/**
 * Test Browser Page Reload via Chrome CDP.
 * What: Commands the Chrome tab to reload and inspects OpenLayers initialization state after 1 second.
 * When: Used to verify fresh page load behavior and DOM mounting of map viewports.
 * Why: Ensures determinism in component lifecycle hooks without requiring manual browser refreshing.
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
    // Query Chrome JSON debugging endpoint
    http.get("http://localhost:9222/json", (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve(JSON.parse(data)));
      res.on("error", reject);
    });
  });
};

/**
 * Main reload verification workflow.
 */
export const main = async (): Promise<void> => {
  // Step 1: Discover running page target on Vite port 5173
  const targets = await getPageTargets();
  const pageTarget = targets.find((t) => t.type === "page" && t.url.includes("5173"));
  if (!pageTarget || !pageTarget.webSocketDebuggerUrl) return;

  // Step 2: Open WebSocket connection to CDP target
  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);

  // Step 3: Trigger page reload and evaluate rehydration state
  ws.onopen = () => {
    console.log("[cdp] Reloading page in Chrome...");
    // Send Page.reload command to Chrome
    ws.send(JSON.stringify({ id: 1, method: "Page.reload" }));

    // Wait 1000ms for full Svelte component hydration and OpenLayers initialization
    setTimeout(() => {
      // Define JS expression checking OpenLayers DOM viewport and canvas count
      const expression = `(() => {
        return {
          olViewportExists: !!document.querySelector('.ol-viewport'),
          canvasCount: document.querySelectorAll('canvas').length,
          canvasDimensions: Array.from(document.querySelectorAll('canvas')).map(c => ({ w: c.width, h: c.height })),
          telemetryCenter: document.querySelector('.telemetry-item .value')?.textContent
        };
      })()`;

      // Evaluate rehydration state
      ws.send(
        JSON.stringify({
          id: 2,
          method: "Runtime.evaluate",
          params: { expression, returnByValue: true },
        }),
      );
    }, 1000);
  };

  // Step 4: Handle response message and terminate
  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data.toString());
    if (msg.id === 2) {
      console.log("[cdp] Map Status after reload:", msg.result?.result?.value);
      ws.close();
      process.exit(0);
    }
  };
};

// Run script
main();

