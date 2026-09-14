/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swagger-ui-react uses ssr:false via dynamic import in the client component,
  // so no additional webpack config is required.
};
module.exports = nextConfig;
