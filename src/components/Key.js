import React from 'react';
import styled from 'styled-components';

export default function Key() {
  return (
    <StyledContainer>
      <div className='row'>
        <span class='dot blue' />
        <h5>Northern Route</h5>
      </div>
      <div className='row'>
        <span class='dot orange' />
        <h5>Central West Route</h5>
      </div>
      <div className='row'>
        <span class='dot red' />
        <h5>Southern Route</h5>
      </div>
      <div className='row'>
        <span class='dot green' />
        <h5>Southern West Route</h5>
      </div>
      <div className='row'>
        <svg
          height={15}
          viewBox='0 0 24 24'
          style={{
            fill: '#d00',
            paddingLeft: 8,
          }}
        >
          <path
            d={`M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`}
          />
        </svg>
        <h5 style={{ paddingLeft: 17 }}>Station Marker</h5>
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  position: absolute;
  padding: 10px;
  right: 30px;
  bottom: 30px;
  background: white;
  border-radius: 10px;

  .row {
    display: flex;
    padding: 6px 0;
    text-align: left;

    h5 {
      padding: 0 0 0 10px;
      margin-bottom: 0px;
    }

    span {
      height: 6px;
      width: 30px;
      border-radius: 50%;
      display: inline-block;
      vertical-align: sub;
      border-radius: 10px;
      margin-top: 6px;
    }

    .blue {
      background-color: blue;
    }

    .green {
      background-color: green;
    }

    .red {
      background-color: red;
    }

    .orange {
      background-color: orange;
    }
  }
`;
