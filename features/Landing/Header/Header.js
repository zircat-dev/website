import React, { useRef, useEffect } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

import { TweenMax, Power3 } from 'gsap';

import { Logo } from '../Logo';
import { Navigation } from '../Navigation';

const fadeBorderBottom = keyframes`
    0% { border-bottom:1px solid transparent; }
    100% { border-bottom: 1px solid #222230; }
`;

const HeaderPlaceholder = styled.div({
  height: '72px'
});

const HeaderContainer = styled.div`
  ${props =>
    props.isSticky &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      z-index: 999;
      width: 100%;
      box-shadow: 0px 2px 8px rgba(29, 42, 67, 0.2);
      animation-name: ${fadeBorderBottom};
      animation-fill-mode: forwards;
      animation-timing-function: ease-in-out;
      animation-duration: 0.3s;
    `}
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  background: #191927;
  min-height: 72px;
`;

const HeaderLogo = styled.div`
  width: 100px;
  position: relative;
  transform: translate(0%, -20px) scale(1.1);
`;

const Header = ({ isSticky = false }) => {
  const logo = useRef(null);

  useEffect(() => {
    if (logo.current) {
      TweenMax.to(logo.current, 2.8, {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: Power3.easeOut,
      });
    }
  }, [isSticky]);

  return (
    <HeaderPlaceholder>
      <HeaderContainer isSticky={isSticky}>
        <Container fluid>
          <Row>
            <Col lg={12}>
              <HeaderContent>
                <HeaderLogo ref={logo}>
                  <Logo />
                </HeaderLogo>

                <Navigation
                  options={{
                    about: { id: 'about', route: '/', label: 'About' },
                    team: { id: 'team', route: '/', label: 'Team' },
                    contact: { id: 'contact', route: '/', label: 'Contact' },
                  }}
                />
              </HeaderContent>
            </Col>
          </Row>
        </Container>
      </HeaderContainer>
    </HeaderPlaceholder>
  );
};

export { Header };
