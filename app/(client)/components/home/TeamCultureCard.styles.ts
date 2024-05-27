import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Typography, styled } from '@mui/material';

import { COLOR } from '@/constant';

export const Container = styled('div')(({ theme }) => ({
  position: 'relative',
  width: 'calc((100% - 5rem) / 3)',
  height: '30rem',
  padding: '3.75rem 2.5rem',
  borderRadius: '1.25rem',
  backgroundColor: COLOR.black,
  transition: 'all 0.2s ease-in-out',
  overflowX: 'hidden',
  overflowY: 'hidden',
  '&:hover': {
    color: `${COLOR.theme1} !important`,
    transform: 'scale(1.05)',
  },
  '&.cardLayoutAnimation': {
    padding: '2.5rem 1.25rem',
    overflowY: 'auto',
    '&:hover': {
      color: `${COLOR.white} !important`,
      transform: 'unset',
    },
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: '30rem',
  },
}));

export const CardTitle = styled(Typography)({
  '&.titleAnimation': {
    transition: 'font-size 0.5s ease-in-out',
    fontSize: '1.375rem !important',
    lineHeight: '1.625rem !important',
    marginBottom: '1rem !important',
  },
});

export const CardDescription = styled(Typography)({
  whiteSpace: 'pre-wrap',
  wordWrap: 'break-word',
  opacity: '0 !important',
  color: `${COLOR.white} !important`,
  transform: 'translateY(1rem) !important',
  '&.descriptionAnimation': {
    transition: 'all 0.5s ease-in-out',
    opacity: '1 !important',
    transform: 'translateY(0) !important',
  },
});

export const AddIcon = styled(AddCircleIcon)({
  position: 'absolute',
  top: '20rem',
  left: 'calc(50% - 1.25rem)',
  width: '2.5rem',
  height: '2.5rem',
  transition: 'opacity 0.5s ease-in-out',
  '&.invisibleIcon': {
    opacity: 0,
  },
});
