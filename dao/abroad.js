'use strict';

let util = require('util');
let moment = require('moment');
let ak47 = require('../libs/mysql.js')('ak47');
let findcity = require('../tools/findcity.js');
let q = require('../tools/query.js');
const exchange = 'users_exchange';
function* getActive (query) {
  let date = moment(query.date).format('YYYYMMDD');
  var isPlatform = /platform/.test(query.stats);
  // let stats = query.stats === 'date' ? 'date' : 'date,' + query.stats;
  var sql = `
  SELECT date, SUM(active) AS active${isPlatform ? ', platform' : ''}
  FROM users_count
  WHERE city_settled!='1_999_000000'
  AND country != 'cn'
  AND date>=${date}
  AND date<=${moment(date).add(6, 'days').format('YYYYMMDD')}
  GROUP BY date${isPlatform ? ',platform' : ''}
  ORDER BY active
  DESC limit 0,70
  `;
  return yield handleResult(sql);
}

function* getReg (query) {
  let date = moment(query.date).format('YYYYMMDD');
  var isPlatform = /platform/.test(query.stats);
  //console.log(date.valueOf());
  var sql = `
  SELECT date,platform, SUM(reg) AS reg${isPlatform ? ', platform' : ''}
  FROM users_count
  WHERE city_settled!='1_999_000000'
  AND country != 'cn'
  AND date>=${date}
  AND date<=${moment(date).add(6, 'days').format('YYYYMMDD')}
  GROUP BY date${isPlatform ? ',platform' : ''}
  ORDER BY reg DESC
  LIMIT 0,70
  `;
  return yield handleResult(sql);
}

function* getRetention (query) {
  let date = moment(query.date).format('YYYYMMDD');
  var isPlatform = /platform/.test(query.stats);
  //console.log(date.valueOf());
  var sql = `
  SELECT SUM(after1) AS a1,
    SUM(after2) AS a2,
    SUM(after3) AS a3,
    SUM(after4) AS a4,
    SUM(after5) AS a5,
    SUM(after6) AS a6,
    SUM(after7) AS a7${isPlatform ? ', platform' : ''}
  FROM daily_retention
  WHERE date=${date}
  ${isPlatform ? 'GROUP BY platform  ORDER BY platform DESC' : ''}
  `;
  console.log(sql);
  return yield handleRetention(sql, date, isPlatform);
}

function* handleResult(sql) {
  let obj = {};
  let list = yield q(ak47, sql);
  for (let i = 0; i < list.length; i++) {
    if (obj[list[i].date]) {
      obj[list[i].date].push(list[i])
    } else {
      obj[list[i].date] = [list[i]]
    }
    delete list[i].date;
  }
  return obj;
}

function* handleRetention(sql, date, isPlatform) {
  let list = yield q(ak47, sql);
  if (!list) return [];
  if (isPlatform) {
    let obj = {};
    let getItem = function (key) {
      let len = list.length;
      let index = 0;
      let val = [];
      for (; index < len; index++) {
        val.push({
          platform: list[index].platform,
          retention: list[index][key]
        });
      }
      return val;
    }
    return {
      [date]: getItem('a1'),
      [moment(date).add(1, 'day').format('YYYYMMDD')]: getItem('a2'),
      [moment(date).add(2, 'day').format('YYYYMMDD')]: getItem('a3'),
      [moment(date).add(3, 'day').format('YYYYMMDD')]: getItem('a4'),
      [moment(date).add(4, 'day').format('YYYYMMDD')]: getItem('a5'),
      [moment(date).add(5, 'day').format('YYYYMMDD')]: getItem('a6'),
      [moment(date).add(6, 'day').format('YYYYMMDD')]: getItem('a7'),
    }
  } else {
    list = list[0];
    return {
      [date]: [{retention: list.a1}],
      [moment(date).add(1, 'day').format('YYYYMMDD')]: [{retention: list.a2}],
      [moment(date).add(2, 'day').format('YYYYMMDD')]: [{retention: list.a3}],
      [moment(date).add(3, 'day').format('YYYYMMDD')]: [{retention: list.a4}],
      [moment(date).add(4, 'day').format('YYYYMMDD')]: [{retention: list.a5}],
      [moment(date).add(5, 'day').format('YYYYMMDD')]: [{retention: list.a6}],
      [moment(date).add(6, 'day').format('YYYYMMDD')]: [{retention: list.a7}],
    }
  }
}

module.exports = {
  active: getActive,
  reg: getReg,
  retention: getRetention,
}
