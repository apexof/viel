const gulp = require("gulp");
const path = require("path");
const del = require("del");
const bSync = require("browser-sync");
const $ = require("gulp-load-plugins")();

const { src, task, parallel, series, watch } = gulp;
require("./z-gulp/static");
require("./z-gulp/img");
require("./z-gulp/sass");
require("./z-gulp/js");

task("serve", () => {
    bSync({
        server: "./build",
        open: false
        // tunnel: true,
    });
    watch("./build/**/*.*").on("change", bSync.reload);
});

task("watch", () => {
    watch("./src/**/*.scss", series("sass"));
    watch("./src/**/*.html", series("html", "sass"));
    watch("./src/**/*.js", series("js"))
        .on("unlink", (filepath) => {
            $.remember.forget("js", path.resolve(filepath));
            delete $.cached.caches.js[path.resolve(filepath)];
        });
    watch("./static/**/*", series("static"));
    watch("./src/**/*.{png,gif,jpg,svg}", series("minify"))
        .on("unlink", (filepath) => {
            const destFilePath = path.resolve("./build/img", path.basename(filepath));
            const destPreviewPath = path.resolve("./build/img/previews", path.parse(filepath).name + ".svg");
            del.sync(destPreviewPath);
            del.sync(destFilePath);
        });
    watch("./build/img/*.{png,jpg}", series("sqip"));
});

task("gh-pages", () => src("./build/**/*").pipe($.ghPages()));

task("clean", () => del("build/**/*"));

task("build", series("html", "js", "sass", "static", "img"));

task("default", series("build", parallel("watch", "serve")));
