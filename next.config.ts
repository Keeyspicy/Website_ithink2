import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local images in /public work without any config.
    // Add external hostnames here if you later use a CDN or CMS:
    // remotePatterns: [
    //   { protocol: "https", hostname: "your-cdn.com" },
    // ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
