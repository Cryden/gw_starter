/* global gulp browserSync  */

/**
 * Browser Sync & webpack middlewares
 */

const webpack = require('webpack')
const webpackConfig = require('./../../webpack/webpack.dev')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const browserSyncConfig = {}

function liveReload (done) {
  var webpackCompiler = webpack(webpackConfig)

  browserSyncConfig.server = {
    baseDir: config.dest
  }

  browserSyncConfig.middleware = [
    webpackDevMiddleware(webpackCompiler, {
      publicPath: webpackConfig.output.publicPath,
      noInfo: true,
      stats: {
        colors: true
      }
    }),
    webpackHotMiddleware(webpackCompiler)
  ]

  browserSync.init(browserSyncConfig)
  done()
}

gulp.task('browser-sync', liveReload)
