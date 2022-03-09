import styled from 'styled-components';
import { breakpointUp } from 'assets/styles/variables';
import { Transition } from '../../../assets/styles/Mixins';

export const Wrapper = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 7.5px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: ${({ theme }) => theme.zIndexLevel.three};

  &:focus {
    outline: none;
  }

  div {
    margin-top: 7px;
    width: 30px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 2px;
    ${Transition('background-color, transform', '0.4s', 'ease-in-out')};
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
      transform: ${({ isOpen }) =>
        isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media ${breakpointUp.lg} {
    display: none;
  }
`;
