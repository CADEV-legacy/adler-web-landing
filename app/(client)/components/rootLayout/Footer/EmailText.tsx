'use client';

import EmailIcon from '@mui/icons-material/Email';
import { Typography } from '@mui/material';
import { useSnackbar } from 'notistack';

import * as S from './EmailText.styles';

import { STATIC_TEXT } from '@/constant';

export const EmailText: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();

  const onEmailTextContainerClick = async () => {
    await navigator.clipboard.writeText(STATIC_TEXT.contactEmail);

    enqueueSnackbar('Copied to clipboard', {
      variant: 'success',
    });
  };

  return (
    <S.Container className='clickable' onClick={onEmailTextContainerClick}>
      <S.TextContainer>
        <S.EmailIconWrapper>
          <EmailIcon />
        </S.EmailIconWrapper>
        <Typography variant='h5'>Contact</Typography>
      </S.TextContainer>
    </S.Container>
  );
};
