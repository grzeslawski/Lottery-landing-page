import styled from 'styled-components';
import { breakpointUp } from 'assets/styles/variables';

export const BodyContent = styled.div`
  padding-top: 70px;
  background-color: ${({ theme }) => theme.colors.primary};

  @media ${breakpointUp.lg} {
    padding-top: 90px;
  }
`;
