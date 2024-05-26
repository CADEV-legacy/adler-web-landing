'use client';

import { Typography } from '@mui/material';
import { useSnackbar } from 'notistack';

import * as S from './TelephoneText.styles';

import { STATIC_TEXT } from '@/constant';

export const TelephoneText: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();

  const onTelephoneTextContainerClick = async () => {
    await navigator.clipboard.writeText(STATIC_TEXT.contactPhoneNumber);

    enqueueSnackbar('Copied to clipboard', { variant: 'success' });
  };

  return (
    <S.Container className='clickable' onClick={onTelephoneTextContainerClick}>
      <Typography className='footerText' variant='h6'>
        <span>TEL</span> : 02-874-6182
      </Typography>
    </S.Container>
  );
};
