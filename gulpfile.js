"use strict";
console.log("begin");
let gulp		= require("gulp"),
	minifycss	= require("gulp-minify-css"),
	concat		= require("gulp-concat");
gulp.task("style", () => gulp
	.src("resource/css/*.css")
	.pipe(concat("main.css"))
	.pipe(minifycss())
	.pipe(gulp.dest("resource/css/online"))
);

gulp.task("default", () => {
	gulp.start("js");
	console.log("success");
})

gulp.task("js", () => gulp
	.src("js/*.js")
	.pipe(concat("concat.js"))
	.pipe(gulp.dest("build"))
);