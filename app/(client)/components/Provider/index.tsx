'use client';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { SnackbarProvider } from 'notistack';

import { CustomThemeProvider } from './CustomThemeProvider';

import {
  ErrorNotistack,
  InfoNotistack,
  SuccessNotistack,
  WarningNotistack,
} from '@/(client)/components/notistacks';

import { MILLISECOND_TIME_FORMAT } from '@/constant';

type ProviderProps = {
  children: React.ReactNode;
};

export const Provider: React.FC<ProviderProps> = ({ children }) => {
  return (
    <AppRouterCacheProvider>
      <CustomThemeProvider>
        <SnackbarProvider
          maxSnack={3}
          Components={{
            info: InfoNotistack,
            success: SuccessNotistack,
            error: ErrorNotistack,
            warning: WarningNotistack,
          }}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          autoHideDuration={MILLISECOND_TIME_FORMAT.seconds(1.5)}>
          {children}
        </SnackbarProvider>
      </CustomThemeProvider>
    </AppRouterCacheProvider>
  );
};
