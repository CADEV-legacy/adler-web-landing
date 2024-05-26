'use client';

import { forwardRef } from 'react';

import InfoIcon from '@mui/icons-material/Info';
import { Typography } from '@mui/material';
import { SnackbarKey, SnackbarMessage } from 'notistack';

import * as S from './InfoNotistack.styles';

type InfoNotistackProps = {
  id: SnackbarKey;
  message: SnackbarMessage;
};

export const InfoNotistack = forwardRef<HTMLDivElement, InfoNotistackProps>(
  ({ id, message }, ref) => (
    <S.InfoNotistackContainer key={`info-notistack-${id}`} ref={ref}>
      <S.IconWrapper>
        <InfoIcon />
      </S.IconWrapper>
      <Typography variant='body1'>{message}</Typography>
    </S.InfoNotistackContainer>
  )
);

InfoNotistack.displayName = 'InfoNotistack';
