var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");

gulp.task("css", function () {

  return gulp.src("source/sass/style.scss")

  .pipe(sass())

    .pipe(gulp.dest("source/css"));

});
