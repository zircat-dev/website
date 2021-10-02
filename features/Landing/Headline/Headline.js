import React from 'react';
import styled from '@emotion/styled';
import { SrOnly } from '../../../common/utils/style';

const DocHeadline = styled.h1(SrOnly);

const Headline = ({ children }) => <DocHeadline>{children}</DocHeadline>;

export { Headline };
