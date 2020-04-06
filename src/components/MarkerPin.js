import React from 'react';
import { Marker } from 'react-map-gl';

export default function MarkerPin({ size, city }) {
  return (
    <Marker longitude={city.longitude} latitude={city.latitude}>
      <img
        alt='map-marker'
        src='https://image.flaticon.com/icons/png/24/37/37134.png'
        style={{
          cursor: 'pointer',
          fill: '#d00',
          stroke: 'none',
          transform: `translate(${-size / 2}px,${-size - 7}px)`,
          zIndex: 9999,
        }}
      />
    </Marker>
  );
}
