'use strict';

module.exports = function(app) {
  app.use(function*(next) {
    yield next;
    if (404 != this.status) {
      return;
    }
    this.redirect('/404');
  })
}
