/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.imgflip.com',
            },
            {
                protocol: 'https',
                hostname: 'cdn.pixabay.com'
            }

        ]
    }
}

export default nextConfig;
