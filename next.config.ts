import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Lets you open the dev server from other addresses on your network
  // (e.g. http://10.17.20.157:3000 or a phone on the same Wi-Fi).
  // Without this, Next.js blocks its scripts there and nothing interactive works.
  // Add your own IP here if it changes.
  allowedDevOrigins: ["10.17.20.157", "192.168.*.*", "10.*.*.*", "*.local"],
};

export default nextConfig;
