'use strict';

let util = require('util');
let moment = require('moment');
let ak47 = require('../libs/mysql.js')('ak47');
let findcity = require('../tools/findcity.js');
let q = require('../tools/query.js');

function* getDailyActive(query) {
  return yield generateData('date', moment(query.date).format('YYYYMMDD'), moment(query.date).add(6, 'days').format('YYYYMMDD'), 'active', query.stats);
}

function* getDailyReg(query) {
  return yield generateData('date', moment(query.date).format('YYYYMMDD'), moment(query.date).add(6, 'days').format('YYYYMMDD'), 'reg', query.stats);
}
function* getWeeklyActive(query) {
  return yield generateData('week', moment(query.date).startOf('isoWeek').format('YYYYMMDD'), moment(query.date).add(6, 'weeks').format('YYYYMMDD'), 'active', query.stats);
}

function* getWeeklyReg(query) {
  return yield generateData('week', moment(query.date).startOf('isoWeek').format('YYYYMMDD'), moment(query.date).add(6, 'weeks').format('YYYYMMDD'), 'reg', query.stats);
}
function* getMonthlyActive(query) {
  return yield generateData('month', moment(query.date).format('YYYYMM'), moment(query.date).add(6, 'months').format('YYYYMM'),'active', query.stats);
}

function* getMonthlyReg(query) {
  return yield generateData('month', moment(query.date).format('YYYYMM'), moment(query.date).add(6, 'months').format('YYYYMM'), 'reg', query.stats);
}

// 查询数据
// timeUnit: date|week|month
// date: 开始时间
// endDate: 结束时间
// type: sum的字段名
// stats: 根据查询方式不同 改变查询的字段
function* generateData(timeUnit, date, endDate, type, stats) {
  stats = stats === timeUnit ? timeUnit : timeUnit + (stats ? ',' + stats : '');
  let groupbyStr = (stats === timeUnit) ? 'GROUP BY ' + timeUnit : 'GROUP BY ' + timeUnit + ',' + stats;
  let orderbyStr = (stats === timeUnit) ? 'ORDER BY ' + timeUnit +' ASC' : 'ORDER BY ' + type + ' DESC';
  let tableName = ({
    date: 'users_count_by_app',
    week: 'weekly_users_count_by_app',
    month: 'monthly_users_count_by_app'
  })[timeUnit];


  let sql = util.format('SELECT %s FROM %s %s %s %s',
    stats + ', SUM(' + type + ') AS ' + type,
    tableName,
    'WHERE city_settled!=\'1_999_000000\' AND ' + timeUnit + '>=' + date + ' AND ' + timeUnit + '<=' + endDate,
    groupbyStr,
    orderbyStr,
    'limit 0,70');
  return yield handleResult(sql, timeUnit);
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
