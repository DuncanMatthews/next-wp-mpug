// ... existing code ...
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.WORDPRESS_HOSTNAME || "mpug.com", // Ensure this is set
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
// ... existing code ...