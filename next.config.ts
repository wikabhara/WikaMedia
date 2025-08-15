import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["static01.nyt.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static01.nyt.com",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
