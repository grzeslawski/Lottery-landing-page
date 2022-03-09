import React from 'react';
import {
  StyledListItem,
  StyledList,
  StyledTitle,
  StyledListWrapper,
  StyledName,
  Wrapper,
} from './WinnersList.styles';
import { winners } from 'data/data';

function WinnersList() {
  const winnerElements = winners.map((winner) => (
    <StyledListItem key={winner.id}>
      <StyledName>
        <span>{winner.name}</span>
      </StyledName>
      <p>{winner.award}</p>
    </StyledListItem>
  ));

  return (
    <Wrapper>
      {winnerElements.length ? (
        <StyledList>
          <StyledListWrapper>
            <StyledTitle>Wygrany:</StyledTitle>
            <StyledTitle>Nagroda:</StyledTitle>
          </StyledListWrapper>
          {winnerElements}
        </StyledList>
      ) : (
        <h3>Brak laureatów</h3>
      )}
    </Wrapper>
  );
}

export default WinnersList;
