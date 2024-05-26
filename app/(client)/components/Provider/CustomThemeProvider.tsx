'use client';

import { useMemo } from 'react';

import { ThemeProvider, createTheme } from '@mui/material';

import { breakpoints, getComponents, getTypography } from '@/(client)/themes';

type CustomThemeProviderProps = {
  children: React.ReactNode;
};

export const CustomThemeProvider: React.FC<CustomThemeProviderProps> = ({ children }) => {
  const components = getComponents(breakpoints);

  const typography = getTypography(breakpoints);

  const theme = useMemo(
    () => createTheme({ breakpoints, components, typography }),
    [components, typography]
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
