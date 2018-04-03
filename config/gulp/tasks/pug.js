/* global gulp config path plumber notify browserSync gulpif */

/**
 * Build HTML
 */

const pug = require('gulp-pug')
const htmlbeautify = require('gulp-html-beautify')

function renderPug () {
  return gulp
    .src(path.resolve(config.source, 'pug', '*.pug'))
    .pipe(plumber({
      errorHandler: notify.onError({
        title: 'Pug Error',
        message: 'Error: <%= error.message %>'
      })
    }))
    .pipe(pug())
    .pipe(gulpif(config.args.development, htmlbeautify()))
    .pipe(gulp.dest(path.resolve(config.dest)))
    .pipe(browserSync.reload({
      stream: true
    }))
}

gulp.task('pug', renderPug)
