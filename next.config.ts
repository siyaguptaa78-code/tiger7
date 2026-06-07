import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "reddysports.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "genuinebettingids.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "tiger365.buzz",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "speedcdn.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "tiger365id.in",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
