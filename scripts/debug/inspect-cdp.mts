/**
 * Chrome CDP Inspector Script.
 * What: Connects to Chrome DevTools Protocol on port 9222 to read console logs and evaluate DOM state.
 * When: Used to diagnose live browser behavior, network requests, and Svelte component state.
 * Why: Proves direct bi-directional communication between the agent and the running Chrome browser instance.
 */

import http from "node:http";

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
    http.get("http://localhost:9222/json", (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
      res.on("error", reject);
    });
  });
};

/**
 * Main CDP evaluation workflow.
 */
export const main = async (): Promise<void> => {
  const targets = await getPageTargets();
  const pageTarget = targets.find((t) => t.type === "page" && t.url.includes("5173"));

  if (!pageTarget || !pageTarget.webSocketDebuggerUrl) {
    console.error("[cdp] No active Svelte page found on http://localhost:5173/");
    process.exit(1);
  }

  console.log(`[cdp] Connecting to Chrome tab: ${pageTarget.title} (${pageTarget.url})`);

  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);

  ws.onopen = () => {
    // Enable Runtime and DOM domains
    ws.send(JSON.stringify({ id: 1, method: "Runtime.enable" }));
    ws.send(JSON.stringify({ id: 2, method: "Log.enable" }));

    // Evaluate DOM query and state in browser
    const expression = `(() => {
      return {
        title: document.title,
        heading: document.querySelector('h1')?.innerText,
        activeTab: document.querySelector('.nav-btn.active')?.innerText,
        layers: Array.from(document.querySelectorAll('.layer-row')).map(el => ({
          name: el.querySelector('.name')?.innerText,
          type: el.querySelector('.type-pill')?.innerText,
          active: el.classList.contains('active'),
          opacity: el.querySelector('.opacity-label')?.innerText
        })),
        mapCanvasExists: !!document.querySelector('.ol-viewport canvas'),
        telemetry: {
          center: document.querySelector('.telemetry-item:nth-child(1) .value')?.innerText,
          cursor: document.querySelector('.telemetry-item:nth-child(2) .value')?.innerText,
          activeCount: document.querySelector('.badge-count')?.innerText
        }
      };
    })()`;

    ws.send(
      JSON.stringify({
        id: 3,
        method: "Runtime.evaluate",
        params: {
          expression,
          returnByValue: true,
        },
      })
    );
  };

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data.toString());

    if (msg.id === 3) {
      console.log("[cdp] Live Browser DOM & Component State:");
      console.log(JSON.stringify(msg.result?.result?.value, null, 2));
      ws.close();
      process.exit(0);
    }
  };

  ws.onerror = (err) => {
    console.error("[cdp] WebSocket error:", err);
    process.exit(1);
  };
};

main().catch((err) => {
  console.error("[cdp] Fatal error:", err);
  process.exit(1);
});
