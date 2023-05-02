/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  productionBrowserSourceMaps: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "lh3.googleusercontent.com",
      "maps.googleapis.com",
      "googleapis.com",
      "img.youtube.com"
    ],
  }
};

module.exports = nextConfig;
