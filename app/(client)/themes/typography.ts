import { BreakpointsOptions } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';

import { combinedFontFamily } from '@/(client)/utils';

export const getTypography = (breakpoints: BreakpointsOptions): TypographyOptions => ({
  fontFamily: combinedFontFamily,
  fontSize: 16,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontSize: '3rem',
    fontWeight: '700',
    lineHeight: 'normal',
    [breakpoints.down!('sm')]: {
      fontSize: '1.5rem',
    },
  },
  h2: {
    fontSize: '2rem',
    fontWeight: '700',
    lineHeight: '3.75rem',
    [breakpoints.down!('sm')]: {
      fontSize: '1.25rem',
      lineHeight: '2rem',
    },
  },
  h3: {
    fontSize: '1.5rem',
    fontWeight: '700',
    lineHeight: 'normal',
    [breakpoints.down!('sm')]: {
      fontSize: '1.125rem',
      lineHeight: '1.75rem',
    },
  },
  h4: {
    fontSize: '1.25rem',
    fontWeight: '400',
    lineHeight: 'normal',
    [breakpoints.down!('sm')]: {
      fontSize: '1rem',
    },
  },
  h5: {
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: 'normal',
    [breakpoints.down!('sm')]: {
      fontSize: '.875rem',
    },
  },
  h6: {
    fontSize: '.75rem',
    fontWeight: '400',
    lineHeight: 'normal',
    [breakpoints.down!('sm')]: {
      fontSize: '.625rem',
    },
  },
  body1: {
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: 'normal',
    [breakpoints.down!('sm')]: {
      fontSize: '.875rem',
    },
  },
  body2: {
    fontSize: '.875rem',
    fontWeight: '400',
    lineHeight: 'normal',
    [breakpoints.down!('sm')]: {
      fontSize: '.75rem',
    },
  },
  subtitle1: {
    fontSize: '1.5rem',
    fontWeight: '400',
    lineHeight: 'normal',
  },
  subtitle2: {
    fontSize: '1.25rem',
    fontWeight: '400',
    lineHeight: 'normal',
  },
  button: {
    fontSize: '1.5rem',
    fontWeight: '700',
    lineHeight: 'normal',
    [breakpoints.down!('sm')]: {
      fontSize: '1rem',
    },
  },
});
