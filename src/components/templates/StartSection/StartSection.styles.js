import styled from 'styled-components';
import { Section } from 'components/atoms/Section/Section';

export const StyledSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const StyledHeading = styled.h1`
  margin-bottom: 30px;
  font-size: 5rem;
`;

export const StyleDescription = styled.p`
  margin-bottom: 1.5em;
  font-size: 2.4rem;
  font-weight: 500;
`;
