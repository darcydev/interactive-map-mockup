import React, { useState } from 'react';
import MapGL, {
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  LinearInterpolator,
  WebMercatorViewport
} from 'react-map-gl';
import { LineLayer, GeoJsonLayer } from '@deck.gl/layers';

import Pins from './Pins';
import CITIES from '../data/cities.json';

export default function Map() {
  const [viewport, setViewport] = useState({
    width: 800,
    height: 800,
    latitude: -33.872761,
    longitude: 151.205338,
    zoom: 6
  });

  const onPinClicked = (city) => {
    console.log('pin clicked', city);
  };

  return (
    <MapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAP_GL_ACCESS_TOKEN}
      onViewportChange={setViewport}
    >
      <Pins data={CITIES} onClick={onPinClicked} />
    </MapGL>
  );
}
