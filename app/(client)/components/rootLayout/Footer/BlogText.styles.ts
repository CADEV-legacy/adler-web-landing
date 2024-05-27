import Link from 'next/link';

import { styled } from '@mui/material';

import { COLOR } from '@/constant';

export const Container = styled('div')({
  textDecoration: 'none',
  color: COLOR.white,
});

export const TextContainer = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  textDecoration: 'none',
  color: COLOR.white,
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

export const BlogImageWrapper = styled('div')({
  position: 'relative',
  width: '1.5rem',
  height: '1.5rem',
});
