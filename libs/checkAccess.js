'use strict';

let hashids = require('../libs/hashids');
let getUser = require('../libs/getUserInfo.js');

function* checkAccess (me, callback) {
  let account = me.cookies.get('BDTOKEN');
  // 没有获取到uid
  if (!account || !hashids.decode(account)[0]) {

    me.body = {
      err: '请刷新后重试'
    }
    // 跳转无权限页面
    me.redirect('/nopermission');

  } else {

    let uid = hashids.decode(account)[0];
    let user = yield getUser(uid);
    // 没有查询到对应的用户 或者该用户是观察者
    if (!user || user.is_super === 0) {

      me.body = {
        err: '无此权限'
      }
      // 跳转无权限页面
      me.redirect('/nopermission');

    } else {

      // 查有此人 且为管理员 执行传入的generator
      me.body = yield callback(me);
    }
  }
}

module.exports = checkAccess;
