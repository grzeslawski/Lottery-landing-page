import styled from 'styled-components';
import { breakpointDown, breakpointUp } from 'assets/styles/variables';

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.grey};
`;

export const Wrapper = styled.div`
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100px;
  text-align: center;

  @media ${breakpointUp.lg} {
    flex-direction: row;
    text-align: left;
  }

  p,
  a {
    @media ${breakpointDown.lg} {
      margin-bottom: 1em;
    }
  }
`;
