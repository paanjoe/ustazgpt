/** @type {import('next').NextConfig} */
/** @type {import('next-sitemap').IConfig} */

module.exports = {
  reactStrictMode: false,
  env: {
    GOOGLE_ANALYTICS: process.env.GOOGLE_ANALYTICS,
    siteUrl: process.env.SITE_URL,
    generateRobotsTxt: true,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL
  }
};
