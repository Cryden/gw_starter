const gulp = require('gulp')
const config = require('config-yml')

gulp.task('default', () => {
  console.log(config.source)
})
