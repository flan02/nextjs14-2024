/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: [
      "@sentry/core",
      "@sentry/nextjs",
      "@sentry/react",
      "@sentry/node",
    ],
    serverComponentsExternalPackages: [
      "@sentry/nextjs",
      "@sentry/node",
      "@sentry/react",
      "@sentry/core",
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.pexels.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
    ],
    //domains: ["res.cloudinary.com", "m.media-amazon.com"],
  },
};

export default nextConfig;
