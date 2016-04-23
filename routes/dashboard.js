'use strict';

let render = require('../libs/views.js');

module.exports = function(router, conf) {
  var navmaping = require('../conf/navmaping.js')();
  router.get('/dashboard/:path', function*() {
    var path = this.params.path;
    let html = yield render('dashboard', {
      title: conf.productName,
      navmaping: navmaping
    });
    this.body = html;
  });
}
