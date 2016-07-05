'use strict';

let path = require('path');
let compose = require('koa-compose');
let fs = require('fs');
let conf = require('../conf/global.js');
let Router = require('koa-router');
let routers = [];

function files() {
  let name = 'routes'
  let dirname = path.dirname(process.mainModule.filename);
  let appPath = path.join(dirname, name);
  if (fs.existsSync(appPath)) {
    let dirs = fs.readdirSync(appPath);
    let apps = {};
    dirs.map(function(value) {
      value = value.replace(/(\.js|\.json)$/, '');
      let router = new Router({prefix: '/' + value});

      if (value.indexOf('.') != 0) {
        apps[value] = path.join(dirname, name, value);
        let route = require(apps[value]);
        if (typeof route == 'function') {
          route(router, conf)
        }
      }
      routers.push(router.routes());
    });

    // 增加一个默认的router 因为有些貌似不走中间件 直接not found了。。。
    let indexRouter = new Router({prefix: '/'});
    indexRouter.get('/', function* () {
      this.redirect('/index');
    });

    routers.push(indexRouter.routes());

    return compose(routers);
  } else {
    return [];
  }
}

module.exports = files;