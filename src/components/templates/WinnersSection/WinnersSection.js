import React from 'react';
import { Container } from 'components/atoms/Container/Container';
import { SectionTitle } from 'components/atoms/SectionTitle/SectionTitle';
import { StyledSection } from './WinnersSection.styles';
import WinnersList from 'components/organisms/WinnersList/WinnersList';

function WinnersSection() {
  return (
    <StyledSection name="laureaci">
      <Container>
        <SectionTitle>Wyniki losowania</SectionTitle>
        <WinnersList />
      </Container>
    </StyledSection>
  );
}

export default WinnersSection;
