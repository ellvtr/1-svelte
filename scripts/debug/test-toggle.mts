/**
 * Test Single Layer Toggle via Chrome CDP.
 * What: Connects to Chrome DevTools Protocol to toggle the second layer (Ortofoto) and verify UI state.
 * When: Used for single-target interaction checks during local development.
 * Why: Validates discrete click handling and reactive CSS class synchronization in Svelte 5.
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
 * Main single layer toggle test routine.
 */
export const main = async (): Promise<void> => {
  // Step 1: Discover running page target on Vite port 5173
  const targets = await getPageTargets();
  const pageTarget = targets.find((t) => t.type === "page" && t.url.includes("5173"));
  if (!pageTarget || !pageTarget.webSocketDebuggerUrl) return;

  // Step 2: Open WebSocket connection to CDP target
  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);

  // Step 3: Trigger toggle click and inspect resulting DOM state
  ws.onopen = () => {
    // Enable Runtime domain
    ws.send(JSON.stringify({ id: 1, method: "Runtime.enable" }));

    // Define JS expression clicking the second toggle button (Ortofoto layer)
    const expression = `(() => {
      const toggleButtons = Array.from(document.querySelectorAll('.toggle-switch'));
      if (toggleButtons[1]) {
        (toggleButtons[1] as HTMLElement).click();
      }
      return {
        clicked: true,
        layerStatuses: Array.from(document.querySelectorAll('.layer-row')).map(el => ({
          name: el.querySelector('.name')?.textContent,
          active: el.classList.contains('active'),
          buttonText: el.querySelector('.toggle-switch')?.textContent
        })),
        activeCountBadge: document.querySelector('.badge-count')?.textContent
      };
    })()`;

    // Send evaluation request
    ws.send(
      JSON.stringify({
        id: 2,
        method: "Runtime.evaluate",
        params: { expression, returnByValue: true },
      }),
    );
  };

  // Step 4: Handle evaluation response message
  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data.toString());
    if (msg.id === 2) {
      console.log("[cdp] Toggle layer result:", msg.result?.result?.value);
      ws.close();
      process.exit(0);
    }
  };
};

// Run script
main();

