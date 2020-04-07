import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

import ProgressBar from './ProgressBar';

export default function Sliders({ before, after, reduction }) {
  return (
    <>
      <StyledSlider className='before'>
        <div className='headings'>
          <h4>
            Travel time <b>before</b> fastrail
          </h4>
          <h3>{before}</h3>
        </div>
        <ProgressBar value={100} />
      </StyledSlider>
      <StyledSlider className='after'>
        <div className='headings'>
          <h4>
            Travel time <b>after</b> fastrail
          </h4>
          <h3>{after}</h3>
        </div>
        <ProgressBar value={reduction} />
      </StyledSlider>
    </>
  );
}

const StyledSlider = styled.div`
  padding: 10px 0;

  .headings {
    display: flex;
    justify-content: space-between;
    padding: 0 0 10px 0;

    h4 {
      align-self: center;
      padding-bottom: 0px;
      color: white;
      font-size: 13px;
    }

    h3 {
      color: white;
      font-size: 19px;
    }
  }

  ${media.lessThan('700px')`
    display: flex;
    flex-direction: column;

    .headings{
      flex-direction: column;
      
      h3 {
        font-size: 46px;
        margin-bottom: 0.3em;
      }

      h4 {
        align-self: start;
        font-size: 22px;
      }
    }
  `}
`;
