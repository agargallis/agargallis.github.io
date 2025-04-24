/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ⚠️ Υποχρεωτικό για GitHub Pages (static export)
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Απενεργοποιεί optimization (υποχρεωτικό για static export)
  },
  // Προαιρετικό: Ρύθμιση base path αν το repo δεν είναι root (π.χ., user.github.io/repo-name)
  basePath: process.env.NODE_ENV === 'production' ? '/repo-name' : '', // Αντικατέστησε με το όνομα του repo σου
  trailingSlash: true, // Βοηθά με routing σε GitHub Pages
};

export default nextConfig;
