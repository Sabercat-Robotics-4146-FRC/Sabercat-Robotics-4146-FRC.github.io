/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import("next").NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/awards",
        destination: "/about/awards",
        permanent: true,
      },
      {
        source: "/innovation-center",
        destination: "/about/innovation-center",
        permanent: true,
      },
      {
        source: "/sponsors-and-partners",
        destination: "/sponsors",
        permanent: true,
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { hostname: "sabercatrobotics.com" },
      { hostname: "static.sabercatrobotics.com" },
    ],
  },
};

export default withNextIntl(nextConfig);
