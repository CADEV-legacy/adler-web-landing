import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Button, Typography, styled } from '@mui/material';

import { COLOR } from '@/constant';

export const Container = styled('div')({
  width: '100%',
});

export const CustomKeyboardDoubleArrowDownIcon = styled(KeyboardDoubleArrowDownIcon)({
  color: COLOR.white,
});

export const JobDescriptionTitle = styled(Typography)({
  marginBottom: '5rem',
});

export const ApplyButton = styled(Button)({
  width: '26.25rem',
  padding: '1rem 0',
  backgroundColor: COLOR.theme1,
  color: COLOR.white,
  marginBottom: '3.75rem',
  '&:hover': {
    backgroundColor: COLOR.theme1Light1,
  },
});

export const JobDescriptionContentContainer = styled('div')({
  display: 'flex',
  width: '100%',
  padding: '2.5rem 0',
  borderBottom: `0.0625rem solid ${COLOR.blackAlpha(0.2)}`,
});

export const JobDescriptionContentTitle = styled('div')({
  width: '17.5rem',
});

export const JobDescriptionContentDescription = styled('div')({
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
});

export const JobDescriptionHelperText = styled(Typography)({
  width: '100%',
  padding: '2.5rem 0',
  borderBottom: `0.0625rem solid ${COLOR.blackAlpha(0.2)}`,
  marginBottom: '5rem',
});

export const CloseAccordionText = styled(Typography)({
  color: COLOR.black,
  cursor: 'pointer',
  '&:hover': {
    color: COLOR.theme1,
  },
});
