const  gulp = require('gulp'),
       concat = require('gulp-concat'),
       prefix = require('gulp-autoprefixer'),
       sass = require('gulp-sass')(require('sass')),
       sourcemaps = require('gulp-sourcemaps'),
       uglify = require('gulp-uglify'),
       notify = require("gulp-notify");

gulp.task('rating-code-css', function () {
    return gulp.src('project/sass/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefix({cascade: false}))
        .pipe(concat('style.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/assets/style'))
        .pipe(notify('QR-code-css tag is done'))
});


gulp.task('rating-code-js', function () {
    return gulp.src('project/js/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(notify('QR-code-js tag is done'))
});

//watch task
gulp.task('watch', function () {
    gulp.watch('project/sass/**/*.scss', gulp.series('rating-code-css'));
    gulp.watch('project/js/*.js', gulp.series('rating-code-js'));
})
gulp.task('default', gulp.parallel('watch'));
