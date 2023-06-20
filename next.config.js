/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cryptoicons.org/api/icon",
        port: "",
        pathname: "/crypto/**",
      },
    ],
  },
};

module.exports = nextConfig;
