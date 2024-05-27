import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Button, Typography, styled } from '@mui/material';

import { COLOR } from '@/constant';

export const Container = styled('div')({
  width: '100%',
});

export const CustomKeyboardDoubleArrowDownIcon = styled(KeyboardDoubleArrowDownIcon)({
  color: COLOR.white,
});

export const JobDescriptionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: '5rem',

  [theme.breakpoints.down('sm')]: {
    marginBottom: '2.5rem',
  },
}));

export const ApplyButton = styled(Button)(({ theme }) => ({
  width: '26.25rem',
  padding: '1rem 0',
  backgroundColor: COLOR.theme1,
  color: COLOR.white,
  marginBottom: '3.75rem',
  '&:hover': {
    backgroundColor: COLOR.theme1Light1,
  },

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    padding: '0.5rem',
    marginBottom: '1.5rem',
  },
}));

export const JobDescriptionContentContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  padding: '2.5rem 0',
  borderBottom: `0.0625rem solid ${COLOR.blackAlpha(0.2)}`,

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    padding: '1rem 0',
  },
}));

export const JobDescriptionContentTitle = styled('div')(({ theme }) => ({
  width: '17.5rem',

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginBottom: '1rem',
  },
}));

export const JobDescriptionContentDescription = styled('div')(({ theme }) => ({
  width: 'calc(100% - 17.5rem)',
  fontSize: '1rem',
  ul: {
    listStyle: 'none',
  },
  'ul li:before': {
    content: '"•"',
    fontSize: '80%',
    paddingRight: '1rem',
  },

  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

export const JobDescriptionHelperText = styled(Typography)(({ theme }) => ({
  width: '100%',
  padding: '2.5rem 0',
  borderBottom: `0.0625rem solid ${COLOR.blackAlpha(0.2)}`,
  marginBottom: '5rem',

  [theme.breakpoints.down('sm')]: {
    padding: '1rem 0',
    marginBottom: '2.5rem',
  },
}));

export const CloseAccordionText = styled(Typography)({
  color: COLOR.black,
  cursor: 'pointer',
  '&:hover': {
    color: COLOR.theme1,
  },
});
