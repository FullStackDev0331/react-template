var gulp = require("gulp");
var sass = require("gulp-sass");
var uglify = require("gulp-uglify");

gulp.task("default", ['sass','js','slds-copy'], function() {
  gulp.watch(["./public/javascripts/**/*.js","!./public/javascripts/min/**/*.js"],["js"]);
  gulp.watch("./public/stylesheets/sass/**/*.scss",["sass"]);
});

gulp.task("sass", function() {
  gulp.src("./public/stylesheets/sass/**/*scss")
      .pipe(sass())
      .pipe(gulp.dest("./public/stylesheets/css"));
});

gulp.task("js", function() {
  gulp.src(["./public/javascripts/**/*.js","!./public/javascripts/min/**/*.js"])
      .pipe(uglify())
      .pipe(gulp.dest("./public/javascripts/min"));
});

gulp.task("slds-copy", function() {
  return gulp.src("./node_modules/@salesforce-ux/design-system/assets/**/*")
              .pipe(gulp.dest( './public/vendor/SLDS/assets/' ) );
});