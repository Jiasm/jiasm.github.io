'use strict';

module.exports = function(router, conf) {
  router.get('/', function*(next) {
    this.cookies
      .set('BDTOKEN', '', {
        maxAge: -1,
      });
    this.st = 60001;
    return;
  });
}
