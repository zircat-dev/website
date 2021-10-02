import React from 'react';
import styled from '@emotion/styled';

const FooterContent = styled.div`
  padding: 24px;
  p {
    text-align: center;
    color: #6f7b8f;
    font-size: 14px;
  }
`;

const FooterContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding-left: 24px;
  padding-right: 24px;
  background: #0b0b0f;
  margin-top: 72px;
  border-top: 1px solid #222230;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <p>Copyright 2021. All rights reserved.</p>
      </FooterContent>
    </FooterContainer>
  );
};

export { Footer };
