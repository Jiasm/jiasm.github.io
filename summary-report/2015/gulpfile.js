"use strict";
console.log("begin");
let gulp		= require("gulp"),
	uglify 		= require("gulp-uglify"),
	minifycss	= require("gulp-minify-css"),
	concat		= require("gulp-concat");

gulp.task("default", () => {
	gulp.start("js");
	gulp.start("style");
	console.log("success");
})

gulp.task("js", () => gulp
	.src(["js/feed/jquery.js", "js/feed/react.js", "js/feed/react-dom.js", "js/feed/swiper.js", "js/feed/index.js"])
	.pipe(uglify())
	.pipe(concat("concat.js"))
	.pipe(gulp.dest("build/js"))
);
gulp.task("style", () => gulp
	.src("css/*.css")
	.pipe(concat("main.css"))
	.pipe(minifycss())
	.pipe(gulp.dest("build/css"))
);