'use strict';

let render = require('../libs/views.js');

module.exports = function(router, conf) {
  router.get('/login', function*() {
    let html = yield render('login', {
      title: conf.productName
    });
    this.body = html;
  });
}