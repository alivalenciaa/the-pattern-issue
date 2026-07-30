import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Pin the file-tracing root to this project so an unrelated lockfile
  // higher up the filesystem doesn't get picked as the root.
  outputFileTracingRoot: path.resolve(__dirname),
};

export default nextConfig;
