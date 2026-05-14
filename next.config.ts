import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      { source: "/ar", destination: "/", permanent: true },
      { source: "/en", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
