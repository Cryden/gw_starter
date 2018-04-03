/* global gulp */

global.gulp = require('gulp')
global.config = require('node-config-yaml').load('config/config.yml')
global.browserSync = require('browser-sync')
global.path = require('path')
global.plumber = require('gulp-plumber')
global.notify = require('gulp-notify')

const requireDir = require('require-dir')

requireDir('config/gulp/tasks', { recurse: true })

gulp.task('build', gulp.series(gulp.parallel('pug', 'js'), 'sass'))

gulp.task('dev', gulp.series('build', 'browser-sync', 'watch'))

gulp.task('prod', gulp.series('clean', 'build'))

gulp.task('default', gulp.series('dev'))
