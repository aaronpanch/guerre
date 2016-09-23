const gulp = require('gulp')
    , sass = require('gulp-sass')
    , browserSync = require('browser-sync').create();

gulp.task('serve', ['styles'], () => {
  browserSync.init({
    port: 9000,
    server: {
      baseDir: './'
    }
  });

  gulp.watch('styles/*.scss', ['styles']);
  gulp.watch('index.html').on('change', browserSync.reload);
});

gulp.task('styles', () => {
  return gulp.src('styles/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
