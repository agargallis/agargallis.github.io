/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['placeholder.com'],
    unoptimized: true,
  },
  output: 'export', // 🔥 Χρειάζεται για να παραχθεί ο φάκελος `out/`
  basePath: '', // Εάν το έργο σου είναι στο root του GitHub Pages, άφησέ το κενό
  assetPrefix: '', // Για σωστά static αρχεία, άφησέ το κενό αν το project είναι στον root
};

export default nextConfig;
