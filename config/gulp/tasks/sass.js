/**
 * Build CSS with Sass
 */

const gulp = require('gulp')
const config = require('config-yml')
const browserSync = require('browser-sync')
const path = require('path')
const notify = require('gulp-notify')
const plumber = require('gulp-plumber')
const autoprefixer = require('gulp-autoprefixer')
const gulpif = require('gulp-if')
const minify = require('gulp-clean-css')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const uncss = require('gulp-uncss')
const groupmedia = require('gulp-group-css-media-queries')
const cssUseref = require('gulp-css-useref')

// Configiration for gulp-uncss plugin.
const unCssIgnore = [
  /(#|\.)fancybox(-[a-zA-Z]+)?/,
  /tooltip/,
  '.modal',
  '.panel',
  '.active',
  '.hide',
  '.show',
  '.fade',
  '.fade.in',
  '.collapse',
  '.collapse.in',
  '.navbar-collapse',
  '.navbar-collapse.in',
  '.collapsing'
]

function style () {
  console.log(config.dest)
  return gulp
    .src(path.join(config.source, 'sass', '**/*.{scss,sass}'))
    .pipe(gulpif(config.sass.sourcemap, sourcemaps.init()))
    .pipe(plumber({
      errorHandler: notify.onError({
        title: 'Sass Error',
        message: 'Error: <%= error.message %>'
      })
    }))
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 3 version']
    }))
    .pipe(groupmedia())
    .pipe(gulpif(config.sass.sourcemap, sourcemaps.write()))
    .pipe(gulp.dest(path.join(config.dest, 'css')))
    .pipe(browserSync.reload({
      stream: true
    }))
}

gulp.task('sass', style)
