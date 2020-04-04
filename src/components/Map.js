import React, { Component, useState } from 'react';
import DeckGL from '@deck.gl/react';
import { PathLayer } from '@deck.gl/layers';
import MapGL, { StaticMap, InteractiveMap, Marker } from 'react-map-gl';
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined
} from '@ant-design/icons';

import Pins from './Pins';
import { CITIES } from '../data/cities';

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;
const SIZE = 20;

export default function Map() {
  // below, add whatever layers you need to overlay on your map
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
            [151.206913, -33.87364]
          ]
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

  const onPinClicked = (city) => console.log(city);

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
        pickable={true}
        autoHighlight={true}
        hightlightColor={[0, 0, 128, 128]}
      >
        <MapGL
          mapStyle='mapbox://styles/mapbox/streets-v11'
          mapboxApiAccessToken={process.env.REACT_APP_MAP_GL_ACCESS_TOKEN}
          style={{ width: '100%', height: '400px' }}
        >
          <Pins data={CITIES} onClick={onPinClicked} />
        </MapGL>
      </DeckGL>
    </div>
  );
}
