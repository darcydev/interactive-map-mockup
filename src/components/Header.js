import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

export default function Header() {
  return (
    <StyledContainer>
      <div className='line-and-dots'>
        <div className='line'>
          <div className='dots'>
            <div className='green dot'>
              <div className='outer-circle' />
            </div>
            <div className='yellow dot' />
            <div className='purple dot' />
            <div className='orange dot' />
          </div>
        </div>
      </div>
      <div className='tabs'>
        <button>Corridors</button>
        <button className='selected'>Journey Times</button>
        <button>Stages</button>
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  .line-and-dots {
    width: 100%;
    height: 30px;
    display: flex;
    padding: 5px 0 0 0;

    .line {
      background: #00009a;
      height: 5px;
      margin: auto 0;
      width: 100%;

      .dot {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        position: absolute;
        top: 8px;
        border: 3px solid #fff;
      }

      .green {
        background-color: darkgreen;
        box-shadow: 0 0 0 2px darkgreen;
        left: 15px;
      }

      .yellow {
        background-color: rgb(238, 181, 26);
        box-shadow: 0 0 0 2px rgb(238, 181, 26);
        left: 45px;
      }

      .purple {
        background-color: rgb(61, 0, 131);
        box-shadow: 0 0 0 2px rgb(61, 0, 131);
        left: 75px;
      }

      .orange {
        background-color: rgb(209, 84, 0);
        box-shadow: 0 0 0 2px rgb(209, 84, 0);
        left: 105px;
      }
    }
  }

  .tabs {
    display: flex;
    justify-content: space-evenly;
    border-bottom: 3px solid #2ec3ff;
    padding: 4px 0 0 0;
    padding-top: 10px;

    button {
      font-size: 16px;
      border: none;
      background: #d6efff;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      padding: 5px 10px 0 10px;
      height: 50px;
      margin: 0 1px;
      color: #1dbeff;
      font-weight: 600;
			width: 100%;

			${media.lessThan('1100px')`
				padding: 0;
			`}

			${media.lessThan('940px')`
				padding: 5px 10px 0 10px;
			`}
			
			${media.lessThan('450px')`
				padding: 0;
    	`}
    }

    .selected {
      background: #2ec3ff;
      color: white;
			font-size: 16px;
			
			${media.lessThan('1100px')`
				width: 532px;
			`}
    }
  }
`;
