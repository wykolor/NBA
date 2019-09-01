module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ?
		'/production-sub-path/' : '/',
	devServer: {
		// proxy: 'http://192.168.3.11:8080'
		proxy: {
			'/api': {
				target: 'http://192.168.3.12:8085/',
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				},
			}
		}
	},
}