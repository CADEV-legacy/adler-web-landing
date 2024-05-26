import type { Metadata } from 'next';

import './global.scss';
import styles from './layout.module.scss';

import { Provider } from '@/(client)/components';
import { combinedFontFamily } from '@/(client)/utils';

import { Footer, Header } from '@/(client)/components/rootLayout';

export const metadata: Metadata = {
  title: 'Adler',
  description: 'Adler ... description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <link rel='apple-touch-icon' sizes='180x180' href='/favicons/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png' />
      <link rel='manifest' href='/favicons/site.webmanifest' />
      <link rel='mask-icon' href='/favicons/safari-pinned-tab.svg' color='#5bbad5' />
      <meta name='msapplication-TileColor' content='#da532c' />
      <meta name='theme-color' content='#ffffff' />
      <body style={{ fontFamily: combinedFontFamily }}>
        <Provider>
          <div className={styles.scrollableLayout}>
            <div className={styles.maxWidthLayout}>
              <Header />
              <main className={styles.main}>{children}</main>
              <Footer />
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
