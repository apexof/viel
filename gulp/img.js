const gulp = require("gulp");

const { lastRun, dest, src, task, parallel, series } = gulp;
const $ = require("gulp-load-plugins")();
const Mozjpeg = require("imagemin-mozjpeg");
const Gifsicle = require("imagemin-gifsicle");
const pngquant = require("imagemin-pngquant");
const svgo = require("imagemin-svgo");

task("minify", () => src("./src/**/*.{png,jpg,svg,gif}", { since: lastRun("minify") })
    .pipe($.rename(path => path.dirname = ""))
    .pipe($.newer("./build/img"))
    .pipe($.imagemin({
        plugins: [
            pngquant({ quality: 85 }),
            svgo({ convertColors: true }),
            Gifsicle(),
            Mozjpeg({
                progressive: true,
                quality: 85,
                sample: ["2x1"]
            })]
    }))
    .pipe($.debug({ title: "minify" }))
    .pipe(dest("./build/img")));

task("sqip", () => src("./build/img/*.{png,jpg}", { since: lastRun("sqip") })
    .pipe($.rename(path => path.dirname = ""))
    .pipe($.newer({
        dest: "./build/img/previews",
        ext: ".svg"
    }))
    .pipe($.sqip())
    .pipe($.debug({ title: "sqip" }))
    .pipe(dest("./build/img/previews")));

task("img", series("minify", "sqip"));
