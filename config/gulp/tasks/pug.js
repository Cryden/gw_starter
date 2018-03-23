/**
 * Build HTML
 */

const gulp = require('gulp')
const config = require('node-config-yaml')
const browserSync = require('browser-sync')
const path = require('path')
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')

const pug = require('gulp-pug')
const htmlbeautify = require('gulp-html-beautify')

function renderPug () {
  return gulp
    .src(path.join(config.source, 'pug', '*.pug'))
    .pipe(plumber({
      errorHandler: notify.onError({
        title: 'Pug Error',
        message: 'Error: <%= error.message %>'
      })
    }))
    .pipe(pug())
    .pipe(htmlbeautify())
    .pipe(gulp.dest(path.join(config.dest)))
    .pipe(browserSync.reload({
      stream: true
    }))
}

gulp.task('pug', renderPug)
