import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/portfolio",
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
