'use strict';

let render = require('../libs/views.js');

module.exports = function(router, conf) {
  var navmaping = require('../conf/navmaping.js')();
  router.get('/retention/:path', function*() {
    var path = this.params.path;
    let html = yield render('retention', {
      title: conf.productName,
      navmaping: navmaping
    });
    this.body = html;
  });
}
