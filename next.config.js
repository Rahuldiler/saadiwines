/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['sv-landing-page-assets.s3.eu-north-1.amazonaws.com'],
        unoptimized: true
    },
    trailingSlash: true
}

module.exports = {
    ...nextConfig,
    async headers() {
        return [
            {
                source: '/api/:path*',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: '*', // Set the appropriate origin or origins you want to allow
                    },
                    {
                        key: 'Access-Control-Allow-Methods',
                        value: 'GET, POST, PUT, DELETE, OPTIONS', // Adjust the allowed HTTP methods as needed
                    },
                    {
                        key: 'Access-Control-Allow-Headers',
                        value: 'X-Requested-With, Content-Type, Authorization', // Adjust the allowed headers as needed
                    },
                ],
            },
        ];
    },
};
