'use strict';

let q = require('../tools/query.js');
let ak47 = require('../libs/mysql.js')('ak47');
let hashids = require('../libs/hashids.js');

module.exports = function(app) {
  app.use(function*(next) {
    let url = this.request.url;
    let fillters = url.search(/^\/(login|data)/);
    let account = this.cookies.get('BDNAME');
    let re = () => {
      this.redirect('/login');
    }
    if (fillters === -1) {
      // 过滤出登录相关的url
      if (!account) {
        // 如果没有登录，则跳转到登陆页
        re();
      } else {
        // 如果登录则查询该账号的对应权限
        let uid = hashids.decode(account)[0];
        if (uid) {
          let adminInfo = yield q(ak47, `SELECT * FROM dt_admin WHERE uid=${uid}`);
          if (adminInfo.length) {
            let is_super = adminInfo[0].is_super;
            let is_locked = adminInfo[0].is_locked;
            let authority = adminInfo[0].authority;
            if (is_locked === 1) {
              re();
            }
            if (is_super === 1) {

            } else {

            }
          } else {
            re();
          }
        // let is_locked = adminInfo[0]
        } else {
          re();
        }
      }
    }
    yield next;
  });
}
