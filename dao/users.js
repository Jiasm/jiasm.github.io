'use strict';

let util = require('util');
let moment = require('moment');
let ak47 = require('../libs/mysql.js')('ak47');
let findcity = require('../tools/findcity.js');
let q = require('../tools/query.js');

function* getDailyActive(query) {
  let date = moment(query.date).format('YYYYMMDD');
  let stats = query.stats === 'date' ? 'date' : 'date,' + query.stats;
  let groupbyStr = (stats === 'date') ? 'GROUP BY date' : 'GROUP BY ' + stats;
  let orderbyStr = (stats === 'date') ? 'ORDER BY date ASC' : 'ORDER BY active DESC';
  let sql = util.format('SELECT %s FROM %s %s %s %s',
    stats + ', SUM(active) AS active',
    'users_count_by_app',
    'WHERE city_settled!=\'1_999_000000\' AND date>=' + date + ' AND date<=' + moment(date).add(6, 'days').format('YYYYMMDD'),
    groupbyStr,
    orderbyStr,
    'limit 0,70');
  return yield handleResult(sql, 'date');
}

function* getDailyReg(query) {
  let date = moment(query.date).format('YYYYMMDD');
  let stats = query.stats === 'date' ? 'date' : 'date,' + query.stats;
  let groupbyStr = (stats === 'date') ? 'GROUP BY date' : 'GROUP BY date,' + stats;
  let orderbyStr = (stats === 'date') ? 'ORDER BY date ASC' : 'ORDER BY reg DESC';

  let sql = util.format('SELECT %s FROM %s %s %s %s',
    stats + ', SUM(reg) AS reg',
    'users_count_by_app',
    'WHERE city_settled!=\'1_999_000000\' AND date>=' + date + ' AND date<=' + moment(date).add(6, 'days').format('YYYYMMDD'),
    groupbyStr,
    orderbyStr,
    'limit 0,70');
  return yield handleResult(sql, 'date');
}
function* getWeeklyActive(query) {
  let date = moment(query.date).startOf('isoWeek').format('YYYYMMDD');
  let stats = query.stats === 'week' ? 'week' : 'week' + (query.stats ? ',' + query.stats : '');
  let groupbyStr = (stats === 'week') ? 'GROUP BY week' : 'GROUP BY ' + stats;
  let orderbyStr = (stats === 'week') ? 'ORDER BY week ASC' : 'ORDER BY active DESC';
  let sql = util.format('SELECT %s FROM %s %s %s %s',
    stats + ', SUM(active) AS active',
    'weekly_users_count_by_app',
    'WHERE city_settled!=\'1_999_000000\' AND week>=' + date + ' AND week<=' + moment(date).add(6, 'weeks').format('YYYYMMDD'),
    groupbyStr,
    orderbyStr,
    'limit 0,70');
  return yield handleResult(sql, 'week');
}

function* getWeeklyReg(query) {
  let date = moment(query.date).startOf('isoWeek').format('YYYYMMDD');
  let stats = query.stats === 'week' ? 'week' : 'week' + (query.stats ? ',' + query.stats : '');
  let groupbyStr = (stats === 'week') ? 'GROUP BY week' : 'GROUP BY week,' + stats;
  let orderbyStr = (stats === 'week') ? 'ORDER BY week ASC' : 'ORDER BY reg DESC';

  let sql = util.format('SELECT %s FROM %s %s %s %s',
    stats + ', SUM(reg) AS reg',
    'weekly_users_count_by_app',
    'WHERE city_settled!=\'1_999_000000\' AND week>=' + date + ' AND week<=' + moment(date).add(6, 'weeks').format('YYYYMMDD'),
    groupbyStr,
    orderbyStr,
    'limit 0,70');
  return yield handleResult(sql, 'week');
}
function* getMonthlyActive(query) {
  let date = moment(query.date).format('YYYYMM');
  let stats = query.stats === 'month' ? 'month' : 'month' + (query.stats ? ',' + query.stats : '');
  let groupbyStr = (stats === 'month') ? 'GROUP BY month' : 'GROUP BY ' + stats;
  let orderbyStr = (stats === 'month') ? 'ORDER BY month ASC' : 'ORDER BY active DESC';
  let sql = util.format('SELECT %s FROM %s %s %s %s',
    stats + ', SUM(active) AS active',
    'monthly_users_count_by_app',
    'WHERE city_settled!=\'1_999_000000\' AND month>=' + date + ' AND month<=' + moment(date).add(6, 'months').format('YYYYMM'),
    groupbyStr,
    orderbyStr,
    'limit 0,70');
  return yield handleResult(sql, 'month');
}

function* getMonthlyReg(query) {
  let date = moment(query.date).format('YYYYMM');
  let stats = query.stats === 'month' ? 'month' : 'month' + (query.stats ? ',' + query.stats : '');
  let groupbyStr = (stats === 'month') ? 'GROUP BY month' : 'GROUP BY month,' + stats;
  let orderbyStr = (stats === 'month') ? 'ORDER BY month ASC' : 'ORDER BY reg DESC';

  let sql = util.format('SELECT %s FROM %s %s %s %s',
    stats + ', SUM(reg) AS reg',
    'monthly_users_count_by_app',
    'WHERE city_settled!=\'1_999_000000\' AND month>=' + date + ' AND month<=' + moment(date).add(6, 'months').format('YYYYMM'),
    groupbyStr,
    orderbyStr,
    'limit 0,70');
  return yield handleResult(sql, 'month');
}

function* handleResult(sql, date) {
  let obj = {};
  let list = yield q(ak47, sql);
  for (let i = 0; i < list.length; i++) {
    if (obj[list[i][date]]) {
      obj[list[i][date]].push(list[i])
    } else {
      obj[list[i][date]] = [list[i]]
    }
    delete list[i][date];
  }
  return obj;
}

module.exports = {
  getDailyActive: getDailyActive,
  getDailyReg: getDailyReg,
  getWeeklyActive: getWeeklyActive,
  getWeeklyReg: getWeeklyReg,
  getMonthlyActive: getMonthlyActive,
  getMonthlyReg: getMonthlyReg,
}
