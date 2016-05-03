'use strict';

let util = require('util');
let moment = require('moment');
let ak47 = require('../libs/mysql.js')('ak47');
let userRedis = require('../libs/user_redis.js');
let findcity = require('../tools/findcity.js');
let q = require('../tools/query.js');

function* getMembers () {
  let sql = `SELECT uid, is_super as isAdmin, authority as rule from dt_admin WHERE is_locked = 0`;

  return yield handleResult(sql);
}

function* handleResult(sql, regSql, stats) {
  let users = yield q(ak47, sql);
  users = yield users.map(function* (item) {
    var info = yield userRedis.hgetall('u:' + item.uid).then(function(user) {
      return {
        name: user.name,
        avatar: user.avatar
      };
    });
    item.info = info;
    return item;
  });
  return users;
}

module.exports = {
  getMembers
}
