const gulp = require("gulp");
const $ = require("gulp-load-plugins")();

const { src, task, dest } = gulp;


task("static", () => src("./static/**/*")
    .pipe($.newer("./build/static"))
    .pipe(dest("./build/static")));
