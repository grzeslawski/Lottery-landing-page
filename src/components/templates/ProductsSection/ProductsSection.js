import React from 'react';
import { StyledSection } from './ProductsSection.styles';
import { Container } from 'components/atoms/Container/Container';
import { SectionTitle } from 'components/atoms/SectionTitle/SectionTitle';

function ProductsSection() {
  return (
    <StyledSection name="produkty">
      <Container>
        <SectionTitle>Promocyjne produkty</SectionTitle>
      </Container>
    </StyledSection>
  );
}

export default ProductsSection;
