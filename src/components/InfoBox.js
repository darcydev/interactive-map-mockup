import React, { useState } from 'react';
import styled from 'styled-components';

import PeopleIcon from '../icons/PeopleIcon';
import BagIcon from '../icons/BagIcon';

export default function InfoBox({ fromLocation }) {
  const [isOpen, setIsOpen] = useState(true);

  return isOpen ? (
    <StyledContainer>
      <div className='row' style={{ justifyContent: 'space-between' }}>
        <h2>{fromLocation}</h2>
        <button className='close-btn' onClick={() => setIsOpen(false)}>
          <b>X</b>
        </button>
      </div>
      <h5>POPULATION</h5>
      <div className='row'>
        <BagIcon />
        <ul>
          <li>2016 population</li>
          <li>2056 expected population</li>
          <li>2056 expected population with FastRail XX,</li>
        </ul>
      </div>
      <h5>EMPLOYMENT</h5>
      <div className='row'>
        <PeopleIcon />
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
          <br />
          <br />
          Culpa aliqua ad proident proident quis est voluptate veniam fugiat sit
          cupidatat dolore. Amet officia quis fugiat consequat. Excepteur magna
          officia consectetur nostrud.
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

    .close-btn {
      background: inherit;
      border: none;
    }

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
