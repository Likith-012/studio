/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig
// next.config.js
module.exports = {
  publicRoutes: ['/login'],
};

// next.config.js
module.exports = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  }
}