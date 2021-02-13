const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebpackPlugin({
	template: './src/index.html', //要复制的文件
	filename: 'index.html' //要生成的文件名称
})
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
	mode: 'development', //编译模式
	entry: path.join(__dirname, './src/index.js'), //入口文件指定路径
	output: {
		path: path.join(__dirname, './dist'), //输出文件的存放路径
		filename: 'bundle.js' //输出文件的名称
	},
	plugins: [htmlPlugin, new VueLoaderPlugin()], //需要new一个Vue插件的实例
	module: {
		rules: [{
			test: /\.css$/, //文件后缀名
			use: ['style-loader', 'css-loader', 'postcss-loader'] //该文件后缀名使用的插件,顺序从后往前
		}, {
			test: /\.jpg|png|gif|jpeg|bmp|ttf|eot|woff|woff2$/,
			use: ['url-loader?limit=400000'] //limit表示小于该大小的图片才会被转为base64的图片
		}, {
			test: /\.js$/,
			//use: ['babel-loader'],
			//exclude: /node_modules/
		}, {
			test: /\.vue$/,
			use: 'vue-loader'
		}]
	}
}
