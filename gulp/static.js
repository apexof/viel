const gulp = require("gulp");
const $ = require("gulp-load-plugins")();

gulp.task("static", () => gulp.src("./static/**/*")
    .pipe($.newer("./build/static"))
    .pipe(gulp.dest("./build/static")));
