import React, { useContext } from 'react';
import styled from 'styled-components';

import Map from './components/Map';
import ControlPanel from './components/ControlPanel';
import RouteContext from './context/route-context';

export default function App() {
  const context = useContext(RouteContext);

  return (
    <RouteContext.Provider value={{ from: context.from, to: context.to }}>
      <StyledMain>
        {/*         <ControlPanel /> */}
        {/* <div style={{ position: 'relative', height: 600 }}> */}
        <Map />
        {/* </div> */}
      </StyledMain>
    </RouteContext.Provider>
  );
}

const StyledMain = styled.main``;
