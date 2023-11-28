const nextConfig = {
	experimental: {
		appDir: true
	},

	publicRuntimeConfig: {
		favicon: './public/favicon.svg'
	},
	serverRuntimeConfig: {
		images: {
			domains: ['*'],
			formats: ['image/webp']
		}
	},
	reactStrictMode: false,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '*',
				port: '',
				pathname: '/storage/v1/object/public/**'
			},
			{
				protocol: 'https',
				hostname: 'cdn.pixabay.com',
				port: '',
				pathname: '/**'
			}
		]
	}
}

module.exports = nextConfig
