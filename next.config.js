const nextConfig = {
	experimental: {
		appDir: true
	},

	publicRuntimeConfig: {
		favicon: './public/favicon.svg'
	},
	serverRuntimeConfig: {
		images: {
			domains: ['ikunmdgrxuoyltqjiolb.supabase.co'],
			formats: ['image/webp']
		}
	},
	reactStrictMode: false,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'ikunmdgrxuoyltqjiolb.supabase.co',
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
