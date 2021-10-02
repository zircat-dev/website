import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import LogoVector from '../../../common/logo';

const LogoCentered = styled.div`
  ${props =>
    props.isCenter &&
    css`
      .image {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 200px;
        transform: translate(-50%, -50%);
      }
    `}
`;

const LogoContainer = styled.div`
  width: '400px';
`;

const Logo = ({ center = false }) => (
  <LogoContainer>
    <LogoCentered isCenter={center}>
      <LogoVector />
    </LogoCentered>
  </LogoContainer>
);

export { Logo };
