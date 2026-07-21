import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 640, 768, 1024, 1280, 1536],
    imageSizes: [96, 160, 240, 320, 480]
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ...(config.watchOptions ?? {}),
        ignored: [
          "**/.next/**",
          "**/node_modules/**",
          "**/public/images/source/**",
          "**/public/images/optimized/**"
        ]
      };
    }
    return config;
  }
};

export default nextConfig;
