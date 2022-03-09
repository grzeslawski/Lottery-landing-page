import { css } from 'styled-components';

export const Transition = (
  property = 'all',
  duration = '0.2s',
  easing = 'ease'
) => css`
  transition: ${property} ${duration} ${easing};
`;
