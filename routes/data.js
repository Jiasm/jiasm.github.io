'use strict';

let dataLibs = require('../libs/data.js');
let setStrTransformHump = require('../tools/tools.js').setStrTransformHump;

module.exports = function(router, conf) {
  router.get('/:path', function*() {
    let path = this.params.path;
    let action = this.query.action || '';
    let processName = setStrTransformHump(action);
    let data = null;
    let msg = '';
    let code = 200;

    try {
      if (dataLibs[path][processName]) {
        data = yield dataLibs[path][processName](this.query);
      } else {
        code = 500;
        msg = 'action is not defined';
      }
      this.jsonp = {
        code: code,
        msg: msg,
        data: data,
        process_name: processName,
      };
    } catch (err) {
      this.jsonp = {
        code: 500,
        msg: 'err_msg: ' + err.message + ' || err_name: ' + err.name + ' || err_stack: ' + err.stack,
      };
    }
  });
}
