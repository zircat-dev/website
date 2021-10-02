import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const ContentStyle = styled.div`
  padding: 24px;
  position: relative;
  border-radius: 8px;
  margin-bottom: 24px;
  /* max-width: 600px; */
  p {
    &::selection {
      background: rgb(135, 52, 209);
      color: white;
    }
  }
  ${props =>
    props.bgColor &&
    css`
      background: ${props.bgColor};
    `}
  p {
    margin-bottom: 16px;
  }
`;

const Content = ({ children, ...props }) => (
  <ContentStyle {...props}>{children}</ContentStyle>
);

export { Content };
