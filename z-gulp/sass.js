const gulp = require("gulp");
const $ = require("gulp-load-plugins")();

const { dest, src, task } = gulp;

task("html", () => src("./src/index.html")
    .pipe($.fileInclude({
        prefix: "@@",
        basepath: "@file"
    }))
    .pipe($.htmlhint())
    .pipe($.htmlhint.reporter())
    .pipe($.htmlmin({ collapseWhitespace: true }))
    .pipe(dest("./build")));

task("sass", () => src("./src/**/*.scss")
    // .pipe($.sourcemaps.init())
    .pipe($.sass())
    .pipe($.purgecss({
        content: ["./build/index.html"]
        // rejected: true
    }))
    // // .pipe($.sourcemaps.write())
    .pipe($.autoprefixer())
    .pipe($.shorthand())
    .pipe($.concat("style.css"))
    .pipe($.csso())
    .pipe(dest("./build")));
