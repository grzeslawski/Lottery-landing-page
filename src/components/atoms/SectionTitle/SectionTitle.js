import styled from 'styled-components';
import { breakpointUp } from 'assets/styles/variables';

export const SectionTitle = styled.h2`
  margin-bottom: 30px;
  font-size: 3rem;
  text-transform: uppercase;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);

  @media ${breakpointUp.lg} {
    margin-bottom: 40px;
    font-size: 4.2rem;
  }
`;
