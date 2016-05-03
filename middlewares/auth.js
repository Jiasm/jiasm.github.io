'use strict';

let q = require('../tools/query.js');
let ak47 = require('../libs/mysql.js')('ak47');
let hashids = require('../libs/hashids.js');

let reLogin = () => {
  this.status = 60001;
}
let rePremission = () => {
  this.status = 60002;
}
let re404 = () => {
  this.status = 404;
}

module.exports = function(app) {
  app.use(function*(next) {
    let url = this.request.url;
    let fillters = url.search(/^\/(login|data|nopermission|404)/);
    let account = this.cookies.get('BDNAME');

    if (fillters === -1) {
      // 过滤出登录相关的url
      if (!account) {
        reLogin(); // 如没有登录
      } else {
        // 如果登录则查询该账号的对应权限
        let uid = hashids.decode(account)[0];
        if (uid) {
          let adminInfo = yield q(ak47, `SELECT * FROM dt_admin WHERE uid=${uid} and is_locked=0`);
          if (adminInfo.length) {
            let is_super = adminInfo[0].is_super;
            let is_locked = adminInfo[0].is_locked;
            let authority = adminInfo[0].authority;

            if (is_super === 1) {

            } else {

            }
          } else {
            rePremission(); // 如无访问权限或被锁定
          }
        } else {
          re404(); // 如账号不存在
        }
      }
    } else {
    }
    yield next;
  });
}
