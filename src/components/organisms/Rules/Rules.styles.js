import styled from 'styled-components';
import { breakpointUp } from '../../../assets/styles/variables';

export const Wrapper = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;

  @media ${breakpointUp.lg} {
    flex-direction: row;
  }
`;

export const StyledRule = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    max-height: 250px;
    object-fit: cover;
  }
`;

export const StyledTitle = styled.h3`
  margin-bottom: 15px;
  font-size: 2.2rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledDescription = styled.p`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.secondary};
`;
