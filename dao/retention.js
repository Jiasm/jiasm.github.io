'use strict';

let util = require('util');
let moment = require('moment');
let ak47 = require('../libs/mysql.js')('ak47');
let findcity = require('../tools/findcity.js');
let q = require('../tools/query.js');

function* getDaily(query) {
  let date = moment(query.date).format('YYYYMMDD');
  let endDate = date;
  let timeUnit = 'date';
  let stats = query.stats || timeUnit;
  return yield getData({
    date,
    endDate,
    stats,
    timeUnit
  });
}

function* getWeekly(query) {
  let date = moment(query.date).format('YYYYMMDD');
  let endDate = moment(date).add(6, 'days').format('YYYYMMDD');
  let stats = query.stats || 'week';
  let timeUnit = 'week';
  return yield getData({
    date,
    endDate,
    stats,
    timeUnit
  });
}

function* getMonthly(query) {
  let date = query.date.replace('-', '');
  let endDate = moment(date, 'YYYYMM').endOf('months').format('YYYYMMDD');
  let stats = query.stats || 'month';
  let timeUnit = 'month';
  return yield getData({
    date,
    endDate,
    stats,
    timeUnit
  });
}

function* getData (config) {
  let date = config.date;// 日期范围的开始
  let endDate = config.endDate;// 日期范围的结束
  let stats = config.stats;// 可能是设备 国家 等等的一些值
  let timeUnit = config.timeUnit;// 标识是 month  week 或者 day
  let params = stats + ' as name,';
  let params1 = (stats === timeUnit) ? 'date as name,' : stats + ' as name,';
  let groupByStr = 'GROUP BY ' + stats;
  let groupByStr1 = (stats === timeUnit) ? '' : 'GROUP BY ' + stats;
  let tableName = ({
    'date': 'daily_retention_by_app',
    'week': 'weekly_retention_by_app',
    'month': 'monthly_retention_by_app'
  })[timeUnit];
  // 对于查询国家的进行特殊处理
  if (stats === 'country' || stats === 'city_settled') {
    return yield dataByCountry({
      stats,
      date,
      endDate,
      params,
      params1,
      groupByStr,
      groupByStr1,
      timeUnit,
      tableName
    })
  }
  let sql = util.format('SELECT %s FROM %s %s %s %s %s',
    params + 'SUM(after1) AS a1,SUM(after2) AS a2,SUM(after3) AS a3,SUM(after4) AS a4,SUM(after5) AS a5,SUM(after6) AS a6,SUM(after7) AS a7',
    tableName,
    'WHERE ' + timeUnit + '=' + date,
    groupByStr,
    'ORDER BY a1 DESC',
    'LIMIT 0,10');
    // 月份date不包含日期 强行拼接
  if (timeUnit === 'month') {
    date = date + '01';
  }

  let regSql = util.format('SELECT %s FROM %s %s %s %s',
    params1 + 'SUM(reg) AS reg',
    'users_count_by_app',
    'WHERE city_settled!=\'1_999_000000\' AND date>=' + date + ' AND date<=' + endDate,
    groupByStr1,
    'ORDER BY reg DESC');
  return yield handleResult(sql, regSql, stats);
}

function* dataByCountry(config) {
  let stats = config.stats; // 可能是设备 国家 等等的一些值
  let date = config.date; // 开始日期
  let endDate = config.endDate; // 结束日期
  let params = config.params; // 查询注册人数的参数
  let params1 = config.params1; // 查询留存人数的参数
  let groupByStr = config.groupByStr; // 查询注册人数的分组条件
  let groupByStr1 = config.groupByStr1; // 查询留存人数的分组条件
  let timeUnit = config.timeUnit; // 时间单位 month day week 等等...
  let tableName = config.tableName; // 留存人数的表名 分 day week month
  let regSql = util.format('SELECT %s FROM %s %s %s %s',
    params + 'SUM(reg) AS reg',
    'users_count_by_app',
    'WHERE city_settled!=\'1_999_000000\' AND date>=' + date + ' AND date<=' + endDate,
    groupByStr,
    'ORDER BY reg DESC LIMIT 0,10');

  let reg = yield q(ak47, regSql);
  var countrys = '';
  reg.map(item => {
    countrys += '\'' + item.name + '\',';
  });
  countrys = ' AND ' + stats + ' IN (' + countrys.slice(0, -1) + ') ';
  let sql = util.format('SELECT %s FROM %s %s %s %s %s',
    params1 + 'SUM(after1) AS a1,SUM(after2) AS a2,SUM(after3) AS a3,SUM(after4) AS a4,SUM(after5) AS a5,SUM(after6) AS a6,SUM(after7) AS a7',
    tableName,
    'WHERE ' + timeUnit + '=' + date + countrys,
    groupByStr,
    'ORDER BY a1 DESC',
    'LIMIT 0,10');

  let retention = yield q(ak47, sql);
  return {
    reg,
    retention
  }
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
