import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hulking-card-e35.notion.site",
      },
    ],
  },
};

export default nextConfig;
