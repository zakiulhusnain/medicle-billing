/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARNING !!
    // Danger: This allows production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig