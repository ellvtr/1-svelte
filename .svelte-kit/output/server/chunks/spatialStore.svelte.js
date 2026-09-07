import { d as derived } from "./index.js";
const createSpatialStore = () => {
  const layers = [
    {
      id: "osm-base",
      name: "OpenStreetMap Standard",
      type: "XYZ",
      url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
      visible: true,
      opacity: 0.5,
      attribution: "© OpenStreetMap contributors"
    },
    {
      id: "matrikel-vector",
      name: "Matrikelskel (Cadastral Parcels & Boundaries)",
      type: "Vector",
      url: "geo://cadastral-parcels-dk",
      visible: false,
      opacity: 1,
      attribution: "Geodatastyrelsen / Matrikelkortet DK"
    },
    {
      id: "ortho-danmark",
      name: "Danmark Ortofoto (High-Res Aerial)",
      type: "XYZ",
      url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      visible: false,
      opacity: 0.9,
      attribution: "ESRI World Imagery / GeoDanmark Aerial"
    },
    {
      id: "dhm-shadow",
      name: "Danmarks Højdemodel (DTM Topo & Relief)",
      type: "XYZ",
      url: "https://tile.opentopomap.org/{z}/{x}/{y}.png",
      visible: false,
      opacity: 0.7,
      attribution: "OpenTopoMap / Klimadatastyrelsen DTM"
    }
  ];
  let zoom = 7;
  let center = { lon: 10.5, lat: 56 };
  let cursorPosition = null;
  const activeLayers = derived(() => layers.filter((layer) => layer.visible));
  const activeLayerCount = derived(() => activeLayers().length);
  const estimatedTileLoad = derived(() => Math.pow(2, Math.round(zoom)) * Math.max(1, activeLayerCount()));
  const toggleLayer = (layerId) => {
    const target = layers.find((l) => l.id === layerId);
    if (target) {
      target.visible = !target.visible;
    }
  };
  const setLayerOpacity = (layerId, opacity) => {
    const target = layers.find((l) => l.id === layerId);
    if (target) {
      target.opacity = Math.max(0, Math.min(1, opacity));
    }
  };
  const setZoom = (newZoom) => {
    zoom = Math.max(2, Math.min(20, newZoom));
  };
  const setCenter = (newCenter) => {
    center = newCenter;
  };
  const setCursorPosition = (coords) => {
    cursorPosition = coords;
  };
  return {
    get layers() {
      return layers;
    },
    get zoom() {
      return zoom;
    },
    get center() {
      return center;
    },
    get cursorPosition() {
      return cursorPosition;
    },
    get activeLayers() {
      return activeLayers();
    },
    get activeLayerCount() {
      return activeLayerCount();
    },
    get estimatedTileLoad() {
      return estimatedTileLoad();
    },
    toggleLayer,
    setLayerOpacity,
    setZoom,
    setCenter,
    setCursorPosition
  };
};
const spatialStore = createSpatialStore();
export {
  spatialStore as s
};
