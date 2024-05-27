import styled from '@emotion/styled';

export const Container = styled('div')({
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  '& > .footerText > span': {
    fontWeight: '700',
  },
});
