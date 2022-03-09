import styled from 'styled-components';
import { Transition } from 'assets/styles/Mixins';

export const CloseButton = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors.black};
  font-size: 1.6rem;
  text-transform: uppercase;
  font-weight: 700;
  ${Transition('background-color')};
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3px;
    height: 25px;
    background-color: ${({ theme }) => theme.colors.black};
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  &:hover {
    cursor: pointer;
    text-decoration: none;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
