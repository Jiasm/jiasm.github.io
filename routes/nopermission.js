'use strict';

let render = require('../libs/views.js');

module.exports = function(router, conf) {
  var navmaping = require('../conf/navmaping.js')();
  router.get('/', function*() {
    var path = this.params.path;
    let html = yield render('nopermission', {
      title: '无访问权限',
      name: '',
    });
    this.body = html;
  });
}
