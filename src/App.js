import React from 'react';
import styled from 'styled-components';

import Map from './components/Map';

export default function App() {
  return (
    <StyledMain>
      <Map />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  min-height: 100vh;
`;
