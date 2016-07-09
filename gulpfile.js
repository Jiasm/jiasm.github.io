'use strict';
let gulp = require('gulp');
let sass = require('gulp-sass');
let uglify = require('gulp-uglify');
let rename = require('gulp-rename');
let concat = require('gulp-concat');
let cssmin = require('gulp-cssmin');
let babel = require('gulp-babel');

const jsFiles = ['src/js/jquery.js', 'src/js/require.js', 'js/prism.js', 'src/js/*.js'];
const babelFiles = 'src/js/babel/*.js';
const babelPath = 'src/js';
const jsPath = 'resource/js';
const cssFiles = ['src/css/main.scss', 'src/css/*.scss', 'src/css/*.css'];
const cssPath = 'resource/css';

gulp.task('watch', () => gulp.watch(jsFiles.concat(babelFiles, cssFiles), ['js', 'css']));

gulp.task('build-js', () => gulp.
	src(babelFiles).
	pipe(babel({
		presets: ['es2015']
	})).
	pipe(concat("__babel.js")).
	pipe(gulp.dest(babelPath))
)

gulp.task('concat-js', () => gulp.
	src(jsFiles).
	pipe(concat("main.js")).
	pipe(gulp.dest(jsPath)).
	pipe(uglify()).
	pipe(rename({
		suffix: ".min"
	})).
	pipe(gulp.dest(jsPath))
)

gulp.task("js", () => gulp.
	run(['build-js', 'concat-js'])
)

gulp.task('css', () =>
  gulp.src(cssFiles)
		.pipe(concat('main.css'))
    .pipe(sass())
    .pipe(gulp.dest(cssPath))
    .pipe(cssmin())
    .pipe(rename({
      extname: '.min.css'
    }))
  	.pipe(gulp.dest(cssPath))
)

gulp.task('default', ['js', 'css']);
