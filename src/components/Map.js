import React, { useState, useEffect, useCallback } from 'react';
import DeckGL from '@deck.gl/react';
import { PathLayer } from '@deck.gl/layers';
import { StaticMap } from 'react-map-gl';
import styled from 'styled-components';
import { Select } from 'antd';
import { InsuranceOutlined } from '@ant-design/icons';

import MarkerPin from './MarkerPin';
import Slider from './Slider';
import Key from './Key';
import { findNearestCity } from '../helpers/findNearestCity';
import { journeyTimes } from '../data/journeyTimes';
import { CITIES } from '../data/cities';
import { timeToString } from '../helpers/timeToString';
import { convertKeysToOption } from '../helpers/convertKeysToOption';
import {
  allRoutes,
  northernRoute,
  centralWestRoute,
  southernWestRoute,
  southernRoute,
  PortMacquarie_Taree,
  PortMacquarie_Newcastle,
  PortMacquarie_LakeMacquarie,
  PortMacquarie_Tuggerah,
  PortMacquarie_Gosford,
  PortMacquarie_Epping,
  Taree_Newcastle,
  Taree_LakeMacquarie,
  Taree_Tuggerah,
  Taree_Gosford,
  Taree_Epping,
  Taree_Sydney,
  Newcastle_LakeMacquarie,
  Newcastle_Tuggerah,
  Newcastle_Gosford,
  Newcastle_Epping,
  Newcastle_Sydney,
  LakeMacquarie_Tuggerah,
  LakeMacquarie_Gosford,
  LakeMacquarie_Epping,
  LakeMacquarie_Sydney,
  Tuggerah_Gosford,
  Tuggerah_Epping,
  Tuggerah_Sydney,
  Gosford_Epping,
  Gosford_Sydney,
  Epping_Sydney,
  northernStations,
  centralWestStations,
  southernWestStations,
  southernStations,
} from '../data/route-layers';

