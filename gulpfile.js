const gulp = require('gulp')
const requireDir = require('require-dir')

var dir = requireDir('./config/gulp/tasks')

gulp.task('dir', () => {
  console.log(dir)
})
