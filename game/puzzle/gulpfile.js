'use strict';
var gulp 	= require('gulp'),
	uglify 	= require('gulp-uglify'),
	concat 	= require('gulp-concat'),
	cssmin 	= require('gulp-cssmin'),
	rename 	= require('gulp-rename');
gulp.task("js", () => 
	gulp.src(["./resource/js/jquery.js", 
		"./resource/js/fast-click.js", 
		"./resource/js/puzzle.js", 
		"./resource/js/swiper.js", 
		"./resource/js/index.js"]).
	pipe(concat({
		path: "all.js"
	})).
	pipe(gulp.dest("./resource/js/")).
	pipe(uglify()).
	pipe(rename({
		suffix: ".min"
	})).
	pipe(gulp.dest("./resource/js/"))
)
gulp.task("css", () => 
	gulp.src("./resource/css/*.css").
	pipe(concat({
		path: "all.css"
	})).
	pipe(gulp.dest("./resource/css/")).
	pipe(cssmin()).
	pipe(rename({
		suffix: ".min"
	})).
	pipe(gulp.dest("./resource/css/"))
)