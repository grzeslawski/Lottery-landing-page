import styled from 'styled-components';
import { Transition } from 'assets/styles/Mixins';
import { Button } from 'components/atoms/Button/Button';

export const OverflowWrapper = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 10px;
`;

export const Wrapper = styled.form`
  width: 200%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  ${({ step }) => step === 1 && 'transform: translate3d(0, 0, 0)'};
  ${({ step }) => step === 2 && 'transform: translate3d(-50%, 0, 0)'};
  background-color: ${({ theme }) => theme.colors.white};
  ${Transition('transform', '0.5s')};
`;

export const StepWrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
`;

export const FormWrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledButton = styled(Button)`
  margin-top: 40px;
`;

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;
