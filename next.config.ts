import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/bc-cafe-web",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
