import styled from 'styled-components';
import { breakpointUp } from 'assets/styles/variables';

export const Column = styled.div`
  grid-column: span 12;

  @media ${breakpointUp.lg} {
    grid-column: span 6;
  }
`;
