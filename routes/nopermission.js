'use strict';

let render = require('../libs/views.js');
let q = require('../tools/query.js');
let ak47 = require('../libs/mysql.js')('ak47');
let getUser = require('../libs/getUserInfo.js');

module.exports = function(router, conf) {
  router.get('/', function*() {
    let path = this.params.path;
    let adminUidList = yield q(ak47, `SELECT * FROM dt_admin WHERE is_super=1 and is_locked=0`);
    let adminUserList = yield adminUidList.map(function*(item) {
      let userInfo = yield getUser(item.uid);
      return userInfo.name;
    });

    let html = yield render('error', {
      title: '无权限-' + conf.productName,
      type: '无访问权限',
      text: '偶买噶，很抱歉，您没有访问的权限。<br/>权限申请需找管理员们添加： ' + adminUserList.join(', '),
    });
    this.body = html;
  });
}
