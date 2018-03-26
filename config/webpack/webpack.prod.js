const config = require('node-config-yaml')
const path = require('path')
const webpack = require('webpack')

const webpackConfig = {
  mode: 'production',
  entry: {
    app: [
      path.resolve(config.source, 'js', 'main.js')
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
