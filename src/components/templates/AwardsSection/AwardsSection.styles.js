import styled from 'styled-components';
import { Section } from 'components/atoms/Section/Section';

export const StyledSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.primary};
`;
