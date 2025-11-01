/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    domains: ['images.unsplash.com',
      'res.cloudinary.com'
    ], // Add any external image domains here
  },
};

export default nextConfig;
