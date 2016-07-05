'use strict';

let initTpl = require('../tools/initTplParams.js');

module.exports = function(router, conf) {
  router.get('/:path', function*() {
    let html = '';
    if (this.params.path === 'report') {
      html = yield initTpl(this, 'report', conf.productName);
    } else {
      html = yield initTpl(this, 'advert', conf.productName);
    }
    this.body = html;
  });
}
