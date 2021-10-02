import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { values } from 'ramda';
import { Container, Row, Col } from 'react-grid-system';

import { SrOnly } from '../common/utils/style';
import Logo from '../common/logo';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  height: 5rem;
  width: 100%;
`;

const Header = ({ children }) => {
  return <HeaderContainer>{children}</HeaderContainer>;
};

const HeaderLogo = styled.div`
  width: 100px;
  display: flex;
  ${'' /* align-self: flex-start; */}
`;

const CenterImage = styled.div`
  .image {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 200px;
    transform: translate(-50%, -50%);
  }
`;

const listStyles = css`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const List = styled.ul`
  ${listStyles};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const ListItem = styled.li`
  ${listStyles};
  display: flex;
  ${'' /* flex-direction: row; */}
  align-items: center;
  ${'' /* box-sizing: border-box; */}
  justify-content: center;
  padding: 10px;
  border-left: 1px solid grey;
  &:last-child {
    border: none;
  }
  ${props =>
    props.isActive &&
    css`
      background: red;
    `}
`;

const NavigationContainer = styled.nav`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: stretch;
  justify-content: flex-end;
  top: 0;
  left: 0;
  background: white;
`;

const PlainLink = styled.a({
  color: 'inherit',
  textDecoration: 'inherit'
})

const AnchorLink = ({ children, onClick, href = '#', ...otherProps }) => {
  // Stops links in their tracks!
  const clickCatcher = (event) => {
    event.preventDefault();

    onClick(event);
  }

  return (
    <PlainLink onClick={clickCatcher} href={href} {...otherProps}>
      {children}
    </PlainLink>
  )
}

const Navigation = ({ options = {} }) => {
  const [selectedId, setSelectedId] = useState(-1);
  const onSelect = item => {
    setSelectedId(item.id);
  };

  const navItems = values(options);
  if (!navItems || !navItems.length) return;

  const navLinks = (
    <List>
      {navItems.map(item => (
        <ListItem
          key={item.id}
          isActive={selectedId === item.id}
        >
          <AnchorLink onClick={() => onSelect(item.id)}>
            {item.label}
          </AnchorLink>
        </ListItem>
      ))}
    </List>
  );

  return <NavigationContainer>{navLinks}</NavigationContainer>;
};

const LogoContainer = styled.div({
  width: '400px',
});

const Content = styled.div`
  width: 100%;
  min-height: 300px;
  background: green;
  position: relative;
`;

const DocHeadline = styled.h1(SrOnly);

const Landing = () => {
  return (
    <Container>
      <Header>
        <DocHeadline>
          Zircat: The Web Development Consultancy of your Dreams
        </DocHeadline>
        <HeaderLogo>
          <Logo />
        </HeaderLogo>
        <Navigation
          options={{
            about: { id: 'about', route: '/', label: 'About' },
            team: { id: 'team', route: '/', label: 'Team' },
            contact: { id: 'contact', route: '/', label: 'Contact' },
          }}
        />
      </Header>

      <Content id="scroll-1">
        <CenterImage>
          <LogoContainer>
            <Logo />
          </LogoContainer>
        </CenterImage>
      </Content>
      <Content id="scroll-2">Some content</Content>
      <Row>
        <Col>
          <h2>Who are we, really?</h2>
          <h2>Looser</h2>
          <h2>No you!</h2>
          <p>We are amazing. That's who. Yeah.</p>
          {/*Main pitch*/}
          <p>
            With over a decade of experience working on dozens of projects at
            every imaginable size and budget, we've learned a few things along
            the way, and we love being able to share that unique expertise. From
            enterprises like Vodafone, Origin and Bupa, to agencies like Next
            Digital and DT, to various start-ups, and even the NSW Department of
            Justice, our specialists have made careers with proven track records
            of success at every scale. They've done rapid-feedback prototyping
            in tandem with UI and UX designers; built campaigns and highly
            animated websites for brands like Honda, Ford and Bonds; built large
            and sophisticated web applications; built custom tools, libraries
            and frameworks to make developers lives easier; managed teams of
            developers large and small, built out development teams large and
            small, mentored and upskilled developers at all levels, and even
            personally lead entire digital transformations of enterprise
            organisations; and in everything we do, we pursue with determination
            the very best possible outcomes.
          </p>
          {/*Special pitch */}
          <p>
            So you need an in-house software team, but you don't know where to
            start, who to hire, or what it needs to be set up for success.
            You've thought about bringing in a big-name consultancy, but they
            only "loan" people to you for a short time. You need your own
            people, your own team, your own expertise, under your own
            organisation. That's where we come in. Zircat specialises in
            building out world-class software teams for organisations of all
            kinds. We can work with you to determine what roles to hire, what
            structures and processes should be put in place, and develop a
            step-by-step roadmap showing the way. What about implementing that
            roadmap? Luckily, you can leave all that to us! We'll take care of
            hiring the right people (under your own organisation), training and
            upskilling on engineering best practices, and embedding the most
            appropriate agile methodology suited to the needs of your business.
            We will then give you regular progress updates so that you're always
            in the loop, and you will have oversight over the entire journey.
            Wanna know the best bit? When we're all done, you get to keep
            everything! Your team, your expertise, your personnel are all part
            of your organisation. Only our small team of Zircat specialists will
            move on, leaving you with a world-class engineering team all of your
            own, customised and designed around your business needs.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
