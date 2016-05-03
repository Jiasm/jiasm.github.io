'use strict';

let userRedis = require('./user_redis.js');

module.exports = function*(userId) {
  let userInfo = yield userRedis.hgetall('u:' + userId).then(function(user) {
    return {uid: userId,name: user.name || '',}
  });
  return userInfo;
}
