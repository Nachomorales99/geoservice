/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	env: { NEXT_PUBLIC_G_KEY: process.env.NEXT_PUBLIC_G_KEY },
};

module.exports = nextConfig;
