import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Select } from 'antd';
import { InsuranceOutlined } from '@ant-design/icons';

import Slider from './Slider';
import { timeToString } from '../helpers/timeToString';
import { convertKeysToOption } from '../helpers/convertKeysToOption';
import { journeyTimes } from '../data/journeyTimes';
import { CITIES } from '../data/cities';

export default function ControlPanel({
  mapFromLocation = '',
  mapToLocation = '',
}) {
  const [fromLocation, setFromLocation] = useState(mapFromLocation);
  const [toLocation, setToLocation] = useState(mapToLocation);
  const [infoDisplayed, setInfoDisplayed] = useState(false);

  let beforeTime, afterTime, beforeString, afterString, timeReduction;

  useEffect(() => {
    if (fromLocation) {
      setInfoDisplayed(true);
    }
  }, [fromLocation]);

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
    <StyledControlPanel>
      <h1>Travel times</h1>
      <div className='flex-container'>
        <StyledSelectBarContainer>
          <h5 style={{ textAlign: 'left' }}>From:</h5>
          <StyledSelect
            value={fromLocation ? fromLocation : 'SELECT DESTINATION'}
            onFocus={() => setToLocation('')}
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
              aliquip ad irure excepteur incididunt exercitation commodo sunt
              velit non. Velit dolor ex labore ad esse do consectetur culpa
              dolor voluptate deserunt laboris eiusmod elit.
              <br />
              <br />
              Culpa aliqua ad proident proident quis est voluptate veniam fugiat
              sit cupidatat dolore. Amet officia quis fugiat consequat.
              Excepteur magna officia consectetur nostrud. Reprehenderit laborum
              nostrud pariatur adipisicing fugiat irure magna dolor elit eu. Ut
              non amet ea enim. Qui commodo cillum esse qui minim. Nulla aliqua
              amet sunt aliquip ut.
            </p>
          </div>
        </div>
      )}
    </StyledControlPanel>
  );
}

const StyledControlPanel = styled.div`
  padding: 20px;

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
