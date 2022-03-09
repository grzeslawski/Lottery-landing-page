import styled from 'styled-components';
import { Link } from 'react-scroll';
import { breakpointDown } from 'assets/styles/variables';
import { Transition } from 'assets/styles/Mixins';

export const Wrapper = styled.header`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndexLevel.one};
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  ${({ isScrolled }) =>
    isScrolled && 'box-shadow: 0 12px 24px 0 rgb(0, 0, 0, 0.15)'};
`;

export const Nav = styled.nav`
  min-height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.black};
  ${Transition('min-height', '0.2s', 'ease-in-out')};
  ${({ isScrolled }) => isScrolled && 'min-height: 60px'};
`;

export const NavLogo = styled.a`
  svg {
    transform: scale3d(1.75, 1.75, 1.75);
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${breakpointDown.lg} {
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    height: ${({ isScrolled }) =>
      isScrolled ? 'calc(100vh - 60px)' : 'calc(100vh - 90px)'};
    top: ${({ isScrolled }) => (isScrolled ? '59px' : '89px')};
    right: 0;
    left: 0;
    padding: 30px;
    ${Transition('transform', '0.4s', 'ease-in-out')};
    transform: ${({ isOpen }) =>
      isOpen ? 'translateX(0)' : 'translateX(100%)'};
  }
`;

export const NavLink = styled(Link)`
  padding: 5px;
  margin: 5px 0;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.red};
`;
