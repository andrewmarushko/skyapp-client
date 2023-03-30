const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    pageEnv: true,
  },
  webpack(config) {
    config.resolve.alias["@/app"] = path.join(__dirname, "app");
    return config;
  },
};

module.exports = nextConfig;
