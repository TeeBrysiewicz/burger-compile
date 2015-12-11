'use strict'

import gulp from 'gulp'
import gutil from 'gulp-util'
import requireDir from 'require-dir'
import gls from 'gulp-live-server'

requireDir('./tasks')

var server = gls.static('public', 3000)

function serve() {
  server.start()

  gulp.watch(['public/index.html'], (file) => {
    server.notify.apply(server, [file])
  })
  gulp.watch(['public/app/app.html', 'public/app/app.css'], ['disply','styles'])
}

gulp.task('serve', serve)

gulp.task('default', ['display','styles','serve'])
