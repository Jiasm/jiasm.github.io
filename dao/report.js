'use strict';

let util = require('util');
let ak47 = require('../libs/mysql.js')('ak47');
let moment = require('moment');

const tableName = 'redirect_jump_day';
function* daily(query) {
  let date = moment(query.date).format('YYYYMMDD') || '';
  let res = {};
  let sql = `
    SELECT sum(pv) AS pv, sum(uv) AS uv, url ${query.stats ? `,${query.stats}` : ''}
    FROM ${tableName}
    WHERE date = ${date}
    GROUP BY url ${query.stats ? `,${query.stats}` : ''}
  `;

  res = yield ak47.query(sql).then(function(result) {
    return result[0];
  })

  res = generatorData(res, {
    stats: query.stats,
    group: 'url'
  });

  return res;
}

function generatorData (_data, config) {
  var type = config.stats;  // 要进行分类的列
  var group = config.group; // 根据这个列来进行分组

  var index = 0;
  var len = _data.length;
  var data = {};
  for (; index < len; index++) {
    let item = _data[index];

    let obj = data[item[group]] = data[item[group]] || {};

    for (let val in item) {
      if (val != type && val != group) {
        obj[(item[type] || '') + val] = item[val];
      }
    }
  }

  return data;
}

module.exports = {
  daily
}
