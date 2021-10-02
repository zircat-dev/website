import React, { useRef, useEffect } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { TweenMax, Power3 } from 'gsap';

import { Logo } from '../Logo';
import { Navigation } from '../Navigation';

const HeaderContainer = styled.div`
  ${props =>
    props.isSticky &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      z-index: 999;
      width: 100%;
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
`;

const Header = ({ isSticky = false }) => {
  const logo = useRef(null);
  useEffect(() => {
    if (logo.current) {
      TweenMax.to(logo.current, 0.8, {
        opacity: 1,
        y: -20,
        ease: Power3.easeOut,
      });
    }
  }, []);
  return (
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
  );
};

export { Header };
