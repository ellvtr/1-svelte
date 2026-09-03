/**
 * Test Browser Page Reload via Chrome CDP.
 * What: Commands the Chrome tab to reload and inspects OpenLayers initialization state after 1 second.
 * When: Used to verify fresh page load behavior and DOM mounting of map viewports.
 * Why: Ensures determinism in component lifecycle hooks without requiring manual browser refreshing.
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
    console.log("[cdp] Reloading page in Chrome...");
    ws.send(JSON.stringify({ id: 1, method: "Page.reload" }));

    setTimeout(() => {
      const expression = `(() => {
        return {
          olViewportExists: !!document.querySelector('.ol-viewport'),
          canvasCount: document.querySelectorAll('canvas').length,
          canvasDimensions: Array.from(document.querySelectorAll('canvas')).map(c => ({ w: c.width, h: c.height })),
          telemetryCenter: document.querySelector('.telemetry-item .value')?.textContent
        };
      })()`;

      ws.send(JSON.stringify({ id: 2, method: "Runtime.evaluate", params: { expression, returnByValue: true } }));
    }, 1000);
  };

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data.toString());
    if (msg.id === 2) {
      console.log("[cdp] Map Status after reload:", msg.result?.result?.value);
      ws.close();
      process.exit(0);
    }
  };
};

main();
