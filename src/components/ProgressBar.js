import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';

export default function ProgressBar({ value }) {
  return (
    <OuterBar>
      <Motion
        defaultStyle={{ width: 100 }}
        style={{
          width: spring(value, {
            stiffness: 30,
            damping: 15,
          }),
        }}
      >
        {(style) => <InnerBar width={style.width} />}
      </Motion>
    </OuterBar>
  );
}

ProgressBar.propTypes = {
  value: PropTypes.number,
};

const OuterBar = styled.div`
  background-color: #e7e7e7;
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(208, 208, 208, 0.5) inset;
  width: 100%;
  display: flex;
`;

const InnerBar = styled.span`
  display: block;
  align-self: center;
  width: ${(props) => props.width}%;
  height: 20px;
  border-radius: 10px;
  background-color: orange;

  :after {
    background: green;
  }
`;
