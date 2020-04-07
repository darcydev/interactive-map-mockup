import React, { useState, useEffect, useCallback } from 'react';
import DeckGL from '@deck.gl/react';
import { PathLayer } from '@deck.gl/layers';
import { StaticMap, Marker } from 'react-map-gl';
import styled from 'styled-components';
import media from 'styled-media-query';
import { Select } from 'antd';

import MarkerPin from './MarkerPin';
import Sliders from './Sliders';
import Key from './Key';
import Tooltip from './Tooltip';
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
  Parkes_Orange,
  Parkes_Bathurst,
  Parkes_Lithgow,
  Parkes_Katoomba,
  Orange_Bathurst,
  Orange_Lithgow,
  Orange_Katoomba,
  Orange_Sydney,
  Bathurst_Lithgow,
  Bathurst_Katoomba,
  Bathurst_Sydney,
  Lithgow_Katoomba,
  Lithgow_Sydney,
  Katoomba_Sydney,
  Canberra_Goulburn,
  Canberra_Mittagong,
  Canberra_Campbelltown,
  Goulburn_Mittagong,
  Goulburn_Campbelltown,
  Goulburn_Sydney,
  Mittagong_Campbelltown,
  Mittagong_Sydney,
  Campbelltown_Sydney,
  Bomdaberry_Kiama,
  Bomdaberry_Shellharbour,
  Bomdaberry_Dapto,
  Bomdaberry_Wollongong,
  Bomdaberry_Sutherland,
  Kiama_Shellharbour,
  Kiama_Dapto,
  Kiama_Wollongong,
  Kiama_Sutherland,
  Kiama_Sydney,
  Shellharbour_Dapto,
  Shellharbour_Wollongong,
  Shellharbour_Sutherland,
  Shellharbour_Sydney,
  Dapto_Wollongong,
  Dapto_Sutherland,
  Dapto_Sydney,
  Wollongong_Sutherland,
  Wollongong_Sydney,
  Sutherland_Sydney,
  northernStations,
  centralWestStations,
  southernWestStations,
  southernStations,
} from '../data/route-layers';
import InfoBox from './InfoBox';
import './Map.css';

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
    updateRouteLayer();
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

  // this is an incredibly long and repetitive hook, feel free to fix it
  useEffect(() => {
    if (fromLocation && !toLocation) {
      updateRouteLayer();
    } else if (fromLocation && toLocation) {
      if (fromLocation === 'Port Macquarie') {
        if (toLocation === 'Taree') {
          setRouteSelected(PortMacquarie_Taree);
        } else if (toLocation === 'Newcastle') {
          setRouteSelected(PortMacquarie_Newcastle);
        } else if (toLocation === 'Lake Macquarie') {
          setRouteSelected(PortMacquarie_LakeMacquarie);
        } else if (toLocation === 'Tuggerah') {
          setRouteSelected(PortMacquarie_Tuggerah);
        } else if (toLocation === 'Gosford') {
          setRouteSelected(PortMacquarie_Gosford);
        } else if (toLocation === 'Epping') {
          setRouteSelected(PortMacquarie_Epping);
        } else if (toLocation === 'Sydney') {
          setRouteSelected(northernRoute);
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
      } else if (fromLocation === 'Tuggerah') {
        if (toLocation === 'Port Macquarie') {
          setRouteSelected(PortMacquarie_Tuggerah);
        } else if (toLocation === 'Taree') {
          setRouteSelected(Taree_Tuggerah);
        } else if (toLocation === 'Newcastle') {
          setRouteSelected(Newcastle_Tuggerah);
        } else if (toLocation === 'Lake Macquarie') {
          setRouteSelected(LakeMacquarie_Tuggerah);
        } else if (toLocation === 'Gosford') {
          setRouteSelected(Tuggerah_Gosford);
        } else if (toLocation === 'Epping') {
          setRouteSelected(Tuggerah_Epping);
        } else if (toLocation === 'Sydney') {
          setRouteSelected(Tuggerah_Sydney);
        }
      } else if (fromLocation === 'Gosford') {
        if (toLocation === 'Port Macquarie') {
          setRouteSelected(PortMacquarie_Gosford);
        } else if (toLocation === 'Taree') {
          setRouteSelected(Taree_Gosford);
        } else if (toLocation === 'Newcastle') {
          setRouteSelected(Newcastle_Gosford);
        } else if (toLocation === 'Lake Macquarie') {
          setRouteSelected(LakeMacquarie_Gosford);
        } else if (toLocation === 'Tuggerah') {
          setRouteSelected(Tuggerah_Gosford);
        } else if (toLocation === 'Epping') {
          setRouteSelected(Gosford_Epping);
        } else if (toLocation === 'Sydney') {
          setRouteSelected(Gosford_Sydney);
        }
      } else if (fromLocation === 'Epping') {
        if (toLocation === 'Port Macquarie') {
          setRouteSelected(PortMacquarie_Epping);
        } else if (toLocation === 'Taree') {
          setRouteSelected(Taree_Epping);
        } else if (toLocation === 'Newcastle') {
          setRouteSelected(Newcastle_Epping);
        } else if (toLocation === 'Lake Macquarie') {
          setRouteSelected(LakeMacquarie_Epping);
        } else if (toLocation === 'Gosford') {
          setRouteSelected(Gosford_Epping);
        } else if (toLocation === 'Tuggerah') {
          setRouteSelected(Tuggerah_Epping);
        } else if (toLocation === 'Sydney') {
          setRouteSelected(Epping_Sydney);
        }
      } else if (fromLocation === 'Sydney') {
        if (toLocation === 'Port Macquarie') {
          setRouteSelected(northernRoute);
        } else if (toLocation === 'Taree') {
          setRouteSelected(Taree_Sydney);
        } else if (toLocation === 'Newcastle') {
          setRouteSelected(Newcastle_Sydney);
        } else if (toLocation === 'Lake Macquarie') {
          setRouteSelected(LakeMacquarie_Sydney);
        } else if (toLocation === 'Gosford') {
          setRouteSelected(Gosford_Sydney);
        } else if (toLocation === 'Epping') {
          setRouteSelected(Epping_Sydney);
        } else if (toLocation === 'Tuggerah') {
          setRouteSelected(Tuggerah_Sydney);
        }
      } else if (fromLocation === 'Parkes') {
        if (toLocation === 'Orange') {
          setRouteSelected(Parkes_Orange);
        } else if (toLocation === 'Bathurst') {
          setRouteSelected(Parkes_Bathurst);
        } else if (toLocation === 'Lithgow') {
          setRouteSelected(Parkes_Lithgow);
        } else if (toLocation === 'Katoomba') {
          setRouteSelected(Parkes_Katoomba);
        } else if (toLocation === 'Sydney') {
          setRouteSelected(centralWestRoute);
        }
      } else if (fromLocation === 'Orange') {
        if (toLocation === 'Parkes') {
          setRouteSelected(Parkes_Orange);
        } else if (toLocation === 'Bathurst') {
          setRouteSelected(Orange_Bathurst);
        } else if (toLocation === 'Lithgow') {
          setRouteSelected(Orange_Lithgow);
        } else if (toLocation === 'Katoomba') {
          setRouteSelected(Orange_Katoomba);
        } else if (toLocation === 'Sydney') {
          setRouteSelected(Orange_Sydney);
        }
      } else if (fromLocation === 'Bathurst') {
        if (toLocation === 'Parkes') {
          setRouteSelected(Parkes_Bathurst);
        } else if (toLocation === 'Orange') {
          setRouteSelected(Orange_Bathurst);
        } else if (toLocation === 'Lithgow') {
          setRouteSelected(Bathurst_Lithgow);
        } else if (toLocation === 'Katoomba') {
          setRouteSelected(Bathurst_Katoomba);
        } else if (toLocation === 'Sydney') {
          setRouteSelected(Bathurst_Sydney);
        }
      } else if (fromLocation === 'Lithgow') {
        if (toLocation === 'Orange') {
          setRouteSelected(Orange_Lithgow);
        } else if (toLocation === 'Bathurst') {
          setRouteSelected(Bathurst_Lithgow);
        } else if (toLocation === 'Parkes') {
          setRouteSelected(Parkes_Lithgow);
        } else if (toLocation === 'Katoomba') {
          setRouteSelected(Lithgow_Katoomba);
        } else if (toLocation === 'Sydney') {
          setRouteSelected(Lithgow_Sydney);
        }
      } else if (fromLocation === 'Katoomba') {
        if (toLocation === 'Orange') {
          setRouteSelected(Parkes_Orange);
        } else if (toLocation === 'Bathurst') {
          setRouteSelected(Parkes_Bathurst);
        } else if (toLocation === 'Lithgow') {
          setRouteSelected(Parkes_Lithgow);
        } else if (toLocation === 'Katoomba') {
          setRouteSelected(Parkes_Katoomba);
        } else if (toLocation === 'Sydney') {
          setRouteSelected(Katoomba_Sydney);
        }
      } else if (fromLocation === 'Canberra') {
        if (toLocation === 'Goulburn') {
          setRouteSelected(Canberra_Goulburn);
        } else if (toLocation === 'Mittagong') {
          setRouteSelected(Canberra_Mittagong);
        } else if (toLocation === 'Campbelltown') {
          setRouteSelected(Canberra_Campbelltown);
        } else if (toLocation === 'Sydney') {
          setRouteSelected(southernWestRoute);
        }
      } else if (fromLocation === 'Goulburn') {
        if (toLocation === 'Canberra') {
          setRouteSelected(Canberra_Goulburn);
        } else if (toLocation === 'Mittagong') {
          setRouteSelected(Goulburn_Mittagong);
        } else if (toLocation === 'Campbelltown') {
          setRouteSelected(Goulburn_Campbelltown);
        } else if (toLocation === 'Sydney') {
          setRouteSelected(Goulburn_Sydney);
        }
      } else if (fromLocation === 'Mittagong') {
        if (toLocation === 'Canberra') {
          setRouteSelected(Canberra_Mittagong);
        } else if (toLocation === 'Goulburn') {
          setRouteSelected(Goulburn_Mittagong);
        } else if (toLocation === 'Campbelltown') {
          setRouteSelected(Mittagong_Campbelltown);
        } else if (toLocation === 'Sydney') {
          setRouteSelected(Mittagong_Sydney);
        }
      } else if (fromLocation === 'Campbelltown') {
        if (toLocation === 'Canberra') {
          setRouteSelected(Canberra_Campbelltown);
        } else if (toLocation === 'Mittagong') {
          setRouteSelected(Mittagong_Campbelltown);
        } else if (toLocation === 'Goulburn') {
          setRouteSelected(Goulburn_Campbelltown);
        } else if (toLocation === 'Sydney') {
          setRouteSelected(Campbelltown_Sydney);
        }
      } else if (fromLocation === 'Bomdaberry') {
        if (toLocation === 'Kiama') {
          setRouteSelected(Bomdaberry_Kiama);
        } else if (toLocation === 'Shellharbour') {
          setRouteSelected(Bomdaberry_Shellharbour);
        } else if (toLocation === 'Dapto') {
          setRouteSelected(Bomdaberry_Dapto);
        } else if (toLocation === 'Wollongong') {
          setRouteSelected(Bomdaberry_Wollongong);
        } else if (toLocation === 'Sutherland') {
          setRouteSelected(Bomdaberry_Sutherland);
        } else if (toLocation === 'Sydney') {
          setRouteSelected(southernRoute);
        }
      } else if (fromLocation === 'Kiama') {
        if (toLocation === 'Bomdaberry') {
          setRouteSelected(Bomdaberry_Kiama);
        } else if (toLocation === 'Shellharbour') {
          setRouteSelected(Kiama_Shellharbour);
        } else if (toLocation === 'Dapto') {
          setRouteSelected(Kiama_Dapto);
        } else if (toLocation === 'Wollongong') {
          setRouteSelected(Kiama_Wollongong);
        } else if (toLocation === 'Sutherland') {
          setRouteSelected(Kiama_Sutherland);
        } else if (toLocation === 'Sydney') {
          setRouteSelected(Kiama_Sydney);
        }
      } else if (fromLocation === 'Shellharbour') {
        if (toLocation === 'Bomdaberry') {
          setRouteSelected(Bomdaberry_Shellharbour);
        } else if (toLocation === 'Kiama') {
          setRouteSelected(Kiama_Shellharbour);
        } else if (toLocation === 'Dapto') {
          setRouteSelected(Shellharbour_Dapto);
        } else if (toLocation === 'Wollongong') {
          setRouteSelected(Shellharbour_Wollongong);
        } else if (toLocation === 'Sutherland') {
          setRouteSelected(Shellharbour_Sutherland);
        } else if (toLocation === 'Sydney') {
          setRouteSelected(Shellharbour_Sydney);
        }
      } else if (fromLocation === 'Dapto') {
        if (toLocation === 'Bomdaberry') {
          setRouteSelected(Bomdaberry_Dapto);
        } else if (toLocation === 'Shellharbour') {
          setRouteSelected(Shellharbour_Dapto);
        } else if (toLocation === 'Kiama') {
          setRouteSelected(Kiama_Dapto);
        } else if (toLocation === 'Wollongong') {
          setRouteSelected(Dapto_Wollongong);
        } else if (toLocation === 'Sutherland') {
          setRouteSelected(Dapto_Sutherland);
        } else if (toLocation === 'Sydney') {
          setRouteSelected(Dapto_Sydney);
        }
      } else if (fromLocation === 'Wollongong') {
        if (toLocation === 'Bomdaberry') {
          setRouteSelected(Bomdaberry_Wollongong);
        } else if (toLocation === 'Shellharbour') {
          setRouteSelected(Shellharbour_Wollongong);
        } else if (toLocation === 'Dapto') {
          setRouteSelected(Dapto_Wollongong);
        } else if (toLocation === 'Kiama') {
          setRouteSelected(Kiama_Wollongong);
        } else if (toLocation === 'Sutherland') {
          setRouteSelected(Wollongong_Sutherland);
        } else if (toLocation === 'Sydney') {
          setRouteSelected(Wollongong_Sydney);
        }
      } else if (fromLocation === 'Sutherland') {
        if (toLocation === 'Bomdaberry') {
          setRouteSelected(Bomdaberry_Sutherland);
        } else if (toLocation === 'Shellharbour') {
          setRouteSelected(Shellharbour_Sutherland);
        } else if (toLocation === 'Dapto') {
          setRouteSelected(Dapto_Sutherland);
        } else if (toLocation === 'Wollongong') {
          setRouteSelected(Wollongong_Sutherland);
        } else if (toLocation === 'Kiama') {
          setRouteSelected(Kiama_Sutherland);
        } else if (toLocation === 'Sydney') {
          setRouteSelected(Sutherland_Sydney);
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
        <div className='button-row'>
          <button>Corridors</button>
          <button>Journey Times</button>
          <button>Stages</button>
        </div>
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
            <>
              <InfoBox className='info-box' fromLocation={fromLocation} />
              <button className='clear-form-btn' onClick={clearForm}>
                Clear destinations
              </button>
            </>
          ) : (
            <img
              src='https://www.nationalparks.nsw.gov.au/-/media/npws/images/parks/sydney-harbour-national-park/neilsen-park/nielsen-park-01.jpg'
              alt='park'
              style={{
                width: '100%',
                borderRadius: 50,
                marginTop: 68,
                height: '100%',
              }}
            />
          )}
        </StyledControlPanel>
      </div>
      <div className='map'>
        <Tooltip toolTip={toolTip} />
        <div style={{ position: 'relative', height: '100vh' }}>
          <DeckGL
            initialViewState={{
              latitude: -33.87364,
              longitude: 151.206913,
              zoom: 8,
              maxZoom: 12,
              minZoom: 4,
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
                widthMinPixels: 7,
                getColor: (data) => data.color,
                getPath: (d) => d.path,
              }),
            ]}
          >
            <StaticMap
              mapStyle='mapbox://styles/mapbox/streets-v11'
              mapboxApiAccessToken={process.env.REACT_APP_MAP_GL_ACCESS_TOKEN}
            >
              {CITIES.map((city, i) => {
                let color;

                if (city.city === 'Sydney') color = null;
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
              })}
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
    background: whitesmoke;

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
  h5,
  h6 {
    color: #212121;
  }

  h1 {
    font-weight: 700;
    font-size: 35px;
  }

  .clear-form-btn {
    margin: 15px 0;
    border-radius: 15px;
    font-size: 10px;
    background-color: #212121;
    border: none;
    color: white;
    padding: 8px;
    width: 130px;

    ${media.lessThan('700px')`
      position: absolute;
      bottom: 35px;
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
