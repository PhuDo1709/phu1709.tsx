import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Ensures better error handling and warnings during development
  typescript: {
    ignoreBuildErrors: false,  // Change to 'true' if you want to ignore type errors during build
  },
};

export default nextConfig;
