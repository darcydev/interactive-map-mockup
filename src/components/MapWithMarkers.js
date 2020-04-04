import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import DeckGL from '@deck.gl/react';
import { PathLayer } from '@deck.gl/layers';

import MarkerPin from './MarkerPin';
import { CITIES } from '../data/cities';

export default class MapWithMarkers extends Component {
  state = {
    viewportState: {
      width: '100%',
      height: '600px',
      longitude: 151.206913,
      latitude: -33.87364,
      zoom: 5.5,
    },
  };

  render() {
    const { viewportState } = this.state;

    const layer = [
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
          {
            name: 'southern-route',
            color: [101, 147, 245],
            path: [
              [252.90633, -31.4307],
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
        getWidth: (data) => 7,
        getColor: (data) => data.color,
        widthMinPixels: 7,
        rounded: true,
      }),
    ];

    return (
      <ReactMapGL
        {...viewportState}
        mapStyle='mapbox://styles/mapbox/streets-v11'
        mapboxApiAccessToken={process.env.REACT_APP_MAP_GL_ACCESS_TOKEN}
        onViewportChange={(viewport) =>
          this.setState({ viewportState: viewport })
        }
      >
        {CITIES.map((city, i) => (
          <MarkerPin key={`${i}: ${city.name}`} size={20} city={city} />
        ))}
      </ReactMapGL>
    );
  }
}
