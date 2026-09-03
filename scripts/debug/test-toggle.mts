/**
 * Test Single Layer Toggle via Chrome CDP.
 * What: Connects to Chrome DevTools Protocol to toggle the second layer (Ortofoto) and verify UI state.
 * When: Used for single-target interaction checks during local development.
 * Why: Validates discrete click handling and reactive CSS class synchronization in Svelte 5.
 */

import http from "node:http";

type CdpTarget = {
  id: string;
  title: string;
  type: string;
  url: string;
  webSocketDebuggerUrl?: string;
};

const getPageTargets = (): Promise<CdpTarget[]> => {
  return new Promise((resolve, reject) => {
    http.get("http://localhost:9222/json", (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve(JSON.parse(data)));
      res.on("error", reject);
    });
  });
};

export const main = async (): Promise<void> => {
  const targets = await getPageTargets();
  const pageTarget = targets.find((t) => t.type === "page" && t.url.includes("5173"));
  if (!pageTarget || !pageTarget.webSocketDebuggerUrl) return;

  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);

  ws.onopen = () => {
    ws.send(JSON.stringify({ id: 1, method: "Runtime.enable" }));

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

    ws.send(JSON.stringify({ id: 2, method: "Runtime.evaluate", params: { expression, returnByValue: true } }));
  };

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data.toString());
    if (msg.id === 2) {
      console.log("[cdp] Toggle layer result:", msg.result?.result?.value);
      ws.close();
      process.exit(0);
    }
  };
};

main();
