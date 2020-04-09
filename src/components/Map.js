import React, { useState, useEffect, useCallback } from 'react';
import DeckGL from '@deck.gl/react';
import { PathLayer, IconLayer } from '@deck.gl/layers';
import { StaticMap } from 'react-map-gl';
import styled from 'styled-components';
import media from 'styled-media-query';
import { Select } from 'antd';

import InfoBox from './InfoBox';
import Header from './Header';
import Sliders from './Sliders';
import Key from './Key';
import Tooltip from './Tooltip';
import { findNearestCity } from '../helpers/findNearestCity';
import { journeyTimes } from '../data/journeyTimes';
import { CITIES } from '../data/cities';
import { timeToString } from '../helpers/timeToString';
import { convertKeysToOption } from '../helpers/convertKeysToOption';
import findExactRoute from '../helpers/findExactRoute';
import {
  allRoutes,
  northernRoute,
  centralWestRoute,
  southernWestRoute,
  southernRoute,
  northernStations,
  centralWestStations,
  southernWestStations,
  southernStations,
} from '../data/route-layers';

export default function Map() {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [routeSelected, setRouteSelected] = useState(allRoutes);
  const [toolTip, setToolTip] = useState({
    title: '',
    visible: false,
  });
  const [viewport, setViewport] = useState({
    latitude: -33.87364,
    longitude: 151.206913,
    zoom: 7,
    bearing: 0,
    pitch: 0,
  });

  let beforeTime, afterTime, beforeString, afterString, timeReduction;

  const NEW_MARKERS = [];

  for (let [key, value] of Object.entries(CITIES)) {
    NEW_MARKERS.push({
      name: key,
      exists: 2214,
      coordinates: value.coordinates,
      routes: value.routes,
      icon: 'https://img.icons8.com/officel/16/000000/delete-link.png',
    });
  }

  /*   const onMapHover = (event) => {
    if (event.coordinate) {
      const latHovered = event.coordinate[1];
      const longHovered = event.coordinate[0];
      const nearestCity = findNearestCity(latHovered, longHovered);

      if (nearestCity) {
        let hoverRoutes = [];
        if (northernStations.includes(nearestCity))
          hoverRoutes.push('northern-route');
        if (centralWestStations.includes(nearestCity))
          hoverRoutes.push('central-west-route');
        if (southernWestStations.includes(nearestCity))
          hoverRoutes.push('southern-west-route');
        if (southernStations.includes(nearestCity))
          hoverRoutes.push('southern-route');

        setToolTip({
          title: nearestCity,
          routes: hoverRoutes,
          visible: true,
        });
      } else {
        setToolTip({
          visible: false,
        });
      }
    }
  }; */

  const onNewHover = (d) => {
    console.log(d);

    if (d.object) {
      setToolTip({
        title: d.object.name,
        visible: true,
        routes: d.object.routes,
      });
    } else {
      setToolTip({
        visible: false,
      });
    }
  };

  const onMapClicked = (event) => {
    if (event.coordinate) {
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
    }
  };

  const clearForm = () => {
    setFromLocation('');
    setToLocation('');
    setRouteSelected(allRoutes);
  };

  const updateRouteLayer = useCallback(() => {
    if (fromLocation === 'Sydney') setRouteSelected(allRoutes);
    else {
      if (northernStations.includes(fromLocation)) {
        setRouteSelected(northernRoute);
      } else if (centralWestStations.includes(fromLocation)) {
        setRouteSelected(centralWestRoute);
      } else if (southernWestStations.includes(fromLocation)) {
        setRouteSelected(southernWestRoute);
      } else if (southernStations.includes(fromLocation)) {
        setRouteSelected(southernRoute);
      }
    }
  }, [fromLocation]);

  useEffect(() => {
    if (fromLocation && !toLocation) {
      updateRouteLayer();
    } else if (fromLocation && toLocation) {
      const exactRoute = findExactRoute(fromLocation, toLocation);
      setRouteSelected(exactRoute);
    }
  }, [fromLocation, toLocation, updateRouteLayer]);

  if (fromLocation && toLocation && fromLocation !== toLocation) {
    if (journeyTimes[fromLocation][toLocation]) {
      // the two selected locations are a real route, so extract the data and update the displayed layers
      beforeTime = journeyTimes[fromLocation][toLocation][0];
      afterTime = journeyTimes[fromLocation][toLocation][1];
      beforeString = timeToString(beforeTime);
      afterString = timeToString(afterTime);
      timeReduction = Math.round((afterTime / beforeTime) * 100);
    }
  }

  return (
    <StyledContainer>
      <div className='sider'>
        <Header />
        <StyledControlPanel>
          <h1>Travel times</h1>
          <div className='select-bars'>
            <div className='select-bar'>
              <h5 style={{ textAlign: 'left' }}>From:</h5>
              <StyledSelect
                value={fromLocation ? fromLocation : 'SELECT DESTINATION'}
                onFocus={() => setFromLocation('')}
                onChange={(value) => setFromLocation(value)}
              >
                {convertKeysToOption(journeyTimes)}
              </StyledSelect>
            </div>
            <div className='select-bar'>
              <h5 style={{ textAlign: 'left' }}>To:</h5>
              <StyledSelect
                value={toLocation ? toLocation : 'SELECT DESTINATION'}
                onChange={(value) => setToLocation(value)}
              >
                {fromLocation
                  ? convertKeysToOption(journeyTimes[fromLocation])
                  : null}
              </StyledSelect>
            </div>
          </div>
          <div className='sliders'>
            <Sliders
              before={beforeString}
              after={afterString}
              reduction={timeReduction ? timeReduction : 100}
            />
          </div>
          {fromLocation ? (
            <div className='info-box-container'>
              <InfoBox className='info-box' fromLocation={fromLocation} />
              <button className='clear-form-btn' onClick={clearForm}>
                Clear destinations
              </button>
            </div>
          ) : (
            <div className='new-text'>
              <br />
              <p>
                Economic modelling shows ONE HOUR is the accepted
                business/commute time.
                <br />
                <br />
                Research shows people will travel TWO HOURS for a social
                interaction.
              </p>
              <h1>Overview</h1>
              <p>
                Sint dolore tempor duis laboris cillum ex non culpa non amet
                cillum ut aute veniam. Aute dolor enim enim cupidatat velit.
                Esse fugiat tempor.
              </p>
              <p className='overview'>
                Velit elit ex adipisicing velit elit. Ad exercitation elit
                aliqua cupidatat magna. Occaecat non ad eiusmod velit
                consectetur aliqua quis veniam ex labore velit. Minim in est ut
                aliqua irure sunt sunt duis aute labore magna. Ut nostrud magna
                aliquip id commodo aliqua occaecat nulla.
              </p>
            </div>
          )}
        </StyledControlPanel>
      </div>
      <div className='map'>
        <Tooltip toolTip={toolTip} />
        <div style={{ position: 'relative', height: '100vh' }}>
          <DeckGL
            initialViewState={viewport}
            controller={true}
            onClick={onMapClicked}
            /* onHover={onMapHover} */
            onViewportChange={(viewport) => setViewport(viewport)}
            layers={[
              new PathLayer({
                id: 'path-layer',
                data: routeSelected,
                rounded: true,
                pickable: true,
                widthMinPixels: 7,
                getColor: (data) => data.color,
                getPath: (d) => d.path,
              }),
              new IconLayer({
                id: 'icon-layer',
                data: NEW_MARKERS,
                pickable: true,
                getIcon: (d) => ({
                  url:
                    'https://img.icons8.com/officel/16/000000/delete-link.png',
                  width: 128,
                  height: 128,
                  anchorY: 128,
                }),
                iconMapping: {
                  marker: { x: 0, y: 0, width: 32, height: 32, mask: true },
                },
                sizeScale: 15,
                getPosition: (d) => d.coordinates,
                getSize: () => 1.5,
                getColor: (d) => [Math.sqrt(d.exits), 140, 0],
                onHover: (d) => onNewHover(d),
              }),
            ]}
          >
            <StaticMap
              mapStyle='mapbox://styles/mapbox/streets-v11'
              mapboxApiAccessToken={process.env.REACT_APP_MAP_GL_ACCESS_TOKEN}
            >
              {/*               {CITIES.map((city, i) => {
                let color;

                if (city.city === 'Sydney') color = 'black';
                else if (northernStations.includes(city.city))
                  color = '#6593f5';
                else if (centralWestStations.includes(city.city))
                  color = 'orange';
                else if (southernWestStations.includes(city.city))
                  color = 'green';
                else if (southernStations.includes(city.city)) color = 'red';

                return (
                  <MarkerPin
                    key={`${i}: ${city.city}`}
                    city={city}
                    color={color}
                  />
                );
              })} */}
            </StaticMap>
            <Key />
          </DeckGL>
        </div>
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;

  .sider {
    width: 35%;
    background: #fff;

    .select-bars {
      .select-bar {
        width: 48%;

        h5 {
          font-size: 21px;
        }
      }
    }
  }

  .map {
    width: 65%;
  }

  ${media.lessThan('700px')`
    .sider {
      width: 100%;
      height: 100vh;

      .select-bars {
        flex-direction: column;

        .select-bar {
          width: 100%;
          padding: 10px 0;

          h5 {
            font-size: 22px;
            margin-bottom: 0;
          }
        }
      }
    }

    .map {
      display: none;
    }
  `}
`;

const StyledControlPanel = styled.div`
  padding: 20px 40px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    color: #212121;
  }

  h1 {
    font-weight: 600;
    font-size: 45px;

    ${media.lessThan('1200px')`
      font-size: 35px;
    `}

    ${media.lessThan('850px')`
      font-size: 25px;
    `}

    ${media.lessThan('700px')`
      font-size: 45px;
    `}

    ${media.lessThan('450px')`
      font-size: 30px;
    `}
  }

  .clear-form-btn {
    margin: 15px 0;
    border-radius: 15px;
    font-size: 10px;
    background-color: #808080;
    border: none;
    color: white;
    padding: 8px;
    width: 130px;

    ${media.lessThan('700px')`
      position: relative;
      font-size: 18px;
      width: 210px;
    `}
  }

  .select-bars {
    display: flex;
    justify-content: space-between;
  }

  .sliders {
    padding-top: 20px;
  }

  ${media.lessThan('1200px')`
    .overview {
      display: none;
    }
  `}
`;

const StyledSelect = styled(Select)`
  width: 100%;
  font-size: 15px;

  .ant-select-selector {
    height: 28px;
  }

  ${media.lessThan('700px')`
    font-size: 16px;

    .ant-select-selector {
      height: 50px !important;
    }
  `}
`;
