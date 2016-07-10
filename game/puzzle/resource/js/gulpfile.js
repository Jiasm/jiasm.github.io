"use strict";
var gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename");
gulp.task("default", () =>  gulp.src("fast-click.js").pipe(rename({ suffix: ".min" })).pipe(uglify()).pipe(gulp.dest("./")));
