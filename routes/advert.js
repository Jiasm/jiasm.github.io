'use strict';

let initTpl = require('../tools/initTplParams.js');

module.exports = function(router, conf) {
  router.get('/:path', function*() {
    let html = yield initTpl(this, 'advert', conf.productName);
    this.body = html;
  });
}
