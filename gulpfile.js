const gulp = require('gulp')
const HubRegistry = require('gulp-hub')

var hub = new HubRegistry(['config/gulp/tasks/*.js'])
gulp.registry(hub)
