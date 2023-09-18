/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/youtube",
        destination: "https://youtube.com",
        permanent: false,
      },
    ];
  },
};
