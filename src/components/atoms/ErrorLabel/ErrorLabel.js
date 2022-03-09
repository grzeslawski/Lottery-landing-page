import styled from 'styled-components';

export const ErrorLabel = styled.span`
  position: absolute;
  bottom: 5px;
  right: 8px;
  color: ${({ theme }) => theme.colors.red};
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: -0.05em;
  text-transform: uppercase;
`;
