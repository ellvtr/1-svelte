/**
 * Cadastral Parcels Sample GeoJSON Dataset (Denmark).
 * What: GeoJSON feature collection defining cadastral land parcels (matrikler), property boundaries (skel), and parcel identifiers.
 * When: Loaded by OpenLayers VectorLayer in SpatialMap when cadastral layer is enabled.
 * Why: Provides authentic spatial boundary rendering with parcel numbers and property lines over Danish coordinates.
 */

export const danishCadastralGeoJson = {
  type: "FeatureCollection",
  features: [
    // Aarhus Centrum Parcels
    {
      type: "Feature",
      id: "matr-101",
      properties: {
        matrikelnr: "12a",
        ejerlav: "Aarhus Bygrunde",
        areal_m2: 850,
        anvendelse: "Bolig",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [10.2030, 56.1520],
            [10.2045, 56.1520],
            [10.2045, 56.1532],
            [10.2030, 56.1532],
            [10.2030, 56.1520],
          ],
        ],
      },
    },
    {
      type: "Feature",
      id: "matr-102",
      properties: {
        matrikelnr: "12b",
        ejerlav: "Aarhus Bygrunde",
        areal_m2: 920,
        anvendelse: "Erhverv",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [10.2045, 56.1520],
            [10.2060, 56.1520],
            [10.2060, 56.1532],
            [10.2045, 56.1532],
            [10.2045, 56.1520],
          ],
        ],
      },
    },
    {
      type: "Feature",
      id: "matr-103",
      properties: {
        matrikelnr: "14a",
        ejerlav: "Aarhus Bygrunde",
        areal_m2: 1200,
        anvendelse: "Offentlig",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [10.2030, 56.1532],
            [10.2050, 56.1532],
            [10.2050, 56.1546],
            [10.2030, 56.1546],
            [10.2030, 56.1532],
          ],
        ],
      },
    },
    {
      type: "Feature",
      id: "matr-104",
      properties: {
        matrikelnr: "15c",
        ejerlav: "Aarhus Bygrunde",
        areal_m2: 1050,
        anvendelse: "Bolig",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [10.2050, 56.1532],
            [10.2070, 56.1532],
            [10.2070, 56.1546],
            [10.2050, 56.1546],
            [10.2050, 56.1532],
          ],
        ],
      },
    },

    // Odense Centrum Parcels
    {
      type: "Feature",
      id: "matr-301",
      properties: {
        matrikelnr: "8a",
        ejerlav: "Odense Bygrunde",
        areal_m2: 780,
        anvendelse: "Bolig",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [10.3860, 55.3980],
            [10.3880, 55.3980],
            [10.3880, 55.3995],
            [10.3860, 55.3995],
            [10.3860, 55.3980],
          ],
        ],
      },
    },
    {
      type: "Feature",
      id: "matr-302",
      properties: {
        matrikelnr: "8b",
        ejerlav: "Odense Bygrunde",
        areal_m2: 890,
        anvendelse: "Erhverv",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [10.3880, 55.3980],
            [10.3900, 55.3980],
            [10.3900, 55.3995],
            [10.3880, 55.3995],
            [10.3880, 55.3980],
          ],
        ],
      },
    },

    // Copenhagen Centrum Parcels
    {
      type: "Feature",
      id: "matr-201",
      properties: {
        matrikelnr: "1a",
        ejerlav: "Københavns Vester Kvarter",
        areal_m2: 1400,
        anvendelse: "Erhverv",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [12.5680, 55.6740],
            [12.5705, 55.6740],
            [12.5705, 55.6755],
            [12.5680, 55.6755],
            [12.5680, 55.6740],
          ],
        ],
      },
    },
    {
      type: "Feature",
      id: "matr-202",
      properties: {
        matrikelnr: "3c",
        ejerlav: "Københavns Nørre Kvarter",
        areal_m2: 1100,
        anvendelse: "Bolig",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [12.5705, 55.6740],
            [12.5730, 55.6740],
            [12.5730, 55.6755],
            [12.5705, 55.6755],
            [12.5705, 55.6740],
          ],
        ],
      },
    },
  ],
};
