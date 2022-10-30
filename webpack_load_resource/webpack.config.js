const path = require('path')
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
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
      }
    ]
  }
}
