import gulp from 'gulp'
import template from 'gulp-template'
import fs from 'fs'

let build = () => {
  let styles = fs.readFileSync('bin/app.css', 'utf8')
  let display = fs.readFileSync('bin/app.html', 'utf8')
  return gulp.src('public/app/index.html')
    .pipe(template({
      styles: `${styles}`,
      display: `${display}`
    }))
    .pipe(gulp.dest('public'))
}

gulp.task('build', build)
