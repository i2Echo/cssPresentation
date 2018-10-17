var gulp = require('gulp')
var sass = require('gulp-sass')
var acss = require('gulp-atomizer');

gulp.task('acss', function() {
  return gulp.src('./acss.html')
    .pipe(acss())
    .pipe(gulp.dest('dist'));
});

gulp.task('sass', function() {
  gulp.src('./style/**/*.scss')
      .pipe(sass()).on('error', function(err){
        console.error('Error', err.message)
      })
      .pipe(gulp.dest('./dist'))
})

gulp.task('watch', function() {
  gulp.watch('style/**/*.scss', ['sass'])
})

gulp.task('default', ['sass', 'watch'])
