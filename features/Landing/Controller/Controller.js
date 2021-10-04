import React from 'react';
import styled from '@emotion/styled';

import { Header } from '../Header';
import { Footer } from '../Footer';
import { hasScrolledPast } from './StickyHeader';

const ScrollCatch = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding-left: 24px;
  padding-right: 24px;
`;

const MenuPlaceholder = styled.div({
  height: '72px'
});

const Controller = ({ children }) => {
  const { scroller, isPast } = hasScrolledPast({ distance: 72 });

  return (
    <>
      <ScrollCatch ref={scroller}>
        <Header isSticky={isPast} />
        {children}
      </ScrollCatch>
      <Footer />
    </>
  );
};

export { Controller };
