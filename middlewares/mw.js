'use strict';

let bodyParser = require('koa-body-parser');
let serve = require('koa-static');
let jsonp = require('koa-safe-jsonp');
let auth = require('./auth.js');
let re = require('./redirect.js');

module.exports = function(app) {
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
  app.use(serve(process.cwd() + '/public'));

  // auth check
  auth(app);

  // error handler
  re(app);

  // Data interface
  jsonp(app);
}
