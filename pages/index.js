import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { Container, Row, Col } from 'react-grid-system';

const baseUrl = './public/';

const imageConfig = type =>
  ({
    LOGO: `${baseUrl}assets/logo.svg`,
  }[type || 'LOGO']);

const Image = styled.div`
  width: 460px;
  height: 195px;
  min-height: 460px;
  min-width: 195px;
  background-repeat: no-repeat;
  background-size: cover;
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
      <Row>
        <Col>
          <Image imageSrc={imageConfig('LOGO')} />
          Zircat
          <Link href="/about">
            <a>About</a>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
