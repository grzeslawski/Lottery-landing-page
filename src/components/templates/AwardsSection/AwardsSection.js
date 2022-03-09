import React from 'react';
import { StyledSection } from './AwardsSection.styles';
import { Container } from 'components/atoms/Container/Container';
import { SectionTitle } from 'components/atoms/SectionTitle/SectionTitle';

function AwardsSection() {
  return (
    <StyledSection name="nagrody">
      <Container>
        <SectionTitle>Nagrody</SectionTitle>
      </Container>
    </StyledSection>
  );
}

export default AwardsSection;
