import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },

  basePath: "/valentine-special",
  assetPrefix: "/valentine-special",
};

export default nextConfig;