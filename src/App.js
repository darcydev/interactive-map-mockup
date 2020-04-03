import React from 'react';
import styled from 'styled-components';

import Map from './components/Map';
import ControlPanel from './components/ControlPanel';

export default function App() {
  return (
    <StyledMain>
      <ControlPanel />
      <Map />
    </StyledMain>
  );
}

const StyledMain = styled.main``;
