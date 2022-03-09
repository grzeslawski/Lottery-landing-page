import styled from 'styled-components';
import { breakpointUp } from 'assets/styles/variables';

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 30px;
  align-items: ${({ isAlignCenter }) => (isAlignCenter ? 'center' : 'normal')};

  @media ${breakpointUp.lg} {
    grid-template-columns: repeat(12, 1fr);
    gap: 30px;
  }
`;
