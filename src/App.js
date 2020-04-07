import React from 'react';
import styled from 'styled-components';

import Map from './components/Map';

export default function App() {
  const url =
    'https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood&key=AIzaSyAUyTbmTb_mwCdi_76hfeoPF-vqiKRS4gM';

  const getDirections = () => {
    fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Conrol-Allow-Credentials': true,
        'Access-Control-Allow-Methods': 'GEST, POST, PUT, DELETE, OPTIONS',
      },
    }).then((resp) => {
      console.log(resp);
    });
  };

  getDirections();

  return (
    <StyledMain>
      <Map />
    </StyledMain>
  );
}

const StyledMain = styled.main``;
