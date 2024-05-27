import { Typography } from '@mui/material/styles/createTypography';

import { combinedFontFamily } from '@/(client)/utils';

import { COLOR } from '@/constant';

import type {
  Components as BaseComponents,
  Mixins,
  Palette,
  Shadows,
  Theme,
  Transitions,
  ZIndex,
  BreakpointsOptions,
} from '@mui/material';

interface BaseTheme extends Theme {
  mixins: Mixins;
  palette: Palette;
  shadows: Shadows;
  transitions: Transitions;
  typography: Typography;
  zIndex: ZIndex;
  unstable_strictMode?: boolean;
}

export const getComponents = (breakpoints: BreakpointsOptions): BaseComponents<BaseTheme> => ({
  MuiCssBaseline: {
    styleOverrides: {
      ':root': {
        fontFamily: combinedFontFamily,
        fontSize: '1rem',
        fontWeight: '400',
        color: COLOR.white,
        fontSynthesis: 'none',
        textRendering: 'optimizeLegibility',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        WebkitTextSizeAdjust: '100%',
      },
      html: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
      },
      body: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
        overflowX: 'hidden',
        overflowY: 'auto',
        color: COLOR.white,
        backgroundColor: COLOR.black,
        [breakpoints.down!('lg')]: {
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        },
      },
    },
  },
  MuiSkeleton: {
    styleOverrides: {
      root: {
        width: '100%',
        height: '100%',
      },
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        backgroundColor: COLOR.black,
        borderBottomWidth: '.0625rem',
        borderColor: COLOR.whiteAlpha(0.8),
        borderStyle: 'solid',
        padding: 0,
      },
    },
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: COLOR.white,
        padding: '3.75rem 2.5rem',
      },
    },
  },
});
