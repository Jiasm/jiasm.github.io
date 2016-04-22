'use strict';

let render = require('../libs/views.js');

module.exports = function(router, conf) {
  router.get('/retention/:path', function*() {
    var path = this.params.path;
    let html = yield render('retention', {
      title: conf.productName
    });
    this.body = html;
  });
}
