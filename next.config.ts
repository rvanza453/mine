import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },

  basePath: "/mine",
  assetPrefix: "/mine",
};

export default nextConfig;
