const DEFAULT_BRANCH = 'local';
const DEFAULT_DOMAIN = 'https://localhost:3000';

export const SERVER_SETTINGS = {
  BRANCH: process.env.BRANCH ?? DEFAULT_BRANCH,
  DOMAIN: process.env.DOMAIN ?? DEFAULT_DOMAIN,
};

export const CLIENT_SETTINGS = {
  BRANCH: process.env.NEXT_PUBLIC_BRANCH ?? DEFAULT_BRANCH,
  DOMAIN: process.env.NEXT_PUBLIC_DOMAIN ?? DEFAULT_DOMAIN,
};
