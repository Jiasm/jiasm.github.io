'use strict';

let render = require('../libs/views.js');

module.exports = function(router, conf) {
  let navmaping = require('../conf/navmaping.js')();
  router.get('/', function*() {
    let path = this.params.path;
    let html = yield render('error', {
      title: '出错啦-' + conf.productName,
      type: '404',
      text: '偶买噶，很抱歉，页面没有找到',
    });
    this.body = html;
  });
}
