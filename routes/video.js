'use strict';

let render = require('../libs/views.js');

module.exports = function(router, conf) {
  var navmaping = require('../conf/navmaping.js')();
  router.get('/:path', function*() {
    var path = this.params.path;
    let html = yield render('video', {
      title: conf.productName,
      navmaping: navmaping
    });
    this.body = html;
  });
}
