import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { Container, Row, Col } from 'react-grid-system';

const baseUrl = '.';

const imageConfig = type =>
  ({
    LOGO: `${baseUrl}/assets/logo.svg`,
  }[type || 'LOGO']);

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .image {
    position: fixed;
    left: 50%;
    top: 50%;
    width: 200px;
    transform: translate(-50%, -50%);
  }
`;

const Image = styled.div`
  width: 100%;
  height: 100px;
  background-repeat: no-repeat;
  background-size: object-fit;
  display: flex;
  margin-left: 4px;
  &::first-child {
    margin-left: 0;
  }
  ${props =>
    props.imageSrc &&
    css`
      background-image: ${`url(${props.imageSrc})`};
    `}
`;

const Landing = () => {
  return (
    <Container>
      <Header>
        <Image className="image" imageSrc={imageConfig('LOGO')} />
      </Header>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Landing;
