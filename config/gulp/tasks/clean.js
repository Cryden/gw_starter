/**
 * Cleaner
 */

const gulp = require('gulp')
const config = require('node-config-yaml')

const del = require('del')

function clean () {
  if (config.production) {
    del.sync(config.dest)
  }
}

gulp.task('clean', clean)
