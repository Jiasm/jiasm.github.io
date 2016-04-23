'use strict';

let util = require('util');
let moment = require('moment');
let livemysql = require('../libs/mysql.js')('liveMysql');
let findcity = require('../tools/findcity.js');
let q = require('../tools/query.js');
const exchange = 'users_exchange';
function* getDaily (query) {
  let stats = query.stats || 'month';
  let date = moment(query.date);
  //console.log(date.valueOf());
  var sql = `
  SELECT SUM(beans) AS count
  FROM ${exchange}
  WHERE created_time >= ${date.unix()}
    AND created_time <= ${date.add(1, 'day').unix()}
  `;
}

function* getWeekly (query) {
  let stats = query.stats || 'month';
  let date = moment(query.date);
  //console.log(date.valueOf());
  var sql = `
  SELECT SUM(beans) AS count
  FROM ${exchange}
  WHERE created_time >= ${date.startOf('week').unix()}
    AND created_time <= ${date.endOf('week').unix()}
  `;
}

function* getMonthly (query) {

}

function* handleResult (incomeSql, paySql) {
  var income = yield q(livemysql, incomeSql);
  var pay = yield q(livemysql, paySql);

  return {
    income,
    pay,
  }
}

module.exports = {
  daily: getDaily,
  weekly: getWeekly,
  monthly: getMonthly,
}
/*
SELECT star_id AS uid,
       SUM(beans) AS beansTotal
     FROM rich_fans_day
      WHERE  star_id NOT IN ('8402377')  AND  day = 20160423
     GROUP BY star_id
     ORDER BY beansTotal DESC
     LIMIT 0,15

     SELECT star_id AS uid,
       SUM(beans) AS beansTotal
     FROM rich_fans_week20160418
      WHERE  star_id NOT IN ('8402377')
     GROUP BY star_id
     ORDER BY beansTotal DESC
     LIMIT 0,15

     SELECT star_id AS uid,
       SUM(beans) AS beansTotal
     FROM stars_total
      WHERE  star_id NOT IN ('8402377')
     GROUP BY star_id
     ORDER BY beansTotal DESC
     LIMIT 0,15

     SELECT uid AS uid,
       SUM(beans) AS beansTotal
     FROM rich_fans_day
      WHERE  day = 20160423
     GROUP BY uid
     ORDER BY beansTotal DESC
     LIMIT 0,15

     SELECT uid AS uid,
       SUM(beans) AS beansTotal
     FROM rich_fans_week20160418

     GROUP BY uid
     ORDER BY beansTotal DESC
     LIMIT 0,15

     SELECT uid AS uid,
       SUM(beans) AS beansTotal
     FROM rich_fans_total

     GROUP BY uid
     ORDER BY beansTotal DESC
     LIMIT 0,15
 */
