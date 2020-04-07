import React, { useState } from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

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
        <img
          src='https://image.flaticon.com/icons/svg/1063/1063299.svg'
          alt='bag'
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
          src='https://image.flaticon.com/icons/svg/33/33308.svg'
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

  ${media.lessThan('700px')`
    display: none;
  `}

  h5 {
    color: black !important;
  }

  h2 {
    font-weight: 700;
  }

  .row {
    display: flex;
    padding: 0 0 10px 0;

    ${media.lessThan('900px')`
      img {
        display: none
      }
    `}

    .close-btn {
      background: inherit;
      border: none;
      padding-bottom: 0;
    }

    ul {
      margin-bottom: 0;
    }

    img {
      margin: none;
      width: 57px;
      height: 57px;
      border: 2px solid #6593f5;
      border-radius: 50%;
      padding: 7px;
      align-self: center;
    }
  }
`;
