/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['sv-landing-page-assets.s3.eu-north-1.amazonaws.com'],
        unoptimized: true
    },
    trailingSlash: true
}

module.exports = nextConfig
