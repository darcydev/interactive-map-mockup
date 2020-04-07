import React from 'react';
import { Marker } from 'react-map-gl';

import './MarkerPin.css';

export default function MarkerPin({ city, color }) {
  return (
    <Marker longitude={city.longitude} latitude={city.latitude}>
      <span style={{ backgroundColor: `${color}` }} />
    </Marker>
  );
}
