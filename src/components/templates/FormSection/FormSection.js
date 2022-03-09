import React, { useState } from 'react';
import { Container } from 'components/atoms/Container/Container';
import { Column } from 'components/atoms/Column/Column';
import { MessageWrapper, StyledSection } from './FormSection.styles';
import { SectionTitle } from 'components/atoms/SectionTitle/SectionTitle';
import MainForm from 'components/organisms/MainForm/MainForm';
import ScratchCard from 'react-scratchcard';
import Confetti from 'react-confetti';
import { Button } from 'components/atoms/Button/Button';
import { Row } from 'components/atoms/Row/Row';

function FormSection() {
  const [isScratched, setIsScratched] = useState(false);

  const settings = {
    width: 550,
    height: 380,
    image: 'img/overlay.png',
    finishPercent: 50,
    onComplete: () => showMessage(),
  };

  function showMessage() {
    setTimeout(() => setIsScratched(true), 1000);
  }

  return (
    <StyledSection name="graj">
      <Container>
        <SectionTitle>Weź udział</SectionTitle>
        <Row>
          <Column>
            <MainForm />
          </Column>
          <Column>
            {isScratched ? (
              <MessageWrapper>
                <Confetti width="1000px" height="1000px" />
                <h3>Wygrałeś możliwość ponownego</h3>
                <Button onClick={() => setIsScratched(false)}>
                  zagraj ponownie
                </Button>
              </MessageWrapper>
            ) : (
              <ScratchCard {...settings}>
                <img data-testid="scratch" src="/img/lose-1.png" alt="" />
              </ScratchCard>
            )}
          </Column>
        </Row>
      </Container>
    </StyledSection>
  );
}

export default FormSection;
