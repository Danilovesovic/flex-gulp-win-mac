const gulp=require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

function convert(done) {
    gulp.src('./css/*.sass')
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest('./style'))
    done()
}

gulp.task('default',convert);
