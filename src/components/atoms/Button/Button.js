import styled from 'styled-components';
import { breakpointUp } from 'assets/styles/variables';
import { Transition } from 'assets/styles/Mixins';

export const Button = styled.a`
  min-height: 50px;
  padding: 1em 2em;
  ${({ isCenter }) => isCenter && 'margin: 0 auto'};
  ${({ isLeft }) => isLeft && 'margin-right: auto'};
  ${({ isRight }) => isRight && 'margin-left: auto'};
  display: flex;
  width: max-content;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${({ isSecondary, theme }) =>
    isSecondary ? theme.colors.secondary : theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.2);
  font-size: 1.6rem;
  text-transform: uppercase;
  font-weight: 700;
  ${Transition('background-color')};

  @media ${breakpointUp.lg} {
    min-height: 60px;
  }

  &:hover {
    cursor: pointer;
    text-decoration: none;
    background-color: ${({ isSecondary, theme }) =>
      isSecondary ? theme.colors.primary : theme.colors.secondary};
  }

  &:active {
    box-shadow: inset 0 0 10px 4px rgba(0, 0, 0, 0.2);
  }
`;
