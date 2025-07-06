/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  images: {
    domains: ["images.unsplash.com", "source.unsplash.com", "i.imgur.com"],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    serverActions: true,
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },
  // Enable static exports for static site generation
  output: 'export',
  // Ensure trailing slashes for better SEO
  trailingSlash: true,
  // Add custom headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

// Security headers configuration
const securityHeaders = [
  // Prevent MIME type sniffing
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // Enable XSS filtering
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  // Prevent clickjacking
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  // Referrer policy
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  // Permissions policy
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
];

module.exports = nextConfig;
