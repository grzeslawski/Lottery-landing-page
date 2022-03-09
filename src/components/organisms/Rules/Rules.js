import React from 'react';
import {
  StyledDescription,
  StyledRule,
  StyledTitle,
  Wrapper,
} from './Rules.styles';
import { rules } from 'data/data';
import ImageInWebP from 'helpers/ImageInWebP';

function Rules() {
  const rulesItems = rules.map((rule) => (
    <StyledRule key={rule.title}>
      <ImageInWebP name={rule.src} alt={rule.title} />
      <StyledTitle>{rule.title}</StyledTitle>
      <StyledDescription>{rule.description}</StyledDescription>
    </StyledRule>
  ));

  return <Wrapper>{rulesItems}</Wrapper>;
}

export default Rules;
