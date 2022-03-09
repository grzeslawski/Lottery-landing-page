import React, { useState } from 'react';
import {
  ButtonWrapper,
  FormWrapper,
  ModalWrapper,
  OverflowWrapper,
  StepWrapper,
  StyledButton,
  Wrapper,
} from './MainForm.styles';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import Modal from 'components/organisms/Modal/Modal';
import useModal from 'hooks/useModal';
import ScratchCard from 'react-scratchcard';
import { ErrorMessage } from 'components/atoms/ErrorMessage/ErrorMessage';

function MainForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [step, setStep] = useState(1);
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  const settings = {
    width: 550,
    height: 380,
    image: 'img/overlay.png',
    finishPercent: 50,
    onComplete: () => console.log('Scratched'),
  };

  function nextStep() {
    setStep((prevStep) => prevStep + 1);
  }

  function prevStep() {
    setStep((prevStep) => prevStep - 1);
  }

  function onSubmit() {
    handleOpenModal();
  }

  function onError() {
    if (errors.firstName || errors.email) {
      prevStep();
    }
  }

  return (
    <OverflowWrapper>
      <Wrapper onSubmit={handleSubmit(onSubmit, onError)} step={step}>
        <StepWrapper isVisible>
          <p>Krok 1</p>
          <h3>Dane uczestnika</h3>
          <FormWrapper>
            <FormField
              label="Imię"
              name="firstName"
              id="firstName"
              {...register('firstName', {
                required: true,
                minLength: {
                  value: 2,
                  message: 'Wymagane minimum 2 znaki',
                },
              })}
              isError={errors.firstName}
            />
            <FormField
              label="Adres e-mail"
              name="email"
              id="email"
              type="text"
              {...register('email', {
                required: true,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Nieprawidłowy adres e-mail',
                },
              })}
              isError={errors.email}
            />
            <StyledButton as="div" isSecondary isRight onClick={nextStep}>
              następny krok
            </StyledButton>
          </FormWrapper>
        </StepWrapper>
        <StepWrapper isVisible>
          <p>Krok 2</p>
          <h3>Zgody</h3>
          <FormWrapper>
            <FormField
              label="Potwierdzam, że mam ukończone 18 lat oraz że zapoznałem/-am się z treścią Regulaminu Loterii oraz akceptuję jego postanowienia"
              name="conditionOne"
              id="conditionOne"
              type="checkbox"
              isCheckbox
              {...register('conditionOne', { required: true })}
              isError={errors.conditionOne}
            />
            {Object.keys(errors).length > 0 && (
              <ErrorMessage>Uzupełnij wszystkie pola</ErrorMessage>
            )}
            <ButtonWrapper>
              <Button as="div" onClick={prevStep}>
                powrót
              </Button>
              <Button isSecondary as="button" type="submit">
                zagraj
              </Button>
            </ButtonWrapper>
          </FormWrapper>
        </StepWrapper>
      </Wrapper>
      <Modal isOpen={isOpen} handleClose={handleCloseModal}>
        <ModalWrapper>
          <h1 data-testid="modalTitle">Modal</h1>
          <ScratchCard {...settings}>
            <img src="/img/lose-1.png" alt="" />
          </ScratchCard>
        </ModalWrapper>
      </Modal>
    </OverflowWrapper>
  );
}

export default MainForm;
