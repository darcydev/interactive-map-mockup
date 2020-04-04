import { PathLayer } from '@deck.gl/layers';

export const layers = [
  new PathLayer({
    id: 'path-layer',
    data: [
      {
        name: 'northern-route',
        color: [101, 147, 245],
        path: [
          [152.90633, -31.4307],
          [152.46022, -31.911209],
          [151.780014, -32.92667],
          [151.623532, -32.960328],
          [151.419618, -33.30721],
          [151.341871, -33.42695],
          [151.081349, -33.772771],
          [151.206913, -33.87364],
        ],
      },
    ],
    rounded: true,
    pickable: true,
    /* onHover: (info, event) => console.log(info, event), */
    autoHighlight: true,
    highlightColor: [0, 0, 128, 128],
    widthMinPixels: 5,
    getColor: (data) => data.color,
  }),
];
