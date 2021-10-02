import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { values } from 'ramda';

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
  width: 100%;
`;

const ListItem = styled.li`
  ${listStyles};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  transition: all 0.1s ease-in-out;
  background: #191927;
  border-radius: 15px;
  text-transform: uppercase;
  color: #6f7b8f;
  &:last-child {
    border: none;
  }
  &:hover {
    background: #14a5ae;
    color: white;
  }
  ${props =>
    props.isActive &&
    css`
      background: #14a5ae;
      color: white;
    `}
`;

const NavigationContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const NavigationContent = styled.div`
  flex-grow: 1;
  align-items: stretch;
  width: 100%;
`;

const PlainLink = styled.a`
  color: inherit;
  text-decoration: inherit;
  text-transform: inherit;
`;

const AnchorLink = ({ children, onClick, href = '#', ...otherProps }) => {
  // Stops links in their tracks!
  const clickCatcher = event => {
    event.preventDefault();

    onClick(event);
  };

  return (
    <PlainLink onClick={clickCatcher} href={href} {...otherProps}>
      {children}
    </PlainLink>
  );
};

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
        <ListItem key={item.id} isActive={selectedId === item.id}>
          <AnchorLink onClick={() => onSelect(item.id)}>
            {item.label}
          </AnchorLink>
        </ListItem>
      ))}
    </List>
  );

  return (
    <NavigationContainer>
      <NavigationContent>{navLinks}</NavigationContent>
    </NavigationContainer>
  );
};

export { Navigation };
