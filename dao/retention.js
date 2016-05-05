'use strict';

let util = require('util');
let moment = require('moment');
let ak47 = require('../libs/mysql.js')('ak47');
let findcity = require('../tools/findcity.js');
let q = require('../tools/query.js');

function* getDaily(query) {
  let date = moment(query.date).format('YYYYMMDD');
  let stats = query.stats || 'date';

  let params = stats + ' as name,';
  let groupByStr = 'GROUP BY ' + stats;

  let sql = util.format('SELECT %s FROM %s %s %s %s %s',
    params + 'SUM(after1) AS a1,SUM(after2) AS a2,SUM(after3) AS a3,SUM(after4) AS a4,SUM(after5) AS a5,SUM(after6) AS a6,SUM(after7) AS a7',
    'daily_retention',
    'WHERE date=' + date,
    groupByStr,
    'ORDER BY a1 DESC',
    'LIMIT 0,10');

  let regSql = util.format('SELECT %s FROM %s %s %s %s',
    params + 'SUM(reg) AS reg',
    'users_count_by_app',
    'WHERE city_settled!=\'1_999_000000\' AND date=' + date,
    groupByStr,
    'ORDER BY reg DESC');

  return yield handleResult(sql, regSql, stats);
}

function* getWeekly(query) {
  let date = moment(query.date).format('YYYYMMDD');
  let stats = query.stats || 'week';
  let params = stats + ' as name,';
  let params1 = (stats === 'week') ? 'date as name,' : stats + ' as name,';
  let groupByStr = 'GROUP BY ' + stats;
  let groupByStr1 = (stats === 'week') ? '' : 'GROUP BY ' + stats;

  let sql = util.format('SELECT %s FROM %s %s %s %s %s',
    params + 'SUM(after1) AS a1,SUM(after2) AS a2,SUM(after3) AS a3,SUM(after4) AS a4,SUM(after5) AS a5,SUM(after6) AS a6,SUM(after7) AS a7',
    'weekly_retention',
    'WHERE week=' + date,
    groupByStr,
    'ORDER BY a1 DESC',
    'LIMIT 0,10');

  let regSql = util.format('SELECT %s FROM %s %s %s %s',
    params1 + 'SUM(reg) AS reg',
    'users_count_by_app',
    'WHERE city_settled!=\'1_999_000000\' AND date>=' + date + ' AND date<=' + moment(date).add(6, 'days').format('YYYYMMDD'),
    groupByStr1,
    'ORDER BY reg DESC');
  return yield handleResult(sql, regSql, stats);
}

function* getMonthly(query) {
  let date = query.date.replace('-', '');
  let stats = query.stats || 'month';
  let params = stats + ' as name,';
  let params1 = (stats === 'month') ? 'date as name,' : stats + ' as name,';
  let groupByStr = 'GROUP BY ' + stats;
  let groupByStr1 = (stats === 'month') ? '' : 'GROUP BY ' + stats;

  let sql = util.format('SELECT %s FROM %s %s %s %s %s',
    params + 'SUM(after1) AS a1,SUM(after2) AS a2,SUM(after3) AS a3,SUM(after4) AS a4,SUM(after5) AS a5,SUM(after6) AS a6,SUM(after7) AS a7',
    'monthly_retention_by_app',
    'WHERE month=' + date,
    groupByStr,
    'ORDER BY a1 DESC',
    'LIMIT 0,10');

  date = date + '01';
  let regSql = util.format('SELECT %s FROM %s %s %s %s',
    params1 + 'SUM(reg) AS reg',
    'users_count_by_app',
    'WHERE city_settled!=\'1_999_000000\' AND date>=' + date + ' AND date<=' + moment(date).endOf('months').format('YYYYMMDD'),
    groupByStr1,
    'ORDER BY reg DESC');

  return yield handleResult(sql, regSql, stats);
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
  daily: getDaily,
  weekly: getWeekly,
  monthly: getMonthly,
}
