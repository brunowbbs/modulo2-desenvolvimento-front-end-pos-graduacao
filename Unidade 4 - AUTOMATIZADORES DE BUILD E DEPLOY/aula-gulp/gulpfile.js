const gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

sass.compiler = require('node-sass');

gulp.task('sass', compilaSass);

function compilaSass() {
  return gulp.src('src/sass/**/*.scss').pipe(sass()).pipe(gulp.dest('srs/css'));
}
