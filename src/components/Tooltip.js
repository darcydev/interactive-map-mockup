import React from 'react';
import styled from 'styled-components';

export default function Tooltip({ toolTip }) {
  return (
    <StyledToolTip id='tooltip'>
      {toolTip.visible && (
        <div className='tooltip-inner'>
          <div className='routes'>
            {toolTip.routes.includes('northern-route') && (
              <div className='northern'>Northern route</div>
            )}
            {toolTip.routes.includes('central-west-route') && (
              <div className='central-west'>Western route</div>
            )}
            {toolTip.routes.includes('southern-west-route') && (
              <div className='southern-west'>Southern inland route</div>
            )}
            {toolTip.routes.includes('southern-route') && (
              <div className='southern'>Southern route</div>
            )}
          </div>
          <h3>{toolTip.title}</h3>
        </div>
      )}
    </StyledToolTip>
  );
}

const StyledToolTip = styled.div`
  z-index: 9999;
  position: absolute;

  .tooltip-inner {
    background: white;
    padding: 3px;
    border-radius: 10px;
    width: 140px;
    line-height: 30px;
    text-align: center;

    .routes {
      color: white;
      font-size: 12px;
      font-weight: 600;

      .northern,
      central-western,
      south-western,
      southern {
      }

      .northern {
        background: #6593f5;
      }

      .central-west {
        background: orange;
      }

      .southern-west {
        background: green;
      }

      .southern {
        background: red;
      }
    }
  }

  /*  .tooltip-inner:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -8px;
    width: 0;
    height: 0;
    border-top: 8px solid #fff;
    border-right: 8px solid transparent;
    border-left: 8px solid transparent;
  } */

  .tooltip:hover span {
    display: block;
    position: fixed;
    overflow: hidden;
  }
`;
