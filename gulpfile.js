var jest = require('gulp-jest').default;
var gulp = require('gulp'); 

gulp.task('jest', function () {
  return gulp.src('__tests__').pipe(jest({
    "preprocessorIgnorePatterns": [
      "./dist/", "./node_modules/"
    ],
    "automock": false,
  }));
});