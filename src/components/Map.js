import React, { useState, useEffect, useCallback } from 'react';
import DeckGL from '@deck.gl/react';
import { PathLayer } from '@deck.gl/layers';
import { StaticMap } from 'react-map-gl';
import styled from 'styled-components';
import { Select, Button, Drawer } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import MarkerPin from './MarkerPin';
import Slider from './Slider';
import { timeToString } from '../helpers/timeToString';
import { convertKeysToOption } from '../helpers/convertKeysToOption';
import { findNearestCity } from '../helpers/findNearestCity';
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

export default function Map() {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [routeSelected, setRouteSelected] = useState(allRoutes);
  const [toolTip, setToolTip] = useState({
    title: '',
    visible: false,
  });

  let beforeTime, afterTime, beforeString, afterString, timeReduction;

  const onMapHover = (event) => {
    if (event.coordinate) {
      const longEvent = event.coordinate[0];
      const latEvent = event.coordinate[1];
      const nearestCity = findNearestCity(latEvent, longEvent);

      if (nearestCity) {
        document.getElementById('tooltip').style.top = event.y - 110 + 'px';
        document.getElementById('tooltip').style.left = event.x - 75 + 'px';
        setToolTip({
          title: nearestCity,
          visible: true,
        });
      } else {
        setToolTip({
          visible: false,
        });
      }
    }
  };

  const onMapClicked = (event) => {
    const longClicked = event.coordinate[0];
    const latClicked = event.coordinate[1];
    const nearestCity = findNearestCity(latClicked, longClicked);

    if (nearestCity === fromLocation) {
      return;
    } else if (fromLocation === '' && toLocation === '') {
      setFromLocation(nearestCity);
    } else if (toLocation === '') {
      setToLocation(nearestCity);
    } else {
      setFromLocation(nearestCity);
      setToLocation('');
    }
  };

  const clearForm = () => {
    setFromLocation('');
    setToLocation('');
    setRouteSelected(allRoutes);
  };

  const updateRouteLayer = useCallback(() => {
    if (!fromLocation) setRouteSelected(allRoutes);
    else if (fromLocation === 'Sydney') setRouteSelected(allRoutes);
    else if (fromLocation === 'Campbelltown')
      setRouteSelected(campbelltownRoutes);
    else {
      for (let i = 0; i < CITIES.length; i++) {
        const { city, routes } = CITIES[i];

        if (city === fromLocation) {
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
  }, [fromLocation]);

  useEffect(() => {
    updateRouteLayer();
  }, [fromLocation, updateRouteLayer]);

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
    <StyledContainer>
      <div id='tooltip'>
        {toolTip.visible && (
          <div className='tooltip-inner'>
            <div className='routes'>TODO</div>
            <h3>{toolTip.title}</h3>
          </div>
        )}
      </div>
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
          onHover={onMapHover}
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
              <MarkerPin key={`${i}: ${city.name}`} size={25} city={city} />
            ))}
          </StaticMap>
          <Key />
        </DeckGL>
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  #sidebar {
    z-index: 99999;

    button {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 9;
    }

    .ant-drawer-content {
      background: green;
    }
  }

  #tooltip {
    z-index: 9999;
    position: absolute;

    .tooltip-inner {
      background: white;
      padding: 3px;
      border-radius: 10px;
      padding: 10px;
      width: 140px;
      line-height: 30px;
      text-align: center;
    }

    .tooltip-inner:after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -8px;
      width: 0;
      height: 0;
      border-top: 8px solid #000000;
      border-right: 8px solid transparent;
      border-left: 8px solid transparent;
    }
  }

  .tooltip:hover span {
    display: block;
    position: fixed;
    overflow: hidden;
  }
`;
