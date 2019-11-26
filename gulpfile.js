const gulp = require("gulp"),
  sass = require("gulp-sass"),
  browserSync = require("browser-sync").create(),
  //autoprefixer = require("gulp-autoprefixer"),
  sourcemaps = require("gulp-sourcemaps"),
  gulpCopy = require("gulp-copy"),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssnano = require('cssnano');


function style() {
  //return gulp
  //.src(["node_modules/bootstrap/scss/bootstrap.scss", "src/scss/*.scss"], {
  // sourcemaps: true
  //})
  return gulp
    
    .src("src/scss/**/*.scss", {
      sourcemaps: true
    })

    .pipe(sass().on("error", sass.logError))

    .pipe(postcss([ autoprefixer(), cssnano() ])) // PostCSS plugins

    /*.pipe(
      autoprefixer({
        cascade: false
      })
    )*/

    .pipe(gulp.dest("dist/css"))

    .pipe(browserSync.stream());
}

function copyHtml() {
  return gulp
    .src("src/*.html")
    .pipe(browserSync.stream())
    .pipe(gulp.dest("dist"));
}

function copyImages() {
  return gulp.src("src/img/*.{gif,jpg,png,svg}").pipe(gulp.dest("dist/img"));
}

function js() {
  return gulp
    .src([
      "src/js/*.js"
    ])
    .pipe(concat('main.js'))
    //.pipe(uglify())
    .pipe(browserSync.stream())
    .pipe(gulp.dest("dist/js/"));
}

function watch() {
  browserSync.init({
    server: "./dist"
  });

  gulp.watch("src/scss/**/*.scss", style);
  gulp.watch("src/*.html", copyHtml);
  gulp.watch("src/*.html").on("change", browserSync.reload);
  gulp.watch("src/img/*.{gif,jpg,png,svg}", copyImages);
  gulp.watch("src/js/*.js").on("change", browserSync.reload);
}

exports.style = style;
exports.copyHtml = copyHtml;
exports.copyImages = copyImages;
exports.watch = watch;
exports.default = build;

var build = gulp.parallel(style, copyHtml, js, watch);
gulp.task(build);
gulp.task("default", build);
