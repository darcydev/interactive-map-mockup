import React, { useState } from 'react';
import DeckGL from '@deck.gl/react';
import { PathLayer } from '@deck.gl/layers';
import { StaticMap, Popup } from 'react-map-gl';
import styled from 'styled-components';
import { Select } from 'antd';

import MarkerPin from './MarkerPin';
import Slider from './Slider';
import { timeToString } from '../helpers/timeToString';
import { journeyTimes } from '../data/journeyTimes';
import { CITIES } from '../data/cities';

const { Option } = Select;

/**
 * a helper function to convert all object keys into a option within select bar
 * @param {object} objKey
 * @returns {component}
 */
const convertKeysToOption = (objKey) =>
  Object.keys(objKey).map((v) => (
    <StyledOption key={v} value={v}>
      {v}
    </StyledOption>
  ));

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
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');

  let beforeTime, afterTime, beforeString, afterString, timeReduction;

  if (fromLocation && toLocation && fromLocation !== toLocation) {
    if (!journeyTimes[fromLocation][toLocation])
      console.error('Route not found');
    else {
      beforeTime = journeyTimes[fromLocation][toLocation][0];
      afterTime = journeyTimes[fromLocation][toLocation][1];
      beforeString = timeToString(beforeTime);
      afterString = timeToString(afterTime);
      timeReduction = Math.round((afterTime / beforeTime) * 100);
    }
  }

  const onMapClicked = (event) => {
    const longClicked = event.coordinate[0];
    const latClicked = event.coordinate[1];
    const nearestCity = cityWithNearestLongAndLat(latClicked, longClicked);

    if (fromLocation === '' && toLocation === '') {
      setFromLocation(nearestCity);
    } else if (toLocation === '') {
      setToLocation(nearestCity);
    } else {
      setFromLocation(nearestCity);
      setToLocation('');
    }
  };

  return (
    <>
      <StyledControlPanel>
        <div className='flex-container'>
          <StyledSelectBarContainer>
            <h5 style={{ textAlign: 'left' }}>FROM:</h5>
            <StyledSelect
              value={fromLocation ? fromLocation : 'SELECT DESTINATION'}
              onFocus={() => setToLocation('')}
              onChange={(value) => setFromLocation(value)}
            >
              {convertKeysToOption(journeyTimes)}
            </StyledSelect>
          </StyledSelectBarContainer>
          <StyledSelectBarContainer>
            <h5 style={{ textAlign: 'left' }}>TO:</h5>
            <StyledSelect
              value={toLocation ? toLocation : 'SELECT DESTINATION'}
              onChange={(value) => setToLocation(value)}
            >
              {fromLocation
                ? convertKeysToOption(journeyTimes[fromLocation])
                : null}
            </StyledSelect>
          </StyledSelectBarContainer>
        </div>
        <div>
          <Slider leftText='Before' rightText={beforeString} progress={100} />
          <Slider
            leftText='After'
            rightText={afterString}
            progress={timeReduction ? timeReduction : 100}
          />
        </div>
      </StyledControlPanel>
      <div style={{ position: 'relative', height: '100vh' }}>
        <DeckGL
          initialViewState={{
            latitude: -33.87364,
            longitude: 151.206913,
            zoom: 8,
            bearing: 0,
            pitch: 0,
          }}
          controller={true}
          onClick={onMapClicked}
          layers={[
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
                  name: 'central-west-route',
                  color: [244, 128, 35],
                  path: [
                    [148.17485, -33.137897],
                    [149.1, -33.2833],
                    [149.5775, -33.4193],
                    [150.157, -33.4827],
                    [150.3119, -33.7125],
                    [151.206913, -33.87364],
                  ],
                },
                {
                  name: 'southern-route',
                  color: [211, 11, 0],
                  path: [
                    [150.58268, -34.89259],
                    [150.854446, -34.67028],
                    [150.86775, -34.57912],
                    [150.79474, -34.49337],
                    [150.893555, -34.424179],
                    [150.814163, -34.064999],
                    [151.05, -34.0333],
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
          ]}
        >
          <StaticMap
            mapStyle='mapbox://styles/mapbox/streets-v11'
            mapboxApiAccessToken={process.env.REACT_APP_MAP_GL_ACCESS_TOKEN}
          >
            {CITIES.map((city, i) => (
              <MarkerPin key={`${i}: ${city.name}`} size={22} city={city} />
            ))}
          </StaticMap>
        </DeckGL>
      </div>
    </>
  );
}

const StyledControlPanel = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 450px;
  z-index: 9;

  .flex-container {
    display: flex;
    justify-content: space-between;
  }
`;

const StyledSelectBarContainer = styled.div`
  width: 48%;

  h5 {
    font-size: 14px;
  }
`;

const StyledSelect = styled(Select)`
  font-size: 18px;
  width: 100%;
  font-size: 12px;
`;

const StyledOption = styled(Option)`
  font-size: 18px;
  background: red;
`;
