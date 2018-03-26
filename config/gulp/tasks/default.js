const gulp = require('gulp')
const config = require('node-config-yaml')

gulp.task('default', (done) => {
  console.log(config)
  done()
})
