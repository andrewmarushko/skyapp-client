const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      {
        loader: 'next/font/google',
        options: { subsets: ['latin'] },
      },
    ],
  },
  images: {
    domains: ['res.cloudinary.com', 'lh3.googleusercontent.com'], 
  },
  webpack(config) {
    config.resolve.alias['@/app'] = path.join(__dirname, 'app');
    return config;
  },
};

module.exports = nextConfig;
