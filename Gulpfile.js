const gulp = require('gulp');
const sass = require('gulp-sass');

function styles(done) {
    gulp.src([
        './src/sass/theme-grey.scss',
        './src/sass/theme-yellow.scss'
    ])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
    done();
}

exports.styles = styles;

exports.default = gulp.series(styles);
