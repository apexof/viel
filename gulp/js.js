const gulp = require("gulp");
const $ = require("gulp-load-plugins")();

const { dest, src, task } = gulp;


task("js", () => src("./src/**/*.js")
    .pipe($.cached("js"))
    // .pipe($.debug({ title: 'js' }))
    // .pipe($.sourcemaps.init())
    .pipe($.babel({ presets: ["@babel/env"] }))
    // .pipe($.sourcemaps.write())
    .pipe($.uglify())
    .pipe($.remember("js"))
    .pipe($.concat("script.js"))
    .pipe(dest("./build")));
