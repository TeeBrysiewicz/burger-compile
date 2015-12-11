import gulp from 'gulp'
import minify from 'gulp-minify-html'
import specialEscape from '../utils/special-escape'

let display = () => {
  return gulp.src('public/app/app.html')
    .pipe(minify())
    .pipe(gulp.dest('bin'))
    .pipe(specialEscape)
    .pipe(gulp.dest('dist'))
}

gulp.task('display', display)
