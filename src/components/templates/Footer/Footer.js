import React from 'react';
import { StyledFooter, Wrapper } from './Footer.styles';
import { Container } from 'components/atoms/Container/Container';

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Wrapper>
          <p>©2021 Loteria XYZ. Wszystkie prawa zastrzeżone.</p>
          <a href="/">Polityka prywatności</a>
          <p>Projekt i wykonanie: XYZ</p>
        </Wrapper>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
