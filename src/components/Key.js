import React from 'react';
import styled from 'styled-components';

export default function Key() {
  return (
    <StyledContainer>
      <div className='row'>
        <span className='dot__blue' />
        <h5>Northern route</h5>
      </div>
      <div className='row'>
        <span className='dot__red' />
        <h5>Southern route</h5>
      </div>
      <div className='row'>
        <span className='dot__green' />
        <h5>Southern inland route</h5>
      </div>
      <div className='row'>
        <span className='dot__orange' />
        <h5>Western route</h5>
      </div>
      <div className='row'>
        <span className='dot__black' />
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
  font-size: 22px;

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
      margin-top: 11px;
    }

    .dot__blue {
      background-color: #6593f5;
    }

    .dot__green {
      background-color: green;
    }

    .dot__red {
      background-color: red;
    }

    .dot__orange {
      background-color: orange;
    }

    .dot__black {
      background-color: black;
      border: 3px solid #fff;
      box-shadow: 0 0 0 2px black;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      margin: 4px 0 0 3px;
    }
  }
`;
