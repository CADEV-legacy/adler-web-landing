'use client';

import { Typography } from '@mui/material';

import * as S from './BlogText.styles';

import { SmartImage } from '@/(client)/components';

import { OUTER_LINK } from '@/constant';

import linkedin from '#/images/linkedin.png';

export const BlogText: React.FC = () => {
  return (
    <S.Container className='clickable'>
      <S.TextContainer href={OUTER_LINK.blog} target='_blank'>
        <S.BlogImageWrapper>
          <SmartImage alt='linkedin-img' src={linkedin} />
        </S.BlogImageWrapper>
        <Typography variant='h5'>CEO Blog</Typography>
      </S.TextContainer>
    </S.Container>
  );
};