export default function Map() {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [routeSelected, setRouteSelected] = useState(allRoutes);
  const [infoDisplayed, setInfoDisplayed] = useState(false);
  const [toolTip, setToolTip] = useState({
    title: '',
    visible: false,
  });

  let beforeTime, afterTime, beforeString, afterString, timeReduction;

  const onMapHover = (event) => {
    if (event.coordinate) {
      const nearestCity = findNearestCity(
        event.coordinate[1],
        event.coordinate[0]
      );

      if (nearestCity) {
        document.getElementById('tooltip').style.top = event.y - 130 + 'px';
        document.getElementById('tooltip').style.left = event.x + 580 + 'px';
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

  const updateRouteLayer = useCallback(() => {
    if (fromLocation === 'Sydney') setRouteSelected(allRoutes);
    else {
      if (northernStations.includes(fromLocation)) {
        setRouteSelected(northernRoute);
      } else if (centralWestStations.includes(fromLocation)) {
        setRouteSelected(centralWestRoute);
      } else if (southernWestStations.includes(fromLocation)) {
        setRouteSelected(southernWestStations);
      } else if (southernStations.includes(fromLocation)) {
        setRouteSelected(southernStations);
      }
    }
  }, [fromLocation]);

  // this is an incredibly long and repetitive hook, feel free to fix it
  useEffect(() => {
    if (fromLocation && !toLocation) {
      setInfoDisplayed(true);
      updateRouteLayer();
    } else if (fromLocation && toLocation) {
      if (fromLocation === 'Port Macquarie') {
        switch (toLocation) {
          case 'Taree':
            setRouteSelected(PortMacquarie_Taree);
            break;
          case 'Newcastle':
            setRouteSelected(PortMacquarie_Newcastle);
            break;
          case 'Lake Macquarie':
            setRouteSelected(PortMacquarie_LakeMacquarie);
            break;
          case 'Tuggerah':
            setRouteSelected(PortMacquarie_Tuggerah);
            break;
          case 'Gosford':
            setRouteSelected(PortMacquarie_Gosford);
            break;
          case 'Epping':
            setRouteSelected(PortMacquarie_Epping);
            break;
          case 'Sydney':
            setRouteSelected(northernRoute);
            break;
          default:
            break;
        }
      } else if (fromLocation === 'Taree') {
        if (toLocation === 'Port Macquarie') {
          setRouteSelected(PortMacquarie_Taree);
        } else if (toLocation === 'Newcastle') {
          setRouteSelected(Taree_Newcastle);
        } else if (toLocation === 'Lake Macquarie') {
          setRouteSelected(Taree_LakeMacquarie);
        } else if (toLocation === 'Tuggerah') {
          setRouteSelected(Taree_Tuggerah);
        } else if (toLocation === 'Gosford') {
          setRouteSelected(Taree_Gosford);
        } else if (toLocation === 'Epping') {
          setRouteSelected(Taree_Epping);
        } else if (toLocation === 'Sydney') {
          setRouteSelected(Taree_Sydney);
        }
      } else if (fromLocation === 'Newcastle') {
        if (toLocation === 'Port Macquarie') {
          setRouteSelected(PortMacquarie_Newcastle);
        } else if (toLocation === 'Taree') {
          setRouteSelected(Taree_Newcastle);
        } else if (toLocation === 'Lake Macquarie') {
          setRouteSelected(Newcastle_LakeMacquarie);
        } else if (toLocation === 'Tuggerah') {
          setRouteSelected(Newcastle_Tuggerah);
        } else if (toLocation === 'Gosford') {
          setRouteSelected(Newcastle_Gosford);
        } else if (toLocation === 'Epping') {
          setRouteSelected(Newcastle_Epping);
        } else if (toLocation === 'Sydney') {
          setRouteSelected(Newcastle_Sydney);
        }
      } else if (fromLocation === 'Lake Macquarie') {
        if (toLocation === 'Port Macquarie') {
          setRouteSelected(PortMacquarie_LakeMacquarie);
        } else if (toLocation === 'Taree') {
          setRouteSelected(Taree_LakeMacquarie);
        } else if (toLocation === 'Newcastle') {
          setRouteSelected(Newcastle_LakeMacquarie);
        } else if (toLocation === 'Tuggerah') {
          setRouteSelected(LakeMacquarie_Tuggerah);
        } else if (toLocation === 'Gosford') {
          setRouteSelected(LakeMacquarie_Gosford);
        } else if (toLocation === 'Epping') {
          setRouteSelected(LakeMacquarie_Epping);
        } else if (toLocation === 'Sydney') {
          setRouteSelected(LakeMacquarie_Sydney);
        }
      }
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
        <StyledControlPanel>
          <h1>Travel times</h1>
          <div className='flex-container'>
            <StyledSelectBarContainer>
              <h5 style={{ textAlign: 'left' }}>From:</h5>
              <StyledSelect
                value={fromLocation ? fromLocation : 'SELECT DESTINATION'}
                onFocus={() => setFromLocation('')}
                onChange={(value) => setFromLocation(value)}
              >
                {convertKeysToOption(journeyTimes)}
              </StyledSelect>
            </StyledSelectBarContainer>
            <StyledSelectBarContainer>
              <h5 style={{ textAlign: 'left' }}>To:</h5>
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
          <div className='sliders'>
            <Slider
              leftText='Travel time before fastrail'
              rightText={beforeString}
              progress={100}
            />
            <Slider
              leftText='Travel time after fastrail'
              rightText={afterString}
              progress={timeReduction ? timeReduction : 100}
            />
          </div>
          {infoDisplayed && (
            <div className='info-box'>
              <div className='row' style={{ justifyContent: 'space-between' }}>
                <h2>{fromLocation}</h2>
                <button onClick={() => setInfoDisplayed(false)}>
                  <b>X</b>
                </button>
              </div>
              <div className='row'>
                <InsuranceOutlined style={{ fontSize: 50 }} />
                <ul>
                  <li>2016 population</li>
                  <li>2056 expected population</li>
                  <li>2056 expected population with FastRail XX,</li>
                </ul>
              </div>
              <div className='row'>
                <InsuranceOutlined style={{ fontSize: 50 }} />
                <ul>
                  <li>2016 employment</li>
                  <li>2056 expected employment</li>
                  <li>2056 expected employment with FastRail XX,</li>
                </ul>
              </div>
              <div className='row'>
                <p>
                  Irure velit ipsum eu tempor eu. Nostrud aliquip exercitation
                  aliquip ad irure excepteur incididunt exercitation commodo
                  sunt velit non. Velit dolor ex labore ad esse do consectetur
                  culpa dolor voluptate deserunt laboris eiusmod elit.
                  <br />
                  <br />
                  Culpa aliqua ad proident proident quis est voluptate veniam
                  fugiat sit cupidatat dolore. Amet officia quis fugiat
                  consequat. Excepteur magna officia consectetur nostrud.
                  Reprehenderit laborum nostrud pariatur adipisicing fugiat
                  irure magna dolor elit eu. Ut non amet ea enim. Qui commodo
                  cillum esse qui minim. Nulla aliqua amet sunt aliquip ut.
                </p>
              </div>
            </div>
          )}
        </StyledControlPanel>
      </div>
      <div className='map'>
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
                widthMinPixels: 6.5,
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
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;

  .sider {
    width: 35%;
    background: #2e1800;
  }

  .map {
    width: 65%;
  }

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

const StyledControlPanel = styled.div`
  padding: 20px;

  h1,
  h5 {
    color: white;
  }

  h1 {
    font-weight: 700;
    font-size: 35px;
  }

  button {
    border: none;
    background: inherit;
  }

  .flex-container {
    display: flex;
    justify-content: space-between;
  }

  .sliders {
    padding-top: 20px;
  }

  .info-box {
    margin-top: 40px;
    background: white;
    padding: 20px;
    border-radius: 15px;

    .row {
      display: flex;

      svg {
        border: 3px solid #50bdc6;
        border-radius: 50%;
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
