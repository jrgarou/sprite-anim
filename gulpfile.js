var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint')
;

gulp.task('js', function() {
  return gulp.src(['./src/sprite-anim.js'])
  .pipe(jshint())
  .pipe(jshint.reporter('default'))
  .pipe(rename('sprite-anim-min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./src/'))
  ;
});

gulp.task('default', ['js']);
