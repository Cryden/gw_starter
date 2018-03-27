/* global path config */

const webpack = require('webpack')

const webpackConfig = {
  mode: 'development',
  entry: {
    app: [
      path.resolve(config.source, 'js', 'main.js'),
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client'
    ]
  },
  output: {
    path: path.resolve(config.dest, 'js'),
    filename: 'main.js',
    publicPath: '/js/'
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}

module.exports = webpackConfig
