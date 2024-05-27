import Link from 'next/link';

import { Typography } from '@mui/material';

import styles from './index.module.scss';

import { SmartImage } from '@/(client)/components';

import { COLOR, OUTER_LINK, ROUTE_URL } from '@/constant';

import adlerLogo from '#/images/adlerLogo.png';

export const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <div className={styles.adlerTeamLogoContainer}>
        <Link href={ROUTE_URL.home}>
          <div className={styles.adlerLogoWrapper}>
            <SmartImage alt='adler-logo' src={adlerLogo} />
          </div>
        </Link>
        <Typography variant='h3' fontWeight='bold' color={COLOR.theme1}>
          Team
        </Typography>
      </div>
      <div className={styles.navigationContainer}>
        <Link className={styles.navigation} href={OUTER_LINK.product} target='_blank'>
          <Typography fontWeight='bold'>Go to Product</Typography>
        </Link>
      </div>
    </header>
  );
};
