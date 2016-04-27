'use strict';

module.exports = function(router, conf) {
  router.get('/', function*() {
    this.cookies.set('BDNAME', '', {
      maxAge: -1,
    });
    this.redirect('/login');
  });
}
