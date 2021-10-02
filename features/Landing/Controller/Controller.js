import React from 'react';
import styled from '@emotion/styled';

import { Header } from '../Header';
import { Footer } from '../Footer';
import { StickyHeader } from './StickyHeader';

const ScrollCatch = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding-left: 24px;
  padding-right: 24px;
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
      <Footer />
    </>
  );
};

export { Controller };
