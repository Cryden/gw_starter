const gulp = require('gulp')
const config = require('node-config-yaml')

gulp.task('default', () => {
  console.log(config.source)
})
