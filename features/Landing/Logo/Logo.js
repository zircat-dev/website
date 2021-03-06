import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import LogoVector from '../../../common/logo';

const LogoCentered = styled.div`
  .centered & {
    .image {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 200px;

      transform: translate(-50%, -50%);
    }
  }
`;

const LogoContainer = styled.div`
  max-width: 350px;
  width: 100%;
  &.centered {
    margin: 64px auto 64px auto;
  }
`;

const Logo = ({ center = false }) => (
  <LogoContainer className={center ? `centered` : ''}>
    <LogoCentered isCenter={center}>
      <LogoVector />
    </LogoCentered>
  </LogoContainer>
);

export { Logo };
