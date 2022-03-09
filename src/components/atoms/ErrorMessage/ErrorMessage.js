import styled from 'styled-components';

export const ErrorMessage = styled.span`
  margin: 15px auto;
  padding: 1em 2em;
  color: ${({ theme }) => theme.colors.darkRed};
  background-color: ${({ theme }) => theme.colors.lightRed};
  border-radius: 5px;
  font-size: 1.4rem;
  font-weight: 500;
  text-transform: uppercase;
`;
