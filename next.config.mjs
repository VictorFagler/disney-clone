/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "links.papareach.com",
      },
      {
        protocol: "http",
        hostname: "image.tmdb.org",
      },
    ],
  },
};

export default nextConfig;
