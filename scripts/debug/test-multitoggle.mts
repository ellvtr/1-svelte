/**
 * Test Layer Toggling via Chrome CDP.
 * What: Programmatically clicks all layer toggle switches in the active Chrome session and inspects state.
 * When: Used for automated end-to-end layer switching and reactive telemetry verification.
 * Why: Tests full integration between Svelte 5 runes, LayerControls DOM events, and OpenLayers layer visibility.
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
    // Query Chrome JSON target discovery endpoint
    http.get("http://localhost:9222/json", (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve(JSON.parse(data)));
      res.on("error", reject);
    });
  });
};

/**
 * Main multi-layer toggle testing routine.
 */
export const main = async (): Promise<void> => {
  // Step 1: Discover running page target on Vite port 5173
  const targets = await getPageTargets();
  const pageTarget = targets.find((t) => t.type === "page" && t.url.includes("5173"));
  if (!pageTarget || !pageTarget.webSocketDebuggerUrl) return;

  // Step 2: Open WebSocket connection to CDP target
  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);

  // Step 3: Trigger multi-toggle click events and inspect DOM state
  ws.onopen = () => {
    // Enable Runtime domain
    ws.send(JSON.stringify({ id: 1, method: "Runtime.enable" }));

    // Define JS expression that clicks every layer toggle button and collects DOM results
    const expression = `(() => {
      const btns = document.querySelectorAll('.toggle-switch');
      btns.forEach(b => (b as HTMLElement).click());

      return {
        clickedCount: btns.length,
        layerRows: Array.from(document.querySelectorAll('.layer-row')).map(r => ({
          name: r.querySelector('.name')?.textContent,
          active: r.classList.contains('active'),
          buttonText: r.querySelector('.toggle-switch')?.textContent,
          buttonClass: r.querySelector('.toggle-switch')?.className
        })),
        activeCountBadge: document.querySelector('.badge-count')?.textContent,
        olLayersCount: document.querySelectorAll('.ol-layer').length
      };
    })()`;

    // Send evaluate command to browser
    ws.send(
      JSON.stringify({
        id: 2,
        method: "Runtime.evaluate",
        params: { expression, returnByValue: true },
      }),
    );
  };

  // Step 4: Handle response message and output test results
  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data.toString());
    if (msg.id === 2) {
      console.log(
        "[cdp] Multi-toggle results:",
        JSON.stringify(msg.result?.result?.value, null, 2),
      );
      ws.close();
      process.exit(0);
    }
  };
};

// Execute script
main();

