'use strict';

let userRedis = require('./user_redis.js');
let q = require('../tools/query.js');
let ak47 = require('../libs/mysql.js')('ak47');

module.exports = function*(userId) {
  let navmaping = require('../conf/navmaping.js')();
  let adminInfo = yield q(ak47, `SELECT * FROM dt_admin WHERE uid=${userId}`);

  let userInfo = yield userRedis.hgetall('u:' + userId).then(function(user) {
    return {
      uid: userId,
      name: user.name || '',
      avatar: user.avatar || 'https://dn-web-blued-cn.qbox.me/userfiles/006/701/811/9669!Head.jpg',
      identity: (adminInfo[0].is_super === 1) ? '管理员' : '观察者',
      navmaping: navmaping,
    }
  });
  return userInfo;
}
