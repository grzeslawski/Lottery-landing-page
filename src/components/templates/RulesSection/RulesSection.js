import React from 'react';
import { Container } from 'components/atoms/Container/Container';
import { SectionTitle } from 'components/atoms/SectionTitle/SectionTitle';
import Rules from 'components/organisms/Rules/Rules';
import { StyledSection } from './RulesSection.styles';
import { Button } from 'components/atoms/Button/Button';

function RulesSection() {
  return (
    <StyledSection name="zasady">
      <Container>
        <SectionTitle>Zasady loterii</SectionTitle>
        <Rules />
        <Button isCenter isSecondary>
          Regulamin loterii
        </Button>
      </Container>
    </StyledSection>
  );
}

export default RulesSection;
