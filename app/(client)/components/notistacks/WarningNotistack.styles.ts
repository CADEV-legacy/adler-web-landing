import { styled } from '@mui/material';

import { COLOR } from '@/constant';

export const WarningNotistackContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  minWidth: '30rem',
  maxWidth: '60rem',
  padding: '0 1rem',
  height: '4rem',
  border: `.0625rem solid ${COLOR.warning}`,
  boxShadow: `.25rem .25rem 0 0 ${COLOR.whiteAlpha(0.2)}`,
  borderRadius: '1rem',
  boxSizing: 'border-box',
});

export const IconWrapper = styled('div')({
  position: 'relative',
  width: '1rem',
  height: '1rem',
  color: COLOR.warning,
  marginBottom: '.5rem',
});
