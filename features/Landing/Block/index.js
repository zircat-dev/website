import React from 'react';
import styled from '@emotion/styled';

const Block = styled.div({
  minHeight: '100vh'
}, (props) => props.hero && ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

export default Block;
