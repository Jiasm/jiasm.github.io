/**
 * biaoqing
 * @nieweidong
 */

'use strict';

let _pa = 'dt';
let bui = {
  js: _pa + '-js',
  css: _pa + '-css',
  html: _pa + '-html',
  pjs: _pa + '-publish-js',
  pcss: _pa + '-publish-css',
  phtml: _pa + '-publish-html',
  watch: _pa + '-watch',
  pub: _pa + '-publish',
};
let publicPath = '../public';
let viewPath = '../views';
let jsPath = './js/*.js';
let cssPath = './css/*.scss';
let tplPath = './tpl/page/*.html';
let otherHtmlPath = './tpl/**/*.html';

let qntoken = require('../conf/qiniu.js');
let gulp = require('gulp');
let autoprefixer = require('gulp-autoprefixer');
let concat = require('gulp-concat');
let shrink = require('gulp-cssshrink');
let fileinclude = require('gulp-file-include');
let flatten = require('gulp-flatten');
let sass = require('gulp-sass');
let uglify = require('gulp-uglify');
let runS = require('run-sequence');
let qn = require('gulp-qn');
// MD5戳
let rev = require('gulp-rev');
let revCollector = require("gulp-rev-collector");

let qiniu = {
  accessKey: qntoken.accessKey,
  secretKey: qntoken.secretKey,
  bucket: qntoken.bucket,
  domain: 'https://dn-web-blued-cn.qbox.me'
};

// dev
gulp.task(bui['js'], function() {
  return gulp.src(jsPath)
    .pipe(flatten())
    .pipe(gulp.dest(publicPath + '/js'));
});
gulp.task(bui['css'], function() {
  return gulp.src(cssPath)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(flatten())
    // .pipe(concat(_pa + '.css'))
    .pipe(gulp.dest(publicPath + '/css'));
});
gulp.task(bui['html'], function() {
  return gulp.src(tplPath)
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest(viewPath));
});

// publish
gulp.task(bui['pjs'], function() {
  return gulp.src(jsPath)
    .pipe(uglify())
    .pipe(flatten())
    .pipe(gulp.dest(publicPath + '/js'))
    .pipe(rev())
    .pipe(gulp.dest(publicPath + '/js'))
    .pipe(qn({
      qiniu: qiniu,
      prefix: 'web/static/' + _pa
    }))
    .pipe(rev.manifest())
    .pipe(gulp.dest(publicPath + '/rev/js'));
});
gulp.task(bui['pcss'], function() {
  return gulp.src(cssPath)
    .pipe(concat(_pa + '.css'))
    .pipe(shrink())
    .pipe(gulp.dest(publicPath + '/css'))
    .pipe(rev())
    .pipe(gulp.dest(publicPath + '/css'))
    .pipe(qn({
      qiniu: qiniu,
      prefix: 'web/static/' + _pa
    }))
    .pipe(rev.manifest())
    .pipe(gulp.dest(publicPath + '/rev/css'));
});
gulp.task(bui['phtml'], function() {
  return gulp.src([publicPath + '/rev/**/*.json', tplPath])
    .pipe(revCollector({
      dirReplacements: {
        // 替换html内的路径
        '/liverank/js/': '',
        '/liverank/css/': ''
      }
    }))
    .pipe(gulp.dest(viewPath));
});

gulp.task(bui['watch'], function() {
  let _conf = [cssPath, jsPath, tplPath, otherHtmlPath];
  runS(bui['css'], bui['js'], bui['html']);
  gulp.watch(_conf, [bui['css'], bui['js'], bui['html']]);
});

// gulp.task(bui['pub'], function() {
//   runS(
//     [bui['pjs']],
//     [bui['pcss']],
//     [bui['phtml']]
//   );
// });
