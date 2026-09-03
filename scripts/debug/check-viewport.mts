/**
 * Check Map Viewport DOM via CDP.
 * What: Connects to Chrome DevTools Protocol on port 9222 to inspect OpenLayers viewport element dimensions and HTML.
 * When: Used to diagnose rendering and canvas attachment issues in live browser tabs.
 * Why: Verifies that DOM nodes and layout constraints are active for OpenLayers rendering.
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
    const expression = `(() => {
      const el = document.querySelector('.map-viewport');
      return {
        viewportClientHeight: el?.clientHeight,
        viewportClientWidth: el?.clientWidth,
        viewportInnerHTML: el?.innerHTML,
        layersCount: document.querySelectorAll('.layer-row').length
      };
    })()`;

    ws.send(
      JSON.stringify({
        id: 1,
        method: "Runtime.evaluate",
        params: { expression, returnByValue: true },
      }),
    );
  };

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data.toString());
    if (msg.id === 1) {
      console.log("[cdp] Map Viewport details:", msg.result?.result?.value);
      ws.close();
      process.exit(0);
    }
  };
};

main();
