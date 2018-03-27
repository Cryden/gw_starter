/* global gulp config browserSync  */

gulp.task('watch', function () {
  gulp.watch([config.source + '/sass/' + '**/*'], gulp.series('sass'))
  gulp.watch([config.source + '/pug/' + '**/*'], gulp.series('pug'))
  gulp.watch([config.source + '/js/' + '**/*'], browserSync.reload())
})
