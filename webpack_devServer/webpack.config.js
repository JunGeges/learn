const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
// const { CopyWebpackPlugin } = require('copy-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const {VueLoaderPlugin} = require('vue-loader/dist/index')


module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'js/bundle.js'
  },
  // 打包模式 打包后的代码有差别
  mode:"development",

  devServer: {
    open: true,
    hot:true
    // 去加载webpack没打包的（且被应用）内容
    // contentBase: ''
  },
  // 配置loader
  module: {
    rules: [
      {
        test: /\.(css|scss)$/i,
        // loader: 'css-loader',
        // options: {
        //   modules: true
        // }
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      // {
      //   test: /\.(png|jpg|jpeg|svg|gif)$/i,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         outputPath: 'img',
      //         name: '[name]-[hash:6].[ext]',
      //         limit: 50 * 1024
      //       }
      //     }
      //   ]
      // }
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/i,
        type: 'asset',
        generator: {
          filename: "img/[name].[hash:6][ext]"
        },
        parser: {
          dataUrlCondition: {
            maxSize: 50 * 1024
          }
        }
      },
      {
        test: /\.(eot|ttf|woff2?)$/i,
        type: "asset/resource",
        generator: {
          filename: "font/[name]_[hash:6][ext]",
        }
      },
      {
        test:/\.vue$/i,
        loader: "vue-loader"
      }
    ]
  },
  // 配置插件
  plugins: [
    // 删除打包文件
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    // 指定打包模板
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "webpack_learn"
    }),
    // webapck 内置插件 用来定义配置变量
    new DefinePlugin({
      BASE_URL: "'./'",
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
    // 复制文件到打包目录
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: "public",
    //       to: "./",
    //       globOptions: {
    //         // 忽略的文件-不复制
    //         ignore: [
    //           "**/index.html"
    //         ]
    //       }
    //     }
    //   ]
    // })
  ]
}
