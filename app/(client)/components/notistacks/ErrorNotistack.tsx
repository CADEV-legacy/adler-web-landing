'use client';

import { forwardRef } from 'react';

import ErrorIcon from '@mui/icons-material/Error';
import { Typography } from '@mui/material';
import { SnackbarKey, SnackbarMessage } from 'notistack';

import * as S from './ErrorNotistack.styles';

type ErrorNotistackProps = {
  id: SnackbarKey;
  message: SnackbarMessage;
};

export const ErrorNotistack = forwardRef<HTMLDivElement, ErrorNotistackProps>(
  ({ id, message }, ref) => (
    <S.ErrorNotistackContainer key={`error-notistack-${id}`} ref={ref}>
      <S.IconWrapper>
        <ErrorIcon />
      </S.IconWrapper>
      <Typography variant='body1'>{message}</Typography>
    </S.ErrorNotistackContainer>
  )
);

ErrorNotistack.displayName = 'ErrorNotistack';
