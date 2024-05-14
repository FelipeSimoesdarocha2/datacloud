/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ['pt', 'en',],
    defaultLocale: 'pt',
    localeDetection: false,
  },
};

module.exports = nextConfig;
