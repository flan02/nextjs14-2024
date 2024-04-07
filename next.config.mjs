/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.pexels.com",
      },
    ],
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
