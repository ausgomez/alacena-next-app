/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', 'spoonacular.com'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
