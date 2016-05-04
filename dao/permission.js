'use strict';

let util = require('util');
let moment = require('moment');
let ak47 = require('../libs/mysql.js')('ak47');
let userRedis = require('../libs/user_redis.js');
let findcity = require('../tools/findcity.js');
let q = require('../tools/query.js');

function* setAuthority (query) {
  if (!query || !query.uid) return;
  let sql = `UPDATE dt_admin SET authority = '${query.rules}' WHERE uid = ${query.uid}`;
  let result = yield q(ak47, sql);
  return result.affectedRows;
}


module.exports = {
  setAuthority
}
