export const breakpoints = {
  sm: '576',
  md: '768',
  lg: '992',
  xl: '1236',
};

export const breakpointUp = {
  sm: `(min-width: ${breakpoints.sm}px)`,
  md: `(min-width: ${breakpoints.md}px)`,
  lg: `(min-width: ${breakpoints.lg}px)`,
  xl: `(min-width: ${breakpoints.xl}px)`,
};

export const breakpointDown = {
  sm: `(max-width: ${breakpoints.sm - 1}px)`,
  md: `(max-width: ${breakpoints.md - 1}px)`,
  lg: `(max-width: ${breakpoints.lg - 1}px)`,
  xl: `(max-width: ${breakpoints.xl - 1}px)`,
};

export const containerMaxWidths = {
  sm: '540px',
  md: '720px',
  lg: '960px',
  xl: '1200px',
};

export const modalMaxWidths = {
  sm: '500px',
  md: '600px',
  lg: '800px',
  xl: '1000px',
};
