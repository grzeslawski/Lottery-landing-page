import styled from 'styled-components';

export const Input = styled.input`
  padding: 10px 12px;
  border: 2px solid
    ${({ theme, isError }) => (isError ? theme.colors.red : theme.colors.grey)};
  box-sizing: border-box;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  font-size: 1.6rem;

  &:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  }
`;
