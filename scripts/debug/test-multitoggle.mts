/**
 * Test Layer Toggling via Chrome CDP.
 * What: Programmatically clicks all layer toggle switches in the active Chrome session and inspects state.
 * When: Used for automated end-to-end layer switching and reactive telemetry verification.
 * Why: Tests full integration between Svelte 5 runes, LayerControls DOM events, and OpenLayers layer visibility.
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

    ws.send(
      JSON.stringify({
        id: 2,
        method: "Runtime.evaluate",
        params: { expression, returnByValue: true },
      }),
    );
  };

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

main();
