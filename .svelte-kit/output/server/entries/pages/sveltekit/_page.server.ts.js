const load = async ({ depends }) => {
  depends("spatial:architecture-demo");
  const simulatedDatafordelerToken = "kds_live_sec_" + Math.random().toString(36).substring(2, 10);
  return {
    serverTimestamp: (/* @__PURE__ */ new Date()).toISOString(),
    serverRuntime: "Node.js (Server-Only)",
    securePortalConfig: {
      region: "Danmark (Klimadatastyrelsen / Dataforsyningen.dk)",
      crs: "EPSG:25832 (UTM32N / ETRS89)",
      authenticated: true,
      tokenMasked: simulatedDatafordelerToken.substring(0, 12) + "..."
    },
    // Streamed Promise: Client renders immediately while server streams heavy dataset
    streamedCadastralSummary: new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          totalParcels: 48520,
          averageAreaM2: 1240.5,
          sourceAuthority: "Geodatastyrelsen & Klimadatastyrelsen Matrikelkort"
        });
      }, 300);
    })
  };
};
export {
  load
};
