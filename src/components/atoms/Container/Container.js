import styled from 'styled-components';
import { breakpointUp, containerMaxWidths } from 'assets/styles/variables';

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  position: ${({ isRelative }) => (isRelative ? 'relative' : 'static')};

  @media ${breakpointUp.sm} {
    max-width: ${containerMaxWidths.sm};
  }

  @media ${breakpointUp.md} {
    max-width: ${containerMaxWidths.md};
  }

  @media ${breakpointUp.lg} {
    max-width: ${containerMaxWidths.lg};
  }

  @media ${breakpointUp.xl} {
    max-width: ${containerMaxWidths.xl};
  }
`;
