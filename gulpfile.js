const gulp = require('gulp');
const path = require('path');
const del = require('del');
const $ = require('gulp-load-plugins')();
const { src, task, parallel, series, watch } = gulp;
require('./gulp/static');
require('./gulp/img');
require('./gulp/sass');
require('./gulp/js');

task('watch', () => {
    watch('./src/**/*.scss', series('sass'));
    watch('./src/**/*.html', series('html', 'sass'));
    watch('./src/**/*.js', series('js'))
        .on('unlink', function (filepath) {
            $.remember.forget('js', path.resolve(filepath));
            delete $.cached.caches.js[path.resolve(filepath)];
        });
    watch('./static/**/*', series('static'));
    watch('./src/**/*.{png,gif,jpg,svg}', series('minify'))
        .on('unlink', function (filepath) {
            var destFilePath = path.resolve('./build/img', path.basename(filepath));
            var destPreviewPath = path.resolve('./build/img/previews', path.parse(filepath).name + '.svg');
            del.sync(destPreviewPath);
            del.sync(destFilePath);
        });
    watch('./build/img/*.{png,jpg}', series('sqip'));
});

task('gh-pages', () => src('./build/**/*').pipe($.ghPages()));

task('clean', () => del('build/**/*'));

// task('build', series('html', 'js', 'sass', 'static', 'img'));
task('build', series('sass'));

task('default', series('build', 'watch'));
