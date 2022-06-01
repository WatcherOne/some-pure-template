const path = require('path')
const { defineConfig } = require('@vue/cli-service')

const name = process.env.APP_TITLE

module.exports = defineConfig({
	transpileDependencies: true,
	publicPath: process.env.APP_ROUTER_URL,
	outputDir: 'dist',
	assetsDir: 'static',
	lintOnSave: true,
	productionSourceMap: false,
	configureWebpack: {
		name,
		resolve: {
			alias: {
				'@': path.join(__dirname, 'src')
			}
		}
	},
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.join(__dirname, './src/assets/styles/variables.less')
            ]
        }
    }
})
