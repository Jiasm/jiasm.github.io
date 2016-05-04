'use strict';

let ak47 = require('../libs/mysql.js')('ak47');
let q = require('../tools/query.js');

function* getAuthority (uid) {
  if (!uid) return null;
  let sql = `SELECT authority as rule from dt_admin WHERE uid = ${uid}`;

  return yield handleResult(sql);
}

function* handleResult(sql) {
  let authority = yield q(ak47, sql);
  return authority[0];
}

module.exports = getAuthority;
