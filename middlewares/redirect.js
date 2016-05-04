'use strict';

module.exports = function(app) {
  app.use(function*(next) {
    yield next;
    let st = this.st;

    if (st === 404) {
      this.redirect('/404');
    } else if (st === 60001) {
      this.redirect('/login');
    } else if (st === 60002) {
      this.redirect('/nopermission');
    }
    return;
  })
}
