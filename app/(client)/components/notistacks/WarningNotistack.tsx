'use client';

import { forwardRef } from 'react';

import WarningIcon from '@mui/icons-material/Warning';
import { Typography } from '@mui/material';
import { SnackbarKey, SnackbarMessage } from 'notistack';

import * as S from './WarningNotistack.styles';

type WarningNotistackProps = {
  id: SnackbarKey;
  message: SnackbarMessage;
};

export const WarningNotistack = forwardRef<HTMLDivElement, WarningNotistackProps>(
  ({ id, message }, ref) => (
    <S.WarningNotistackContainer key={`warning-notistack-${id}`} ref={ref}>
      <S.IconWrapper>
        <WarningIcon />
      </S.IconWrapper>
      <Typography variant='body1'>{message}</Typography>
    </S.WarningNotistackContainer>
  )
);

WarningNotistack.displayName = 'WarningNotistack';
