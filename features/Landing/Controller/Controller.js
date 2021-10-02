import React from 'react';
import styled from '@emotion/styled';

import { Header } from '../Header';
import { StickyHeader } from './StickyHeader';

const ScrollCatch = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const Controller = ({ children }) => {
  const { elementRef, isSticky } = StickyHeader({ scrollPastHeight: 100 });

  const renderSticky = () => isSticky && <Header isSticky />;

  return (
    <>
      {renderSticky()}
      <ScrollCatch ref={elementRef}>
        <Header />
        {children}
      </ScrollCatch>
    </>
  );
};

export { Controller };
