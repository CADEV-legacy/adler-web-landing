/** NOTE: Front-end Part */
export const ROUTE_URL = {
  home: '/',
} as const;

export const OUTER_LINK = {
  product: 'https://adler3d.com',
  banner: 'https://bit.ly/44Pqs5w',
  introduce: 'https://bit.ly/4dHqArH',
  blog: '',
} as const;

export const STATIC_TEXT = {
  contactEmail: 'hr@adler.cx',
  contactPhoneNumber: '028746182',
};

export const COLOR = {
  black: '#000000',
  white: '#ffffff',
  success: '#00c851',
  successHover: '#007e33',
  info: '#33b5e5',
  infoHover: '#0099cc',
  warning: '#ffbb33',
  warningHover: '#ff8800',
  error: '#ff4444',
  errorHover: '#cc0000',
  theme1: '#fc2d7c',
  theme1Light1: '#fc3e86',
  theme1Light2: '#ff8eb9',
  theme1Active: '#fc4f91',
  theme1Disabled: '#feafcd',
  theme2: '#ffe5ef',
  theme2Light1: '#ffe7f0',
  theme2Active: '#ffe9f2',
  theme2Disabled: '#fff5f9',
  blackAlpha: (opacity: number) => `rgba(0, 0, 0, ${opacity})`,
  whiteAlpha: (opacity: number) => `rgba(255, 255, 255, ${opacity})`,
} as const;

export const MILLISECOND_TIME_FORMAT = {
  millisecond: 1,
  seconds: (second: number) => MILLISECOND_TIME_FORMAT.millisecond * 1000 * second,
  minutes: (minute: number) => MILLISECOND_TIME_FORMAT.seconds(60) * minute,
  hours: (hour: number) => MILLISECOND_TIME_FORMAT.minutes(60) * 60 * hour,
  days: (day: number) => MILLISECOND_TIME_FORMAT.hours(24) * day,
} as const;
