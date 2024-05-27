'use client';

import { useState } from 'react';

import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';

import * as S from './JobDescriptionAccordion.styles';

import { COLOR, OUTER_LINK } from '@/constant';

const HIRING_PROCESS = [
  'To apply for the position, please follow our application process.',
  'Complete the application through our Google Form.',
  'This helps us keep everything organized and ensures a smooth review process.',
];

type JobDescriptionContent = {
  informations: string[];
  responsibilities: string[];
  requiredQualifications: string[];
  optionalQualifications: string[];
};

type JobDescription = {
  title: string;
  content: JobDescriptionContent;
};

type JobDescriptionAccordionProps = {
  jobDescriptions: JobDescription[];
};

export const JobDescriptionAccordion: React.FC<JobDescriptionAccordionProps> = ({
  jobDescriptions,
}) => {
  const [expandedJobDescriptionIndex, setExpandedJobDescriptionIndex] = useState<number>();

  const handleAccordionChange =
    (jobDescriptionIndex: number) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpandedJobDescriptionIndex(newExpanded ? jobDescriptionIndex : undefined);
    };

  const onApplyButtonClick = () => {
    window.open(OUTER_LINK.apply, '_blank');
  };

  const onCloseAccordionTextClick = () => {
    setExpandedJobDescriptionIndex(undefined);
  };

  return (
    <S.Container>
      {jobDescriptions.map((jobDescription, jobDescriptionIndex) => (
        <Accordion
          key={jobDescriptionIndex}
          expanded={expandedJobDescriptionIndex === jobDescriptionIndex}
          onChange={handleAccordionChange(jobDescriptionIndex)}
          slotProps={{ transition: { unmountOnExit: true } }}>
          <AccordionSummary expandIcon={<S.CustomKeyboardDoubleArrowDownIcon />}>
            <Typography variant='h2' fontSize='2.25rem' color={COLOR.white}>
              {jobDescription.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <S.JobDescriptionTitle variant='h1' textAlign='center'>
              {jobDescription.title}
            </S.JobDescriptionTitle>
            <S.ApplyButton onClick={onApplyButtonClick}>
              <Typography variant='button'>Apply Now</Typography>
            </S.ApplyButton>
            <S.JobDescriptionContentContainer>
              <S.JobDescriptionContentTitle>
                <Typography variant='h3' fontWeight='700'>
                  Information
                </Typography>
              </S.JobDescriptionContentTitle>
              <S.JobDescriptionContentDescription>
                <ul>
                  {jobDescription.content.informations.map((information, informationIndex) => (
                    <li key={`information-${jobDescriptionIndex}-${informationIndex}`}>
                      {information}
                    </li>
                  ))}
                </ul>
              </S.JobDescriptionContentDescription>
            </S.JobDescriptionContentContainer>
            <S.JobDescriptionContentContainer>
              <S.JobDescriptionContentTitle>
                <Typography variant='h3' fontWeight='700'>
                  Responsibilities
                </Typography>
              </S.JobDescriptionContentTitle>
              <S.JobDescriptionContentDescription>
                <ul>
                  {jobDescription.content.responsibilities.map(
                    (responsibility, responsibilityIndex) => (
                      <li key={`responsibility-${jobDescriptionIndex}-${responsibilityIndex}`}>
                        {responsibility}
                      </li>
                    )
                  )}
                </ul>
              </S.JobDescriptionContentDescription>
            </S.JobDescriptionContentContainer>
            <S.JobDescriptionContentContainer>
              <S.JobDescriptionContentTitle>
                <Typography variant='h3' fontWeight='700'>
                  Required
                  <br />
                  Qualifications
                </Typography>
              </S.JobDescriptionContentTitle>
              <S.JobDescriptionContentDescription>
                <ul>
                  {jobDescription.content.requiredQualifications.map(
                    (requiredQualification, requiredQualificationIndex) => (
                      <li
                        key={`requiredQualification-${jobDescriptionIndex}-${requiredQualificationIndex}`}>
                        {requiredQualification}
                      </li>
                    )
                  )}
                </ul>
              </S.JobDescriptionContentDescription>
            </S.JobDescriptionContentContainer>
            <S.JobDescriptionContentContainer>
              <S.JobDescriptionContentTitle>
                <Typography variant='h3' fontWeight='700'>
                  Optional
                  <br />
                  Qualifications
                </Typography>
              </S.JobDescriptionContentTitle>
              <S.JobDescriptionContentDescription>
                <ul>
                  {jobDescription.content.optionalQualifications.map(
                    (optionalQualification, optionalQualificationIndex) => (
                      <li
                        key={`optionalQualification-${jobDescriptionIndex}-${optionalQualificationIndex}`}>
                        {optionalQualification}
                      </li>
                    )
                  )}
                </ul>
              </S.JobDescriptionContentDescription>
            </S.JobDescriptionContentContainer>
            <S.JobDescriptionContentContainer>
              <S.JobDescriptionContentTitle>
                <Typography variant='h3' fontWeight='700'>
                  Hiring Process
                </Typography>
              </S.JobDescriptionContentTitle>
              <S.JobDescriptionContentDescription>
                <ul>
                  {HIRING_PROCESS.map((hiringProcess, hiringProcessIndex) => (
                    <li key={`hiringProcess-${jobDescriptionIndex}-${hiringProcessIndex}`}>
                      {hiringProcess}
                    </li>
                  ))}
                </ul>
              </S.JobDescriptionContentDescription>
            </S.JobDescriptionContentContainer>
            <S.JobDescriptionHelperText variant='body1' fontWeight='300' textAlign='center'>
              You can ask any questions about the hiring process and the company directly to the HR
              team at hr@adler.cx.
            </S.JobDescriptionHelperText>
            <S.ApplyButton onClick={onApplyButtonClick}>
              <Typography variant='button'>Apply Now</Typography>
            </S.ApplyButton>
            <S.CloseAccordionText variant='h5' fontWeight='700' onClick={onCloseAccordionTextClick}>
              Close this section
            </S.CloseAccordionText>
          </AccordionDetails>
        </Accordion>
      ))}
    </S.Container>
  );
};
