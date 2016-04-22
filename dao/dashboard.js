'use strict';

let util = require('util');
let ak47 = require('../libs/mysql.js')('ak47');

function* getActiveAndReg(query) {
  let stardate = Number(query.stardate) || '';
  let enddate = Number(query.enddate) || '';
  let res = {};
  let sql = util.format('SELECT %s FROM %s %s',
    'date,sum(reg) AS reg,sum(active) AS active',
    'users_count',
    'WHERE city_settled!=\'1_999_000000\' AND date>=' + stardate + ' AND date<=' + enddate + ' group by date');

  res.monthly = yield ak47.query(sql).then(function(result) {
    return result[0];
  });
  return res;
}

module.exports = {
  getActiveAndReg: getActiveAndReg,
}
