/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com', // Yahan wo domain likhein jahan se aap images load kar rahe hain
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig