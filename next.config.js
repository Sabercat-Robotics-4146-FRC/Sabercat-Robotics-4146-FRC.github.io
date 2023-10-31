/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    // "es", "fr", "ja"
    locales: ["en"],
    defaultLocale: "en",
  },
  trailingSlash: false,
}

module.exports = nextConfig
