import React, { useState } from 'react';
import styled from 'styled-components';

export default function InfoBox({ fromLocation }) {
  const [isOpen, setIsOpen] = useState(true);

  return isOpen ? (
    <StyledContainer>
      <div className='row' style={{ justifyContent: 'space-between' }}>
        <h2>{fromLocation}</h2>
        <button onClick={() => setIsOpen(false)}>
          <b>X</b>
        </button>
      </div>
      <h5>POPULATION</h5>
      <div className='row'>
        <img
          src='https://image.flaticon.com/icons/svg/1063/1063299.svg'
          alt='briefcase'
        />
        <ul>
          <li>2016 population</li>
          <li>2056 expected population</li>
          <li>2056 expected population with FastRail XX,</li>
        </ul>
      </div>
      <h5>EMPLOYMENT</h5>
      <div className='row'>
        <img
          src='https://image.flaticon.com/icons/svg/681/681494.svg'
          alt='people'
        />
        <ul>
          <li>2016 employment</li>
          <li>2056 expected employment</li>
          <li>2056 expected employment with FastRail XX,</li>
        </ul>
      </div>
      <div className='row'>
        <p>
          Irure velit ipsum eu tempor eu. Nostrud aliquip exercitation aliquip
          ad irure excepteur incididunt exercitation commodo sunt velit non.
          Velit dolor ex labore ad esse do consectetur culpa dolor voluptate
          deserunt laboris eiusmod elit.
          <br />
          <br />
          Culpa aliqua ad proident proident quis est voluptate veniam fugiat sit
          cupidatat dolore. Amet officia quis fugiat consequat. Excepteur magna
          officia consectetur nostrud. Reprehenderit laborum nostrud pariatur
          adipisicing fugiat irure magna dolor elit eu. Ut non amet ea enim. Qui
          commodo cillum esse qui minim. Nulla aliqua amet sunt aliquip ut.
        </p>
      </div>
    </StyledContainer>
  ) : null;
}

const StyledContainer = styled.div`
  margin-top: 40px;
  background: white;
  padding: 20px;
  border-radius: 15px;

  h5 {
    color: black !important;
  }

  h2 {
    font-weight: 700;
  }

  .row {
    display: flex;
    padding: 0 0 10px 0;

    ul {
      margin-bottom: 0;
    }

    img {
      margin: auto;
      width: 57px;
      height: 57px;
      border: 2px solid #6593f5;
      border-radius: 50%;
      padding: 7px;
    }
  }
`;
