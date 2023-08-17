/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "unsplash.com",
				pathname: "/photos", // Next.js will automatically append the next values
			},
		],
	},
}

module.exports = nextConfig
