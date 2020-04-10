import React, { useState, useEffect, useCallback } from 'react';
import DeckGL from '@deck.gl/react';
import { PathLayer, IconLayer } from '@deck.gl/layers';
import { StaticMap } from 'react-map-gl';
import styled from 'styled-components';
import media from 'styled-media-query';
import Select from 'react-select';

import InfoBox from './InfoBox';
import Header from './Header';
import Sliders from './Sliders';
import Key from './Key';
import Tooltip from './Tooltip';
import { journeyTimes } from '../data/journeyTimes';
import { CITIES } from '../data/cities';
import { convertKeysToOption } from '../helpers/convertKeysToOption';
import findExactRoute from '../helpers/findExactRoute';
import {
  allRoutes,
  northernRoute,
  westernRoute,
  southernInlandRoute,
  southernRoute,
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

  let beforeTime, afterTime;

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

  const onIconHover = (d) => {
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
    if (!event.object) return;
    const { name } = event.object;

    if (name === fromLocation) return;
    else if (fromLocation === '' && toLocation === '') {
      setFromLocation(name);
    } else if (toLocation === '') {
      setToLocation(name);
    } else {
      setFromLocation(name);
      setToLocation('');
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
      const ROUTES = CITIES[fromLocation].routes;

      if (ROUTES.includes('northern-route')) setRouteSelected(northernRoute);
      else if (ROUTES.includes('western-route')) setRouteSelected(westernRoute);
      else if (ROUTES.includes('southern-inland-route'))
        setRouteSelected(southernInlandRoute);
      else if (ROUTES.includes('southern-route'))
        setRouteSelected(southernRoute);
    }
  }, [fromLocation]);

  useEffect(() => {
    if (fromLocation && !toLocation) {
      updateRouteLayer();
    } else if (fromLocation && toLocation) {
      const exactRoute = findExactRoute(fromLocation, toLocation);
      console.log(fromLocation, toLocation);

      setRouteSelected(exactRoute);
    }
  }, [fromLocation, toLocation, updateRouteLayer]);

  if (
    fromLocation &&
    toLocation &&
    fromLocation !== toLocation &&
    journeyTimes[fromLocation][toLocation]
  ) {
    beforeTime = journeyTimes[fromLocation][toLocation][0];
    afterTime = journeyTimes[fromLocation][toLocation][1];
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
                defaultValue={fromLocation ? fromLocation : 'SELECT LOCATION'}
                onFocus={() => setFromLocation('')}
                onChange={(e) => setFromLocation(e.value)}
                options={convertKeysToOption(journeyTimes)}
              />
            </div>
            <div className='select-bar'>
              <h5 style={{ textAlign: 'left' }}>To:</h5>
              <StyledSelect
                defaultValue={toLocation ? toLocation : 'SELECT LOCATION'}
                onChange={(e) => setToLocation(e.value)}
                options={
                  fromLocation
                    ? convertKeysToOption(journeyTimes[fromLocation])
                    : null
                }
              />
            </div>
          </div>
          <Sliders before={beforeTime} after={afterTime} />
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
                  url: 'https://img.icons8.com/metro/26/000000/marker.png',
                  width: 328,
                  height: 328,
                  anchorY: 328,
                }),
                sizeScale: 15,
                getPosition: (d) => d.coordinates,
                getSize: () => 1.5,
                getColor: (d) => [Math.sqrt(d.exits), 140, 0],
                onHover: (d) => onIconHover(d),
              }),
            ]}
          >
            <StaticMap
              mapStyle='mapbox://styles/mapbox/streets-v11'
              mapboxApiAccessToken={process.env.REACT_APP_MAP_GL_ACCESS_TOKEN}
            />
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
  font-size: 15px;

  ${media.lessThan('700px')`
		font-size: 16px;

		.css-yk16xz-control {
			height: 64px;
		}
	`}
`;
