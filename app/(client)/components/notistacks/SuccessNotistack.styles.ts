import { styled } from '@mui/material';

import { COLOR } from '@/constant';

export const SuccessNotistackContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  minWidth: '30rem',
  maxWidth: '60rem',
  padding: '0 1rem',
  height: '4rem',
  border: `.0625rem solid ${COLOR.success}`,
  boxShadow: `.25rem .25rem 0 0 ${COLOR.whiteAlpha(0.2)}`,
  borderRadius: '1rem',
  backgroundColor: COLOR.black,
  boxSizing: 'border-box',

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: '3rem',
  },
}));

export const IconWrapper = styled('div')({
  position: 'relative',
  width: '1rem',
  height: '1rem',
  color: COLOR.success,
  marginBottom: '.5rem',
});
