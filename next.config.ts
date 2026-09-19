import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/aditya-kumar-portfolio",
  trailingSlash: true,
};

export default nextConfig;
