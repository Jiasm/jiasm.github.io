'use strict';

let koa = require('koa');
let app = koa();

let router = require('./libs/loadRouters.js');
let conf = require('./conf/global.js');

require('./middlewares/mw.js')(app);

app.listen(conf.port);
app.use(router('routes'));

process.on('uncaughtException', function(err) {
  console.log(err);
});
