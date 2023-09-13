/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/:path*",
        destination: "https://hey.xyz/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
