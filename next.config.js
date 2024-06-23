/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dt6w4pmk0/image/upload/fl_preserve_transparency/v1718443363/**",
      },
    ],
  },
};

module.exports = nextConfig;
