/* global gulp config path plumber notify browserSync */

/**
 * Build CSS with Sass
 */

const autoprefixer = require('gulp-autoprefixer')
const gulpif = require('gulp-if')
const minify = require('gulp-clean-css')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const groupmedia = require('gulp-group-css-media-queries')
// const cssUseref = require('gulp-css-useref')

function style () {
  console.log(require('node-normalize-scss').includePaths)
  return gulp
    .src(path.resolve(config.source, 'sass', '**/*.{scss,sass}'))
    .pipe(gulpif(!config.production, sourcemaps.init()))
    .pipe(plumber({
      errorHandler: notify.onError({
        title: 'Sass Error',
        message: 'Error: <%= error.message %>'
      })
    }))
    .pipe(sass({
      includePaths: require('node-normalize-scss').includePaths
    }))
    .pipe(autoprefixer({
      browsers: ['last 3 version']
    }))
    .pipe(groupmedia())
    .pipe(gulpif(!config.production, sourcemaps.write()))
    .pipe(gulpif(config.production, minify()))
    .pipe(gulp.dest(path.join(config.dest, 'css')))
    .pipe(browserSync.reload({
      stream: true
    }))
}

gulp.task('sass', style)
