'use strict';

let render = require('../libs/views.js');

module.exports = function(router, conf) {
  var navmaping = require('../conf/navmaping.js')();
  router.get('/', function*() {
    var path = this.params.path;
    let html = yield render('404', {
      title: '出错啦-' + conf.productName,
    });
    this.body = html;
  });
}
