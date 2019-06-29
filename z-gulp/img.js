const gulp = require("gulp");

const { lastRun, dest, src, task, parallel, series } = gulp;
const $ = require("gulp-load-plugins")();
const Mozjpeg = require("imagemin-mozjpeg");
const Gifsicle = require("imagemin-gifsicle");
const pngquant = require("imagemin-pngquant");
const svgo = require("imagemin-svgo");
const webp = require("imagemin-webp");

task("all-img", () => src("./src/**/*.{png,jpg,svg,gif}", { since: lastRun("all-img") })
    .pipe($.rename({ dirname: "" }))
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
    .pipe($.debug({ title: "all-img" }))
    .pipe(dest("./build/img")));

task("webp", () => src("./src/**/*.{png,jpg}", { since: lastRun("webp") })
    .pipe($.rename({ dirname: "" }))
    .pipe($.newer({
        dest: "./build/img/webp",
        ext: ".webp"
    }))
    .pipe($.imagemin([
        webp({
            quality: 85,
            preset: "photo"
        })]))
    .pipe($.rename({ extname: ".webp" }))
    .pipe($.debug({ title: "webp" }))
    .pipe(dest("./build/img/webp")));


task("sqip", () => src("./src/**/*.{png,jpg}", { since: lastRun("sqip") })
    .pipe($.rename({ dirname: "" }))
    .pipe($.newer({
        dest: "./build/img/previews",
        ext: ".svg"
    }))
    .pipe($.sqip())
    .pipe($.debug({ title: "sqip" }))
    .pipe(dest("./build/img/previews")));

task("img", series("all-img", "webp", "sqip"));
