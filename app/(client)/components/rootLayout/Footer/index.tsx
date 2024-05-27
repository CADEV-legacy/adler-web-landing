import { Typography } from '@mui/material';

import { BlogText } from './BlogText';
import { EmailText } from './EmailText';
import styles from './index.module.scss';
import { TelephoneText } from './TelephoneText';

import { Divider } from '@/(client)/components';

import { COLOR } from '@/constant';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.footerHeaderTextContainer}>
        <Typography variant='h1' fontSize='1rem'>
          Adler Inc.
        </Typography>
        <span />
        <EmailText />
        <span />
        <BlogText />
      </div>
      <Divider />
      <div className={styles.footerTextContainer}>
        <div className={styles.footerTextFlexContainer}>
          <Typography className={styles.footerText} variant='h6'>
            <span>CEO</span> : Sejin Han
          </Typography>
        </div>
        <div className={styles.footerTextFlexContainer}>
          <Typography className={styles.footerText} variant='h6'>
            <span>Address</span> : 2nd floor, 25 224-gil Nambusunhwan-ro, Gwanak-gu, Seoul
          </Typography>
          <TelephoneText />
        </div>
        <div className={`${styles.footerTextFlexContainer} ${styles.lastFooterText}`}>
          <Typography variant='h6' color={COLOR.whiteAlpha(0.6)}>
            Addr. Seoul, Korea | Biz License 772-88-02469
          </Typography>
        </div>
      </div>
    </footer>
  );
};
