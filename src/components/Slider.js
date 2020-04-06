import React from 'react';
import styled from 'styled-components';

import ProgressBar from './ProgressBar';

export default function Slider({ leftText, rightText, progress }) {
  return (
    <StyledSlider>
      <StyledSliderHeadings>
        <h4>{leftText}</h4>
        <h3>{rightText}</h3>
      </StyledSliderHeadings>
      <ProgressBar value={progress} />
    </StyledSlider>
  );
}

const StyledSlider = styled.div`
  padding: 10px 0;
`;

const StyledSliderHeadings = styled.div`
  display: flex;
  justify-content: space-between;

  h4 {
    align-self: center;
    padding-bottom: 0px;
    color: white;
    font-size: 18px;
  }

  h3 {
    color: white;
    font-size: 20px;
  }
`;
