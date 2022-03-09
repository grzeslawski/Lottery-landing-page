import React from 'react';
import { Wrapper } from './Hamburger.styles';

function Hamburger(props) {
  return (
    <Wrapper isOpen={props.isOpen} onClick={props.toggleMenu}>
      <div></div>
      <div></div>
      <div></div>
    </Wrapper>
  );
}

export default Hamburger;
