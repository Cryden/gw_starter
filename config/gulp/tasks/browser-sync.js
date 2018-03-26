/**
 * Browser Sync & webpack middlewares
 */

const gulp = require('gulp')
const config = require('node-config-yaml')
const browserSync = require('browser-sync')
const path = require('path')

const webpack = require('webpack')
const webpackConfig = require('./../../webpack/webpack.dev')
const webpackCompiler = webpack(webpackConfig)
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const browserSyncConfig = {}

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

function liveReload () {
  browserSync.init(browserSyncConfig)
  gulp.watch(path.resolve(config.source, 'js', '*')).on('change', () => browserSync.reload())
}

gulp.task('browser-sync', liveReload)
