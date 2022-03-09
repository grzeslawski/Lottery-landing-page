import React from 'react';
import { Container } from 'components/atoms/Container/Container';
import {
  StyledSection,
  StyledHeading,
  StyleDescription,
} from './StartSection.styles';
import { Row } from 'components/atoms/Row/Row';
import { Column } from 'components/atoms/Column/Column';
import { Button } from 'components/atoms/Button/Button';
import ImageInWebP from 'helpers/ImageInWebP';
import { Link } from 'react-scroll';

function StartSection() {
  return (
    <StyledSection>
      <Container>
        <Row isAlignCenter>
          <Column>
            <StyledHeading>Loteria XYZ</StyledHeading>
            <StyleDescription>
              Super hiper loteria kup 2 promocyjne produkty żeby wygrać super
              nagrody
            </StyleDescription>
            <Button
              as={Link}
              to="graj"
              spy={true}
              offset={-60}
              smooth={true}
              duration={500}
            >
              Weź udział
            </Button>
          </Column>
          <Column>
            <ImageInWebP name="awards-volkswagen" alt="nagroda główna" />
          </Column>
        </Row>
      </Container>
    </StyledSection>
  );
}

export default StartSection;
