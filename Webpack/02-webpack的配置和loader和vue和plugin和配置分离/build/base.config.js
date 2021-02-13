const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const UglifyjsWebpackPlugin=require('uglifyjs-webpack-plugin')
module.exports={
  entry:'../src/main.js',
  output: {
    //上一层文件夹中的dist
    path:path.resolve(__dirname,'../dist'),
    filename:'bundle.js',
    // publicPath:'dist/'
  },
  module: {
    rules: [
      {
        //正则匹配
        test: /\.css$/,
        //css-loader只负责将css文件进行加载
        //style-loader负责将样式添加到DOM中
        //使用多个loader时，是从右向左的
        use: [ 'style-loader','css-loader' ]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              //当加载的图片，小于limit时，会将图片编译成base64字符串形式
              //当加载的图片，大于limit时，需要使用file-loader模块进行加载
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        //这些文件不会被编译处理
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test:/\.vue$/,
        use:['vue-loader']
      }
    ]
  },
  resolve:{//一般用来解决路径问题
    extensions:['.js','.css','.vue'],
    //别名
    alias:{
      'vue$':'vue/dist/vue.esm.js'
    }
  },
  plugins:[
    new webpack.BannerPlugin('最终版权归xqz所有'),
    new HtmlWebpackPlugin({
      template:'index.html'
    }),
    // new UglifyjsWebpackPlugin()
  ],
  // devServer:{
  //   //服务哪一个文件夹
  //   contentBase:'./dist',
  //   //是否需要实时监听
  //   inline:true
  // }

}
