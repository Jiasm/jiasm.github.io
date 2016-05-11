'use strict';

module.exports = function(app) {
  app.use(function*(next) {
    yield next;
    let st = this.st;

    if (st === 200) { // 已经登录
      this.redirect('/index');
    } else if (st === 404) { // 没有找到对应的router
      this.redirect('/404');
    } else if (st === 60001) { // 没有登录
      this.redirect('/login');
    } else if (st === 60002) { // 没有权限
      this.redirect('/nopermission');
    }
    return;
  })
}
