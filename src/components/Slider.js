import React from 'react';
import styled from 'styled-components';

import ProgressBar from './ProgressBar';

export default function Slider({ leftText, rightText, progress }) {
  return (
    <StyledSlider>
      <StyledSliderHeadings>
        <StyledH4>{leftText}</StyledH4>
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
`;

const StyledH4 = styled.h4`
  align-self: center;
  padding-bottom: 0px;
`;
