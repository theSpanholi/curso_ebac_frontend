const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function comprimeSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'))
}

function comprimeJavaScript( ) {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'));
}

function comprimeImagens() {
    return gulp.src('./source/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/images'));
}

exports.default = function() {
    gulp.watch('./source/styles/*.scss', {igonoreInitial: false}, gulp.series(comprimeSass));
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false }, gulp.series(comprimeJavaScript));
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(comprimeImagens));
}
