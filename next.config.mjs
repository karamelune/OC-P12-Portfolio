// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'placehold.co',
            },
            {
                protocol: 'https',
                hostname: 'www.svgrepo.com',
            },
        ],
    },
};

export default nextConfig;
