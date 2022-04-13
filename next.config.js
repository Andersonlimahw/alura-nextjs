/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: `/perguntas`,
        destination: `/faq`, 
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
