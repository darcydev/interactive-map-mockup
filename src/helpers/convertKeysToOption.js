import React from 'react';
import { Select } from 'antd';
import styled from 'styled-components';

const { Option } = Select;

/**
 * a helper function to convert all object keys into a option within select bar
 * @param {object} objKey
 * @returns {component}
 */
export const convertKeysToOption = (objKey) =>
  Object.keys(objKey).map((v) => (
    <StyledOption key={v} value={v}>
      {v}
    </StyledOption>
  ));

const StyledOption = styled(Option)`
  font-size: 18px;
  background: red;
`;
