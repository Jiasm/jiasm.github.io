'use strict';

let userRedis = require('./user_redis.js');
let q = require('../tools/query.js');
let ak47 = require('../libs/mysql.js')('ak47');

module.exports = function*(userId) {
  let adminInfo = yield q(ak47, `SELECT * FROM dt_admin WHERE uid=${userId}`);
  let is_super = (adminInfo.length) ? adminInfo[0].is_super : 0;
  // 如果是管理员 直接传入null 如果不是管理员 判断是否有权限 如果没有权限
  if (is_super === 0 && (!adminInfo.authority || adminInfo.authority.length === 0)) {
    return 'nopermission';
  }
  let navmapping = require('../conf/navmapping.js')(is_super ? null : adminInfo.authority);

  let userInfo = yield userRedis.hgetall('u:' + userId).then(function(user) {
    return {
      uid: userId,
      name: user.name || '',
      avatar: user.avatar || 'https://dn-web-blued-cn.qbox.me/userfiles/006/701/811/9669!Head.jpg',
      identity: (is_super) ? '管理员' : '观察者',
      navmapping: navmapping,
    }
  });
  return userInfo;
}
