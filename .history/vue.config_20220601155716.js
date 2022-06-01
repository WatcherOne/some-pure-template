const { defineConfig } = require('@vue/cli-service')

const name = process.env.APP_TITLE

module.exports = defineConfig({
	transpileDependencies: true,
	configureWebpack: {
		name,
		resolve: {
			alias: {
				'@': resolve('src')
			}
		}
	}
})
