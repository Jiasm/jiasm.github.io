'use strict';

let koa = require('koa');
let app = koa();
let serve = require('koa-static');
let bodyParser = require('koa-body-parser');
let jsonp = require('koa-safe-jsonp');

let router = require('./libs/loadRouters.js');
let conf = require('./conf/global.js');
let render = require('./libs/views.js');
let hashids = require('./libs/hashids.js');
let q = require('./tools/query.js');
let ak47 = require('./libs/mysql.js')('ak47');

// Parse request body into ctx.request.body
app.use(bodyParser());

// out log
app.use(function*(next) {
  let start = new Date;
  yield next;
  let ms = new Date - start;
// console.log('%s %s - %s', this.method, this.url, ms);
});

// static file
app.use(serve(__dirname + '/public'));

app.use(function*(next) {
  let url = this.request.url;
  let fillters = url.search(/^\/(login|data)/);
  let account = this.cookies.get('BDNAME');
  let re = () => {
    this.redirect('/login');
  }

  if (fillters === -1) {
    // 过滤出登录相关的url
    if (!account) {
      // 如果没有登录，则跳转到登陆页
      re();
    } else {
      // 如果登录则查询该账号的对应权限
      let uid = hashids.decode(account)[0];
      if (uid) {
        let adminInfo = yield q(ak47, 'SELECT * FROM dt_admin WHERE uid=' + uid);
        if (adminInfo.length) {
          let is_super = adminInfo[0].is_super;
          let is_locked = adminInfo[0].is_locked;
          let authority = adminInfo[0].authority;
          if (is_locked === 1) {
            re();
          }
          if (is_super === 1) {

          } else {

          }
        } else {
          re();
        }
      // var is_locked = adminInfo[0]
      } else {
        re();
      }
    }
  }
  yield next;
});

// error handler
// app.use(function *(next) {
//   try {
//     yield next;
//   } catch (err) {
//     this.status = err.status || 500;
//     let code = err.code || 500;
//     let token = err.token || '';
//     let data = [];
//     let message = err.message;
//     if (token) {
//       data = [{
//         token: token
//       }];
//     }
//     if (this.status == 500) {
//       code = 500;
//     }
//     if (code == 500) {
//       message = '';
//     }
//     this.body = format({
//       data: data,
//       message: message,
//       code: code
//     });
//     error({
//       headers: this.request.headers,
//       body: this.request.body,
//       error: err,
//       status: this.status,
//       stack: err.stack
//     });
//   }
// });

// Data interface
jsonp(app);

app.listen(conf.port);

app.use(router('routes'));

process.on('uncaughtException', function(err) {
  console.log(err);
});
