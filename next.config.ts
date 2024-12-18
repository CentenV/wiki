import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
