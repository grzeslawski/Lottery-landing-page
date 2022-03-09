import React from 'react';
import PropTypes from 'prop-types';
import { ModalWrapper, StyledCloseButton } from './Modal.styles';

function Modal({ handleClose, isOpen, children }) {
  return (
    <ModalWrapper
      appElement={document.getElementById('root')}
      isOpen={isOpen}
      onRequestClose={handleClose}
    >
      {children}
      <StyledCloseButton data-testid="closeButton" onClick={handleClose} />
    </ModalWrapper>
  );
}

Modal.propTypes = {
  handleClose: PropTypes.func,
  isOpen: PropTypes.bool,
  children: PropTypes.element,
};

export default Modal;
