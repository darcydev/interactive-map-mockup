import React from 'react';
import DeckGL from '@deck.gl/react';
import { LineLayer, PathLayer } from '@deck.gl/layers';
import { StaticMap, InteractiveMap } from 'react-map-gl';

import Pins from './Pins';
import { CITIES } from '../data/cities';

// Initial viewport settings
const initialViewState = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0
};

export default class Path extends React.Component {
  onPinClicked() {
    console.log(10);
  }

  render() {
    // below, add whatever layers you need to overlay on your map
    const layer = [
      new PathLayer({
        id: 'path-layer',
        data: [
          {
            name: 'northern-line',
            color: [101, 147, 245],
            path: [
              [152.90633, -31.4307],
              [152.46022, -31.911209],
              [151.780014, -32.92667],
              [151.623532, -32.960328],
              [151.419618, -33.30721],
              [151.341871, -33.42695],
              [151.081349, -33.772771],
              [151.206913, -33.87364]
            ]
          }
        ],
        getWidth: (data) => 7,
        getColor: (data) => data.color,
        widthMinPixels: 7,
        rounded: true
      })
    ];

    return (
      <div style={{ position: 'relative', height: 600 }}>
        <DeckGL
          initialViewState={{
            longitude: 151.206913,
            latitude: -33.87364,
            zoom: 7,
            bearing: 0,
            pitch: 0
          }}
          height='100%'
          width='100%'
          controller={true}
          layers={layer}
        >
          <InteractiveMap
            mapStyle='mapbox://styles/mapbox/streets-v11'
            mapboxApiAccessToken={process.env.REACT_APP_MAP_GL_ACCESS_TOKEN}
          >
            <Pins data={CITIES} onClick={this.onPinClicked()} />
          </InteractiveMap>
        </DeckGL>
      </div>
    );
  }
}
