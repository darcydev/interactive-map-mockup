import React from 'react';
import styled from 'styled-components';

export default function Key() {
  return (
    <StyledContainer>
      <div className='row'>
        <span className='dot blue' />
        <h5>Northern route</h5>
      </div>
      <div className='row'>
        <span className='dot red' />
        <h5>Southern route</h5>
      </div>
      <div className='row'>
        <span className='dot green' />
        <h5>Southern inland route</h5>
      </div>
      <div className='row'>
        <span className='dot orange' />
        <h5>Western route</h5>
      </div>
      <div className='row'>
        <img
          alt='map-marker'
          src='https://image.flaticon.com/icons/png/24/37/37134.png'
          style={{
            cursor: 'pointer',
            transform: `translate(3px,-5px)`,
          }}
        />
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
      background-color: #6593f5;
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
