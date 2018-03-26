/**
 * Browser Sync & webpack middlewares
 */

const gulp = require('gulp')
const config = require('node-config-yaml')
const path = require('path')
const browserSync = require('browser-sync')
const webpack = require('webpack')
const webpackConfig = require('./../../webpack/webpack.dev')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const browserSyncConfig = {}

function liveReload () {
  browserSyncConfig.server = {
    baseDir: config.dest
  }

  browserSyncConfig.middleware = [
    webpackDevMiddleware(webpack(webpackConfig), {
      publicPath: webpackConfig.output.publicPath,
      noInfo: true,
      stats: {
        colors: true
      }
    }),
    webpackHotMiddleware(webpack(webpackConfig))
  ]

  browserSync.init(browserSyncConfig)
  gulp.watch(path.resolve(config.source, 'js', '*')).on('change', () => browserSync.reload())
}

gulp.task('browser-sync', liveReload)
