/**
 * Check Map Viewport DOM via CDP.
 * What: Connects to Chrome DevTools Protocol on port 9222 to inspect OpenLayers viewport element dimensions and HTML.
 * When: Used to diagnose rendering and canvas attachment issues in live browser tabs.
 * Why: Verifies that DOM nodes and layout constraints are active for OpenLayers rendering.
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
    // Query Chrome debugging JSON endpoint
    http.get("http://localhost:9222/json", (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve(JSON.parse(data)));
      res.on("error", reject);
    });
  });
};

/**
 * Main viewport inspection routine.
 */
export const main = async (): Promise<void> => {
  // Discover running page target on Vite port 5173
  const targets = await getPageTargets();
  const pageTarget = targets.find((t) => t.type === "page" && t.url.includes("5173"));
  if (!pageTarget || !pageTarget.webSocketDebuggerUrl) return;

  // Open WebSocket connection to CDP target
  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);

  // Evaluate OpenLayers viewport dimensions on connection
  ws.onopen = () => {
    // Define DOM query expression for viewport element
    const expression = `(() => {
      const el = document.querySelector('.map-viewport');
      return {
        viewportClientHeight: el?.clientHeight,
        viewportClientWidth: el?.clientWidth,
        viewportInnerHTML: el?.innerHTML,
        layersCount: document.querySelectorAll('.layer-row').length
      };
    })()`;

    // Dispatch Runtime.evaluate request
    ws.send(
      JSON.stringify({
        id: 1,
        method: "Runtime.evaluate",
        params: { expression, returnByValue: true },
      }),
    );
  };

  // Handle evaluation response
  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data.toString());
    if (msg.id === 1) {
      console.log("[cdp] Map Viewport details:", msg.result?.result?.value);
      ws.close();
      process.exit(0);
    }
  };
};

// Run script
main();

