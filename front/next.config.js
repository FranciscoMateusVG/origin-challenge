module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/score/:path*",
        destination: "http://localhost:2030/:path*",
      },
    ];
  },
};
