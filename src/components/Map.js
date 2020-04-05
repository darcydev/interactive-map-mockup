import React, { useState } from 'react';
import DeckGL from '@deck.gl/react';
import { StaticMap } from 'react-map-gl';
import styled from 'styled-components';
import { Select } from 'antd';

import MarkerPin from './MarkerPin';
import { layers } from './Layer';
import ProgressBar from './ProgressBar';
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

  if (fromLocation && toLocation) {
    const ROUTE = journeyTimes[fromLocation][toLocation];

    if (ROUTE) {
      beforeTime = ROUTE[0];
      afterTime = ROUTE[1];
      beforeString = timeToString(beforeTime);
      afterString = timeToString(afterTime);
      timeReduction = Math.round((afterTime / beforeTime) * 100);
    }
  }

  const FROM_LOCATIONS_OPTIONS_MARKUP = convertKeysToOption(journeyTimes);
  const TO_LOCATIONS_OPTIONS_MARKUP = fromLocation
    ? convertKeysToOption(journeyTimes[fromLocation])
    : null;

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

  console.log(fromLocation, toLocation);

  return (
    <>
      <>
        <StyledFlexContainer>
          <StyledSelectBarContainer>
            <h5 style={{ textAlign: 'left' }}>FROM:</h5>
            <StyledSelect
              value={fromLocation ? fromLocation : 'SELECT DESTINATION'}
              onFocus={() => setToLocation('')}
              onChange={(value) => setFromLocation(value)}
            >
              {FROM_LOCATIONS_OPTIONS_MARKUP}
            </StyledSelect>
          </StyledSelectBarContainer>
          <StyledSelectBarContainer>
            <h5 style={{ textAlign: 'left' }}>TO:</h5>
            <StyledSelect
              value={toLocation ? toLocation : 'SELECT DESTINATION'}
              onChange={(value) => setToLocation(value)}
            >
              {TO_LOCATIONS_OPTIONS_MARKUP}
            </StyledSelect>
          </StyledSelectBarContainer>
        </StyledFlexContainer>
        <div>
          <StyledSlider>
            <StyledSliderHeadings>
              <StyledH4>Before</StyledH4>
              <h3>{beforeString}</h3>
            </StyledSliderHeadings>
            <ProgressBar value={100} />
          </StyledSlider>
          <StyledSlider>
            <StyledSliderHeadings>
              <StyledH4>After</StyledH4>
              <h3>{afterString}</h3>
            </StyledSliderHeadings>
            <ProgressBar value={timeReduction ? timeReduction : 100} />
          </StyledSlider>
        </div>
      </>
      <div style={{ position: 'relative', height: 600 }}>
        <DeckGL
          initialViewState={{
            latitude: -33.87364,
            longitude: 151.206913,
            zoom: 5.5,
            bearing: 0,
            pitch: 0,
          }}
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
      </div>
    </>
  );
}

const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
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

const StyledSlider = styled.div`
  padding: 10px 0;
`;

const StyledSliderHeadings = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledH4 = styled.h4`
  align-self: center;
  padding-bottom: 0px;
`;

const StyledMarkerSpan = styled.span`
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid red;
`;
