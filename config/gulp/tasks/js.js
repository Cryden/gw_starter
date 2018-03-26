const gulp = require('gulp')
const webpack = require('webpack')
const webpackConfig = require('./../../webpack/webpack.prod')
const gutil = require('gulp-util')

function Log (taskName, message) {
  this.error = function error () {
    throw new gutil.PluginError({
      plugin: taskName,
      message: gutil.colors.red(message)
    })
  }
  this.info = function info () {
    gutil.log(taskName, gutil.colors.magenta(message))
  }
}

gulp.task('js', function (done) {
  webpack(webpackConfig, function (err, stats) {
    if (err) {
      new Log('Webpack', err).error()
    }
    new Log('Webpack', stats.toString({
      assets: true,
      chunks: false,
      chunkModules: false,
      colors: true,
      hash: false,
      timings: true,
      version: false
    })).info()
    done()
  })
})
