/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['seatgeek.com', 'links.papareact.com', 'res.cloudinary.com'],
    },
    env: {
        API_URL: process.env.API_URL,
        API_KEY: process.env.API_KEY,
        API_SECRET: process.env.API_SECRET,
        NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
        NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
    },
}

module.exports = nextConfig
