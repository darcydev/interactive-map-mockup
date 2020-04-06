import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

import Map from './components/Map';
import ControlPanel from './components/ControlPanel';

export default function App() {
  return (
    <StyledMain>
      <div className='sider'>
        <ControlPanel />
      </div>
      <div className='map'>
        <Map />
      </div>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: flex;

  .sider {
    width: 35%;
    background: pink;
  }

  .map {
    width: 65%;
  }
`;
