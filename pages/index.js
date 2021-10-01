import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { Container, Row, Col } from 'react-grid-system';

import {
  SrOnly
} from '../common/utils/style';
import Logo from '../common/logo';

const baseUrl = '.';

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 99vh;
  .image {
    position: fixed;
    left: 50%;
    top: 50%;
    width: 200px;
    transform: translate(-50%, -50%);
  }
`;

const Image = styled.div({
  width: '100%',
  height: '100px',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'object-fit',
  dislpay: 'flex',
  marginLeft: '4px',
  '&::first-child': {
    marginLeft: 0
  }
}, (
  (props => props.imageSrc && {
    backgroundImage: `url(${props.imageSrc})`
  })
))

const LogoContainer = styled.div({
  width: '400px',
  // height: '100px',
});

const TopHeader = styled.h1(SrOnly);

const Landing = () => {
  return (
    <Container>
      <Header>
        <TopHeader>Zircat: The Web Development Consultancy of your Dreams</TopHeader>
        <LogoContainer>
          <Logo />
        </LogoContainer>
      </Header>
      <Row>
        <Col>
          <h2>Who are we, really?</h2>
          <p>We are amazing.  That's who.  Yeah.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
