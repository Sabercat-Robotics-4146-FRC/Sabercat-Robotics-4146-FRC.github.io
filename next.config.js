const createMDX = require("@next/mdx");
const createNextIntlPlugin = require('next-intl/plugin');

/** @type {import("next").NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx"],
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: process.env.NODE_ENV === "development" ? "default-src 'self' 'unsafe-inline' 'unsafe-eval';" : "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; connect-src 'self'; child-src 'none'; object-src 'none'; img-src 'self' blob: data:;;",
          },
        ],
      },
    ];
  },
  trailingSlash: false,
  reactStrictMode: true,
};

module.exports = createMDX({
  extension: /\.mdx$|\.md$/,
})(createNextIntlPlugin()(nextConfig));