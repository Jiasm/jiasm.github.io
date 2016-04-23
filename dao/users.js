'use strict';

let util = require('util');
let moment = require('moment');
let ak47 = require('../libs/mysql.js')('ak47');
let findcity = require('../tools/findcity.js');
let q = require('../tools/query.js');

function* getDailyActive(query) {
  let res = [];
  let obj = {};
  let date = moment(query.date).format('YYYYMMDD');
  let stats = query.stats === 'date' ? 'date' : 'date,' + query.stats;
  let groupbyStr = (stats === 'date') ? 'GROUP BY date' : 'GROUP BY date,' + stats;
  let orderbyStr = (stats === 'date') ? 'ORDER BY date ASC' : 'ORDER BY active DESC';

  let sql = util.format('SELECT %s FROM %s %s %s %s',
    stats + ', SUM(active) AS active',
    'users_count',
    'WHERE city_settled!=\'1_999_000000\' AND date>=' + date + ' AND date<=' + moment(date).add(6, 'days').format('YYYYMMDD'),
    groupbyStr,
    orderbyStr);

  let list = yield q(ak47, sql);
  for (let i = 0; i < list.length; i++) {
    if (obj[i]) {

    }
  }

  return list
}

function* getDailyReg(query) {
  let date = moment(query.date).format('YYYYMMDD');
  let stats = query.stats || 'date';
  let orderbyStr = (stats === 'date') ? 'ORDER BY date ASC' : 'ORDER BY reg DESC';

  let sql = util.format('SELECT %s FROM %s %s %s %s',
    stats + ', SUM(reg) AS reg',
    'users_count',
    'WHERE city_settled!=\'1_999_000000\' AND date>=' + date + ' AND date<=' + moment(date).add(6, 'days').format('YYYYMMDD'),
    'GROUP BY ' + stats,
    orderbyStr);

  return yield q(ak47, sql);
}

function* handleResult(sql, regSql, stats) {
  let retention = yield q(ak47, sql);
  let reg = yield q(ak47, regSql);

  if (stats === 'city_settled') {
    retention.map(function(item) {
      item.name = findcity(item.name);
    });
  }
  return {
    reg: reg,
    retention: retention,
  }
}

module.exports = {
  getDailyActive: getDailyActive,
  getDailyReg: getDailyReg,
}
