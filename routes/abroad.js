'use strict';

let render = require('../libs/views.js');

module.exports = function(router, conf) {
  let navmaping = require('../conf/navmaping.js')();
  router.get('/:path', function*() {
    let path = this.params.path;
    let html = yield render('abroad', {
      title: conf.productName,
      navmaping: navmaping
    });
    this.body = html;
  });
}
