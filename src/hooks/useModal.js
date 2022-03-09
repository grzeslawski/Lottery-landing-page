import { useState } from 'react';

function useModal(initialState = false) {
  const [isOpen, setModalState] = useState(initialState);

  const handleOpenModal = () => setModalState(true);
  const handleCloseModal = () => setModalState(false);

  return {
    isOpen,
    handleOpenModal,
    handleCloseModal,
  };
}

export default useModal;
