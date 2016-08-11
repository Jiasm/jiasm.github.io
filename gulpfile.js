/**
 * 	1. gulp         默认任务 是最基础的一个任务 执行webpack打包 并生成对应的目录结构（如果是第一次执行的话）
 *  2. gulp watch   监听资源的变化 如果资源发生变化 会调用默认任务
 */

'use strict'

var gulp = require('gulp')

var sass = require('gulp-sass')    // 添加转换 sass -> css
var del = require('del') // 删除img文件夹所用
var autoprefixer = require('gulp-autoprefixer')
var webpack = require('gulp-webpack')
var named = require('vinyl-named')
var config = require('./webpack.config.js')
var vinylPaths = require('vinyl-paths')
var runSequence = require('gulp-run-sequence')

/**
 * 下边是react相关的gulp任务
 */

const jsFilePath = ['./src/js/*.js']
const cssFilePath = ['./src/components/**/*.scss']

const watchPath = ['./src/**/*.js', './src/**/*.scss']

const jsOutput = './resource/js'
const cssOutput = './src/components/'

gulp.task('clean', () =>
  gulp.run(['clean-css'])
)

gulp.task('build-js', () =>
  gulp.src(jsFilePath)
    .pipe(named())
    .pipe(webpack(config))
    .pipe(gulp.dest(jsOutput))
)

gulp.task('build-scss', () =>
  gulp.src(cssFilePath)
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 40 versions'],  // Android >= 4.0
      cascade: false
    }))
    .pipe(gulp.dest(cssOutput))
)

gulp.task('clean-css', () =>
  gulp.src(`${cssOutput}/**/*.css`)
    .pipe(vinylPaths(del))
)

gulp.task('watch', () => {
  gulp.watch(watchPath, ['default'])
})

gulp.task('default', () =>
  runSequence('build-scss', 'build-js', 'clean')
)
