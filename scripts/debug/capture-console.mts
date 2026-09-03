/**
 * Capture Chrome Console Logs via CDP.
 * What: Connects to Chrome DevTools Protocol on port 9222 to capture runtime exceptions and console logs.
 * When: Used for automated inspection and debugging of browser-side runtime errors.
 * Why: Provides direct access to browser diagnostics without opening manual DevTools windows.
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
    ws.send(JSON.stringify({ id: 2, method: "Log.enable" }));

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

    ws.send(JSON.stringify({ id: 3, method: "Runtime.evaluate", params: { expression, returnByValue: true } }));
  };

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data.toString());
    if (msg.method === "Runtime.exceptionThrown") {
      console.error("[cdp exception]", msg.params.exceptionDetails);
    }
    if (msg.method === "Runtime.consoleAPICalled") {
      console.log("[cdp console]", msg.params.type, msg.params.args.map((a: { value?: unknown }) => a.value));
    }
    if (msg.id === 3) {
      console.log("[cdp DOM check]", msg.result?.result?.value);
      setTimeout(() => {
        ws.close();
        process.exit(0);
      }, 500);
    }
  };
};

main();
