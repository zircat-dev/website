import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import { Controller } from './Controller';
import { Logo } from './Logo';
import { Headline } from './Headline';
import { Content } from './Content';
import Block from './Block';
import LogoVector from '../../common/logo';

import { CONTENT } from './constants';

const Landing = () => {
  return (
    <Controller>
      <Container fluid>
        {/*Headline*/}
        <Headline>{CONTENT.headline}</Headline>

        <Block hero>
          {/*Logo*/}
          <LogoVector />
        </Block>

        <Row>
          <Col xs={12} md={6}>
            <Content bgColor="#222230">
              {/*Main pitch*/}
              <p>{CONTENT.mainPitch}</p>
            </Content>
          </Col>
          <Col xs={12} md={6}>
            <Content bgColor="#222230">
              {/*Special pitch */}
              <p>{CONTENT.specialPitch}</p>
            </Content>
          </Col>
        </Row>
      </Container>
    </Controller>
  );
};

export { Landing };
