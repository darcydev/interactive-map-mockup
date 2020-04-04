import React from 'react';
import styled from 'styled-components';

import Map from './components/Map';
import ControlPanel from './components/ControlPanel';

export default function App() {
  return (
    <StyledMain>
      <ControlPanel />
      <div style={{ position: 'relative', height: 600 }}>
        <Map />
      </div>
    </StyledMain>
  );
}

const StyledMain = styled.main``;
