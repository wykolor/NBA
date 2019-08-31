module.exports = {
	devServer: {
		host: "192.168.3.11", //要设置当前访问的ip 否则失效
		open: true, //浏览器自动打开页面
		port: 8080,
		proxy: {
			'/api': {
				target: 'http://192.167.3.12',
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					'^/api': '/'
				}
			}
		}
	},
}