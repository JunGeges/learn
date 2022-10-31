const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
// const { CopyWebpackPlugin } = require('copy-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'js/bundle.js'
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
          filename: 'img/[name].[hash:6][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024
          }
        }
      },
      {
        test: /\.(eot|ttf|woff2?)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name]_[hash:6][ext]'
        }
      }
    ]
  },
  // 配置插件
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'webpack_learn'
    }),
    new DefinePlugin({
      BASE_URL: "'./'"
    }),
    // 复制文件到打包目录
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          to: './',
          globOptions: {
            // 忽略的文件-不复制
            ignore: ['**/index.html']
          }
        }
      ]
    })
  ]
}
