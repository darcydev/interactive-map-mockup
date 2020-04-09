import React from 'react';

import './Header.css';

export default function Header() {
  return (
    <>
      <div className='header'>
        <div className='blue-line'>
          <div className='dots'>
            <div className='green'>
              <div className='outer-circle' />
            </div>
            <div className='yellow' />
            <div className='purple' />
            <div className='orange' />
          </div>
        </div>
      </div>
      <div className='button-row'>
        <button>Corridors</button>
        <button className='selected'>Journey Times</button>
        <button>Stages</button>
      </div>
    </>
  );
}
