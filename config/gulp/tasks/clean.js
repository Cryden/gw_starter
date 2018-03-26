/**
 * Cleaner
 */

const gulp = require('gulp')
const config = require('node-config-yaml')

const del = require('del')

function clean (done) {
  del.sync(config.dest)
  done()
}

gulp.task('clean', clean)
