'use client';

import React, { useState } from 'react';

import * as S from './TeamCultureCard.styles';

type TeamCultureCardProps = {
  title: string;
  description: string;
};

export const TeamCultureCard: React.FC<TeamCultureCardProps> = ({ title, description }) => {
  const [isOpened, setIsOpened] = useState(false);

  const brTranslator = (text: string) => {
    return text.split('\\n').map((line, index) => {
      return index === 0 ? line : [<br key={index} />, line];
    });
  };

  const onTeamCultureCardClick = () => {
    setIsOpened(true);
  };

  return (
    <S.Container
      className={`invisible-scroll clickable${isOpened ? ' cardLayoutAnimation' : ''}`}
      onClick={onTeamCultureCardClick}>
      <S.CardTitle className={isOpened ? 'titleAnimation' : ''} variant='h2' lineHeight='2rem'>
        {brTranslator(title)}
      </S.CardTitle>
      <S.CardDescription className={isOpened ? 'descriptionAnimation' : ''} variant='h4'>
        {description}
      </S.CardDescription>
      <S.AddIcon className={isOpened ? 'invisibleIcon' : ''} />
    </S.Container>
  );
};
