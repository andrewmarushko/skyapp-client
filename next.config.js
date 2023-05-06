/** @type {import('next').NextConfig} */
const nextConfig = {
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
