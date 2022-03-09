import styled from 'styled-components';
import { Section } from 'components/atoms/Section/Section';

export const StyledSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const MessageWrapper = styled.div`
  padding: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  h3 {
    margin-bottom: 30px;
    font-size: 3rem;
    text-align: center;
  }
`;
