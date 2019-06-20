// task('png', () =>
//     src('./src/**/*.png', { since: lastRun('png') })
//         .pipe($.newer('./build/img'))
//         .pipe($.rename((path) => path.dirname = ""))
//         .pipe(dest('./dist/img'))
//         .pipe($.imagemin({
//             plugins: [
//                 pngquant({ quality: 85 })
//             ]
//         }))
//         .pipe($.debug({ title: 'png' }))
//         .pipe(dest('./build/img'))
// );

// task('svg', () =>
//     src('./src/**/*.jpg', { since: lastRun('svg') })
//         .pipe($.newer('./build/img'))
//         .pipe($.rename((path) => path.dirname = ""))
//         .pipe(dest('./dist/img'))
//         .pipe($.imagemin([
//             svgo({
//                 convertColors: true,
//             })]))
//         .pipe($.debug({ title: 'svg' }))
//         .pipe(dest('./build/img'))
// );

// task('gif', () =>
//     src('./src/**/*.gif', { since: lastRun('gif') })
//         .pipe($.newer('./build/img'))
//         .pipe($.rename((path) => path.dirname = ""))
//         .pipe(dest('./dist/img'))
//         .pipe($.imagemin([Gifsicle()]))
//         .pipe($.debug({ title: 'gif' }))
//         .pipe(dest('./build/img'))
// );

// task('jpg', () =>
//     src('./src/**/*.jpg', { since: lastRun('sqip') })
//         .pipe($.newer('./build/img'))
//         .pipe($.rename((path) => path.dirname = ""))
//         .pipe(dest('./dist/img'))
//         .pipe($.imagemin([
//             Mozjpeg({
//                 progressive: true,
//                 quality: 85,
//                 sample: ['2x1']
//             })
//         ]))
//         .pipe($.debug({ title: 'jpg' }))
//         .pipe(dest('./build/img'))
// );

// task('img', parallel('jpg', 'gif', 'sqip', 'svg', 'png'));

task('exif', function () {
    //     return src('dist/**/*.jpg', { read: false, since: lastRun('exif') })
    //         .pipe($.newer('./build/img'))
    //         .pipe($.shell([
    //             'exiftool -P -overwrite_original -all= <%=file.path%>'
    //         ]))
    //         .pipe(dest('./build/img'));
});