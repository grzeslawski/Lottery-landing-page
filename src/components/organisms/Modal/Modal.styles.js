import styled from 'styled-components';
import ReactModal from 'react-modal';
import { breakpointUp, modalMaxWidths } from 'assets/styles/variables';
import { CloseButton } from 'components/atoms/CloseButton/CloseButton';

export const ModalWrapper = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 650px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.lightYellow};
  border-radius: 15px;
  box-shadow: 0px -5px 25px -10px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  opacity: 1;
  width: 100%;

  @media ${breakpointUp.sm} {
    max-width: ${modalMaxWidths.sm};
  }

  @media ${breakpointUp.md} {
    max-width: ${modalMaxWidths.md};
  }

  @media ${breakpointUp.lg} {
    max-width: ${modalMaxWidths.lg};
  }

  @media ${breakpointUp.xl} {
    max-width: ${modalMaxWidths.xl};
  }

  &:focus {
    outline: none;
  }
`;

export const StyledCloseButton = styled(CloseButton)`
  position: absolute;
  top: 20px;
  right: 20px;
`;
