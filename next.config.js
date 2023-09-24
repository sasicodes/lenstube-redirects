/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/:path*",
        destination: "https://tape.xyz/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
