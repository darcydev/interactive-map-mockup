import React, { useState } from 'react';
import { StaticMap } from 'react-map-gl';
import DeckGL from '@deck.gl/react';

import MarkerPin from './MarkerPin';
import { layers } from './Layer';
import { CITIES } from '../data/cities';

const initialViewState = {
  latitude: -33.87364,
  longitude: 151.206913,
  zoom: 5.5,
  bearing: 0,
  pitch: 0,
};

/**
 * Check whether the click on the map is a close to a city.
 * A click is close to a city where the nearest city in both longitude and latitude is the same city.
 * @param {*} latClicked
 * @param {*} longClicked
 */
const cityWithNearestLongAndLat = (latClicked, longClicked) => {
  let minLongDiff = Number.POSITIVE_INFINITY;
  let minLatDiff = Number.POSITIVE_INFINITY;
  let cityLong, cityLat;

  for (let i = 0; i < CITIES.length; i++) {
    const { city, longitude, latitude } = CITIES[i];
    const longClickedDiff = Math.abs(longClicked - longitude);
    const latClickedDiff = Math.abs(latClicked - latitude);

    if (longClickedDiff < minLongDiff) {
      minLongDiff = longClickedDiff;
      cityLong = city;
    }

    if (latClickedDiff < minLatDiff) {
      minLatDiff = latClickedDiff;
      cityLat = city;
    }
  }

  return cityLong === cityLat ? cityLat : '';
};

export default function Map() {
  const [nearestCity, setNearestCity] = useState('');

  const onMapClicked = (event) => {
    const longClicked = event.coordinate[0];
    const latClicked = event.coordinate[1];

    setNearestCity(cityWithNearestLongAndLat(latClicked, longClicked));
  };

  return (
    <DeckGL
      initialViewState={initialViewState}
      controller={true}
      onClick={onMapClicked}
      layers={layers}
    >
      <StaticMap
        mapStyle='mapbox://styles/mapbox/streets-v11'
        mapboxApiAccessToken={process.env.REACT_APP_MAP_GL_ACCESS_TOKEN}
      >
        {CITIES.map((city, i) => (
          <MarkerPin key={`${i}: ${city.name}`} size={20} city={city} />
        ))}
      </StaticMap>
    </DeckGL>
  );
}
