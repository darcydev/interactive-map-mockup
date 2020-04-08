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
          <h4>{toolTip.title}</h4>
        </div>
      )}
    </StyledToolTip>
  );
}

const StyledToolTip = styled.div`
  position: absolute;
  right: 30px;
  top: 30px;
  background: white;
  border-radius: 10px;
  z-index: 9;
  font-size: 22px;
  width: 260px;

  .tooltip-inner {
    background: white;
    border-radius: 10px;
    width: 100%;
    line-height: 30px;
    text-align: center;

    h4 {
      font-weight: 700;
      margin: 0;
      padding: 12px 0;
    }

    .routes {
      color: white;
      font-size: 12px;

      .northern,
      central-western,
      south-western,
      southern {
        padding: 0 15px;
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

  .tooltip:hover span {
    display: block;
    position: fixed;
    overflow: hidden;
  }
`;
