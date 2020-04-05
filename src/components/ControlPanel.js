import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Select } from 'antd';

import ProgressBar from './ProgressBar';
import { timeToString } from '../helpers/timeToString';
import { journeyTimes } from '../data/journeyTimes';
import RouteContext from '../context/route-context';

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

export default function ControlPanel() {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const context = useContext(RouteContext);

  console.log(context);

  useEffect(() => {
    console.log(10);
  }, [context]);

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

  console.log(journeyTimes[fromLocation]);

  /*   const TO_LOCATIONS_OPTIONS_MARKUP = fromLocation
    ? convertKeysToOption(journeyTimes[fromLocation])
    : null; */

  return (
    <>
      <StyledFlexContainer>
        <StyledSelectBarContainer>
          <h5 style={{ textAlign: 'left' }}>FROM:</h5>
          <StyledSelect
            defaultValue='SELECT LOCATION'
            onFocus={() => setToLocation('')}
            onChange={(value) => setFromLocation(value)}
          >
            {FROM_LOCATIONS_OPTIONS_MARKUP}
          </StyledSelect>
        </StyledSelectBarContainer>
        <StyledSelectBarContainer>
          <h5 style={{ textAlign: 'left' }}>TO:</h5>
          <StyledSelect
            defaultValue='SELECT LOCATION'
            onChange={(value) => setToLocation(value)}
          >
            {/* {TO_LOCATIONS_OPTIONS_MARKUP} */}
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
