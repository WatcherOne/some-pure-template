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
    // "less": "^4.0.0",
    // "less-loader": "^8.0.0",
    // "style-resources-loader": "^1.5.0",
    // "vue-cli-plugin-style-resources-loader": "^0.1.5",
    // pluginOptions: {
    //     //  npm install vue-cli-plugin-style-resources-loader is required
    //     'style-resources-loader': {
    //         preProcessor: 'less',
    //         patterns: [
    //             path.resolve(__dirname, './src/assets/styles/variables.less')
    //         ]
    //     }
    // }
    css: {
        loaderOptions: {
            scss: {
                additionalData: `
                    @import "~@/assets/styles/variables.scss"
                `
            }
        }
    }
})
