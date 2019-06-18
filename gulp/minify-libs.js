// gulp.task('libs-css', function () {
//     return gulp.src('./static/libs/**/*.css')
//         // .pipe($.purgecss({
//         //     content: ['./dist/index.html'],
//         //     // rejected: true
//         // }))
//         .pipe($.shorthand())
//         .pipe($.csso())
//         .pipe(gulp.dest('./build/static/libs'))
// });
// gulp.task('libs-js', function () {
//     return gulp.src('./static/libs/**/*.js')
//         .pipe($.uglify())
//         .pipe(gulp.dest('./build/static/libs'))
// });