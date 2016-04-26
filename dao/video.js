'use strict';

let util = require('util');
let moment = require('moment');
let livemysql = require('../libs/mysql.js')('livedata');
let findcity = require('../tools/findcity.js');
let q = require('../tools/query.js');
const exchange = 'users_exchange';
function* getDaily (query) {
  let stats = query.stats;
  let date = moment(query.date).format('YYYYMMDD');
  let where = `WHERE day = ${date}`;
  return yield handleResult(where, stats);
}

function* getWeekly (query) {
  let stats = query.stats;
  let date = moment(query.date).startOf('week').format('YYYYMMDD');
  let where = `WHERE day >= ${date} AND day <= ${moment(date).endOf('week').format('YYYYMMDD')}`;
  return yield handleResult(where, stats);
}

function* getTotal (query) {
  let stats = query.stats;
  return yield handleResult('', stats);
}

function* handleResult (where, stats) {
  var consumeSql = `
    SELECT ${stats === 'platform' ? ' SUM(android_consume_beans) as android, SUM(ios_consume_beans) as ios ' : ' SUM(consume_beans) as total '}
    FROM CONSUME_TREND_DAY
    ${where}
    ORDER BY day DESC
  `;
  var rechargeSql = `
    SELECT ${stats === 'platform' ? ' SUM(android_money) * 10 as android, SUM(ios_actual_money) * 10 as ios ' : ' SUM(actual_money) * 10 as total '}
    FROM RECHARGE_TREND_DAY
    ${where}
    ORDER BY day DESC
  `;
  var consume = yield q(livemysql, consumeSql);
  var recharge = yield q(livemysql, rechargeSql);
  return {
    consume,
    recharge,
  }
}

module.exports = {
  daily: getDaily,
  weekly: getWeekly,
  total: getTotal,
}
