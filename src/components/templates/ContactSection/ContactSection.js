import React from 'react';
import { StyledSection } from './ContactSection.styles';
import { Container } from 'components/atoms/Container/Container';
import { SectionTitle } from 'components/atoms/SectionTitle/SectionTitle';

function ContactSection() {
  return (
    <StyledSection name="kontakt">
      <Container>
        <SectionTitle>Kontakt</SectionTitle>
      </Container>
    </StyledSection>
  );
}

export default ContactSection;
