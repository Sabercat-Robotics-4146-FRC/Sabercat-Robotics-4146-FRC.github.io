const createMDX = require("@next/mdx");

/** @type {import("next").NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx"],
  i18n: {
    // "es", "fr", "ja"
    locales: ["en"],
    defaultLocale: "en",
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; connect-src 'self'; child-src 'none'; object-src 'none'; img-src 'self' blob: data:;",
          },
        ],
      },
    ];
  },
  trailingSlash: false,
  reactStrictMode: true,
};

module.exports = createMDX({
  extension: /\.mdx?$/,
})(nextConfig);