// webpack作为一款模块打包器，其管理单元就是模块
// 不同的模块需要相应的loader作为加载器进行加载
const path = require('path')
const webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const env = process.env.NODE_ENV

module.exports = {
  // 程序入口文件
  entry: {
    main: './src/index.js',
    vendor: ['vue', 'vue-router']  // 第三方依赖名
  },
  output: {
    filename: '[name].[chunkhash:5].js',  // 输出文件名
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
      },
      {
        // vue单文件组件需要使用vue-loader加载器进行加载
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        // 同时使用babel-loader进行ES6语法的转换
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HTMLPlugin({
      title: 'webpack项目',
      template: 'index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
    new ExtractTextPlugin({
      filename: 'styles.[chunkhash:5].css',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
  ],
  resolve: {         // 解析模块功能，用来解析模块功能和一些require不方便的模块
	// 	modules: [
	// 		path.resolve(__dirname, 'src/lib')    // 模块位置
	// 	],
	// 	extensions: ['', '.js'],            // 设置扩展名，引入时可以不用.js
		alias: {
      // 'underscore': 'underscore.js',  // 设置别名
      'vue$': 'vue/dist/vue.esm.js',
			'@': 'resolve(src)',
		}
	}
}
