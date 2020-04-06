import React, { useState } from 'react';
import DeckGL from '@deck.gl/react';
import { PathLayer } from '@deck.gl/layers';
import { StaticMap, Popup } from 'react-map-gl';
import styled from 'styled-components';
import { Select, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import MarkerPin from './MarkerPin';
import Slider from './Slider';
import { timeToString } from '../helpers/timeToString';
import { journeyTimes } from '../data/journeyTimes';
import { CITIES } from '../data/cities';
import {
  allRoutes,
  northernRoute,
  centralWestRoute,
  southernWestRoute,
  southernRoute,
  campbelltownRoutes,
} from '../data/route-layers';
import Key from './Key';

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
  const [routeSelected, setRouteSelected] = useState(allRoutes);

  let beforeTime, afterTime, beforeString, afterString, timeReduction;

  const onMapClicked = (event) => {
    const longClicked = event.coordinate[0];
    const latClicked = event.coordinate[1];
    const nearestCity = cityWithNearestLongAndLat(latClicked, longClicked);

    if (fromLocation === '' && toLocation === '') setFromLocation(nearestCity);
    else if (toLocation === '') setToLocation(nearestCity);
    else {
      setFromLocation(nearestCity);
      setToLocation('');
    }

    updateRouteLayer();
  };

  const clearForm = () => {
    setFromLocation('');
    setToLocation('');
    setRouteSelected(allRoutes);
  };

  const updateRouteLayer = () => {
    if (!fromLocation) setRouteSelected(allRoutes);
    else if (fromLocation === 'Sydney') setRouteSelected(allRoutes);
    else if (fromLocation === 'Campbelltown')
      setRouteSelected(campbelltownRoutes);
    else {
      for (let i = 0; i < CITIES.length; i++) {
        const { city, routes } = CITIES[i];

        if (city === fromLocation) {
          if (routes.length === 1) {
            if (routes[0] === 'northern-route') setRouteSelected(northernRoute);
            else if (routes[0] === 'central-west-route')
              setRouteSelected(centralWestRoute);
            else if (routes[0] === 'southern-west-route')
              setRouteSelected(southernWestRoute);
            else if (routes[0] === 'southern-route')
              setRouteSelected(southernRoute);
          }
        }
      }
    }
  };

  if (fromLocation && toLocation && fromLocation !== toLocation) {
    if (journeyTimes[fromLocation][toLocation]) {
      // the two selected locations are a real route, so extract the data and update the displayed layers
      beforeTime = journeyTimes[fromLocation][toLocation][0];
      afterTime = journeyTimes[fromLocation][toLocation][1];
      beforeString = timeToString(beforeTime);
      afterString = timeToString(afterTime);
      timeReduction = Math.round((afterTime / beforeTime) * 100);
    } else {
      clearForm();
    }
  }

  return (
    <>
      <StyledControlPanel>
        <div
          style={{
            textAlign: 'right',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px 5px',
          }}
        >
          <Button type='primary' onClick={updateRouteLayer}>
            SHOW ROUTE
          </Button>
          <Button type='primary' onClick={clearForm}>
            <CloseOutlined />
          </Button>
        </div>
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
        <Key />
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
              data: routeSelected,
              rounded: true,
              pickable: true,
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
  background: #fff;
  padding: 20px;
  border-radius: 15px;

  .flex-container {
    display: flex;
    justify-content: space-between;
  }

  .key {
    text-align: right;

    .row {
      display: flex;
      justify-content: flex-end;

      span {
        height: 15px;
        width: 15px;
        border-radius: 50%;
        display: inline-block;
        vertical-align: sub;
      }

      .blue {
        background-color: blue;
      }

      .green {
        background-color: green;
      }

      .red {
        background-color: red;
      }

      .orange {
        background-color: orange;
      }
    }
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
