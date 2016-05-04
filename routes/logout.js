'use strict';

module.exports = function(router, conf) {
  router.get('/', function*() {
    this.cookies
      .set('BDTOKEN', '', {
        maxAge: -1,
      });
    this.redirect('/login');
  });
}
