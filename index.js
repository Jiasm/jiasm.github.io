'use strict';

let koa = require('koa');
let app = koa();
let serve = require('koa-static');
let bodyParser = require('koa-body-parser');
let jsonp = require('koa-safe-jsonp');

let router = require('./libs/loadRouters.js');
let conf = require('./conf/global.js');
let render = require('./libs/views.js');

// Parse request body into ctx.request.body
app.use(bodyParser());

// out log
app.use(function*(next) {
  let start = new Date;
  yield next;
  let ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

// static file
app.use(serve(__dirname + '/public'));

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
