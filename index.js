/**
 *
 */

'use strict';

'use strict';

let koa = require('koa');
let app = koa();
let serve = require('koa-static');
let bodyParser = require('koa-body-parser');
let jsonp = require('koa-safe-jsonp');
var router = require('koa-router')();
let files = require('./libs/autoload.js').files;
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

// Data interface
jsonp(app);

app.listen(conf.port);

files('routes', router);
app.use(router.routes());

process.on('uncaughtException', function(err) {
  console.log(err);
});
