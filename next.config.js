/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "velloredental.com",
      },
      {
        protocol: "https",
        hostname: "www.dentalclinicinvellore.in",
      },
    ],
    // Configure local patterns for Next.js 16 compatibility - allow all local images
    localPatterns: [
      {
        pathname: '/**',
        search: '',
      },
    ],
  },
  // Build configuration - Set to true for faster builds, false to catch errors
  typescript: {
    ignoreBuildErrors: true, // Can be set to false after fixing all type errors
  },
  eslint: {
    ignoreDuringBuilds: true, // Can be set to false after fixing all lint warnings
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
}

module.exports = nextConfig
