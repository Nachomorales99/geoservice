/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	env: { NEXT_PUBLIC_GOOGLE_KEY: process.env.NEXT_PUBLIC_GOOGLE_KEY },
};

module.exports = nextConfig;
