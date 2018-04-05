/* global gulp path config plumber notify */

const critical = require('critical').stream

gulp.task('critical', function () {
  return gulp.src(path.join(config.dest, '*.html'))
    .pipe(plumber({
      errorHandler: notify.onError({
        title: 'Critical Error',
        message: 'Error: <%= error.message %>'
      })
    }))
    .pipe(critical({
      base: '/',
      inline: true,
      css: path.join(config.dest, 'css/style.css')
    }))
    .pipe(gulp.dest(path.join(config.dest)))
})
