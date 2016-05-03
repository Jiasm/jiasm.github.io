'use strict';

module.exports = function(router, conf) {
  router.get('/', function*() {
    this.cookies
      .set('BD_UID', '', {
        maxAge: -1,
      });
    this.redirect('/login');
  });
}
