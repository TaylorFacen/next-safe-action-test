/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@acme/ui'],
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig
