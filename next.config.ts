import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // next.config.js

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**", // allow all paths
      },
      {
        protocol: "https",
        hostname: "example.com",
        pathname: "/**", // allow all paths
      },
      {
        protocol: "https",
        hostname: "olive-wolverine-763801.hostingersite.com",
        pathname: "/**", // allow all paths
      },
    ],
  },
};

export default nextConfig;
