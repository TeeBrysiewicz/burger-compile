import gulp from 'gulp'
import minify from 'gulp-minify-css'
import specialEscape from '../utils/special-escape'

let styles = () => {
  return gulp.src('public/app/app.css')
    .pipe(minify())
    .pipe(gulp.dest('bin'))
    .pipe(specialEscape)
    .pipe(gulp.dest('dist'))
}

gulp.task('styles', styles)
