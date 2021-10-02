import React from 'react';
import styled from '@emotion/styled';

const ContentStyle = styled.div`
  width: 100%;
  min-height: 300px;
  position: relative;
`;

const Content = ({ id, children }) => (
  <ContentStyle id={id}>{children}</ContentStyle>
);

export { Content };
