import React, { useEffect, useState } from 'react';
import { Container } from 'components/atoms/Container/Container';
import { Wrapper, Nav, NavLogo, NavWrapper, NavLink } from './Header.styles';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';
import { navLinks } from 'data/data';
import Hamburger from 'components/atoms/Hamburger/Hamburger';

function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', toggleScrolledHeader);
    return () => {
      window.removeEventListener('scroll', toggleScrolledHeader);
    };
  }, []);

  function hideMenu() {
    setIsOpenMenu(false);
  }

  const navItems = navLinks.map((link) => (
    <NavLink
      to={link}
      spy={true}
      smooth={true}
      duration={500}
      offset={-60}
      key={link}
      href="#"
      onClick={hideMenu}
    >
      {link}
    </NavLink>
  ));

  function toggleMenu() {
    setIsOpenMenu((prevState) => !prevState);
  }

  function toggleScrolledHeader() {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  return (
    <Wrapper isScrolled={isScrolled}>
      <Container>
        <Nav isScrolled={isScrolled}>
          <NavLogo href="/">
            <Logo />
          </NavLogo>
          <Hamburger isOpen={isOpenMenu} toggleMenu={toggleMenu} />
          <NavWrapper isOpen={isOpenMenu} isScrolled={isScrolled}>
            {navItems}
          </NavWrapper>
        </Nav>
      </Container>
    </Wrapper>
  );
}

export default Header;
