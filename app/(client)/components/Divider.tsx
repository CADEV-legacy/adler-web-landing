import { Typography } from '@mui/material';

import styles from './Divider.module.scss';

type DividerProps = {
  hasOr?: boolean;
};

export const Divider: React.FC<DividerProps> = ({ hasOr }) => {
  return (
    <div className={styles.container}>
      <div className={styles.line}>
        {hasOr && (
          <Typography variant='h4' textAlign='center'>
            OR
          </Typography>
        )}
      </div>
    </div>
  );
};
