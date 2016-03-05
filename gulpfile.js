"use strict";
console.log("begin");
let gulp		= require("gulp"),
	uglify 		= require("gulp-uglify"),
	cssmin 		= require("gulp-cssmin"),
	rename 		= require("gulp-rename"),
	concat		= require("gulp-concat");

gulp.task("default", () => {
	gulp.start("js");
	gulp.start("css");
	console.log("success");
})

gulp.task("js", () => gulp.
	src(["js/jquery.js",
		"js/require.js",
		"js/prism.js",
		"js/index.js"]).
	pipe(concat("main.js")).
	pipe(gulp.dest("js/")).
	pipe(uglify()).
	pipe(rename({
		suffix: ".min"
	})).
	pipe(gulp.dest("js/"))
);
gulp.task("css", () =>  gulp.
	src(["resource/css/reset.css", 
		"resource/css/base.css", 
		"resource/css/beta2.css", 
		"resource/css/prism.css"]).
	pipe(concat("main.css")).
	pipe(gulp.dest("resource/css/")).
	pipe(cssmin()).
	pipe(rename({
		suffix: ".min"
	})).
	pipe(gulp.dest("resource/css/"))
)