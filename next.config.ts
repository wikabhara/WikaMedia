import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     domains: ["static01.nyt.com"],
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "static01.nyt.com",
//         port: "",
//         pathname: "/images/**",
//       },
//     ],
//   },
// };

const nextConfig: NextConfig = {
  /* config options here */
  images: {
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
