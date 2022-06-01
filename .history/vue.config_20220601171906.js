const path = require('path')
// const { defineConfig } = require('@vue/cli-service')

const name = process.env.APP_TITLE

module.exports = {
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
    chainWebpack: config => {
        config.module
            .rule('less')
            .oneOf('vue')
            .use('style-resource')
            .loader('style-resources-loader')
            .options({
                patterns: [
                    path.resolve(__dirname, './src/assets/styles/variables.less')
                ]
            })
    },
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    }
}
