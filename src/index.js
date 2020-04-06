import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './index.css';
import 'antd/dist/antd.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'tippy.js/dist/tippy.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
