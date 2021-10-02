import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import { Controller } from './Controller';
import { Logo } from './Logo';
import { Headline } from './Headline';
import { Content } from './Content';

import { CONTENT } from './constants';

const Landing = () => {
  return (
    <Controller>
      <Container fluid>
        <Row>
          <Col xs={12}>
            <Content>
              {/*Logo*/}
              <Logo center />
              {/*Headline*/}
              <Headline>{CONTENT.headline}</Headline>
              {/*Main pitch*/}
              <p>{CONTENT.mainPitch}</p>
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
