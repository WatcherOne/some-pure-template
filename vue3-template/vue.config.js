// const Components = require('unplugin-vue-components/webpack')
// const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    runtimeCompiler: true,
	/* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
	productionSourceMap: false,
	lintOnSave: true,
    // 跨域
	devServer: {
		open: false,
		proxy: {
			[process.env.VUE_APP_BASE_API]: {
                target: 'http://192.168.0.189/api/v1',
				changeOrigin: true,
				pathRewrite: {
					['^' + process.env.VUE_APP_BASE_API]: ''
				}
			}
		}
	},
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'PC系统'
                return args
            })
    },
    // configureWebpack: {
    //     plugins: [
    //         Components({
    //             resolvers: [ElementPlusResolver()]
    //         })
    //     ]
    // },
    css: {
        loaderOptions: {
            less: {
                globalVars: {
                    hack: `true; @import '~@/assets/styles/variables.less'`
                }
            }
        }
    }
}
