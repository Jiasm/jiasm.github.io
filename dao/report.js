'use strict';

let util = require('util');
let adData = require('../libs/mysql.js')('adData');
let moment = require('moment');
let q = require('../tools/query.js');
let REGION = require('../data/region.js');

const tableName = 'blued_adm';

function* search(query) {

  let startDate = query.startDate;        // 开始时间
  let endDate = query.endDate;            // 结束时间
  let type = query.type.split(',');       // 广告类型
  let regions = query.regions.split(','); // 投放地区
  let platform = query.platform;          // 设备类型
  let adId = query.adId;                  // 广告ID
  let group = (query.group || 'day') + ',url';       // 分组条件
  let show = query.show.split(',');       // 展示指标

  let where = [];

  // 开始时间
  if (startDate) {
    where.push(`day >= ${startDate.replace(/\-/g, '')}`);
  }

  // 结束时间
  if (endDate) {
    where.push(`day <= ${endDate.replace(/\-/g, '')}`);
  }

  // 广告类型
  if (type .indexOf('all') < 0) {
    where.push(`type in (${type})`)
  }

  /**
   * 投放地区
   * 对地区的筛选
   * 如果选了某个大洲 需要特殊处理
   * 如果选了亚洲并且没有选择中国 需要特殊处理
   * 其余情况 直接拼一个like
   */
  if (regions && regions !== 'all') {
    let regionList = [];
    for (let item of regions) {
      // 这个说明全选了某个洲 全选了亚洲 需要判断是否存在有中国的选项 如果没有全选中国 需要将中国的
      if (`${item}_` in REGION.REGION_CODE_PREFIX && item === '1') {
        // 说明选择的中国
        if (regions.indexOf('1_156') >= 0) {
          regionList.push(`(region like '1%' and region not like '1_156%')`);
        }
      }
      regionList.push(`region like '${item}%'`);
    }

    where.push(regionList.join(' or '));
  }

  // 设备类型
  if (platform) {
    where.push(`platform = ${platform}`);
  }

  // 广告ID
  if (adId) {
    where.push(`adm_id = ${adId}`);
  }

  // 如果有选择展示指标
  if (show.length > 0) {
    let rule = ['1 = 1'];
    for (let item of show) {
      if (item) {
        rule.push(`url like '%${item}%'`);
      }
    }
    where.push(`(${rule.join(' or ')})`);
  }

  let cols = ['day', 'url', 'type', 'platform', 'region', 'adm_id', 'SUM(pv) AS pv'].join(','); // 要取的列

  where = where.length ? `WHERE ${where.join(' and ')}` : '';

  let sql = `
    SELECT
    ${cols}
    FROM
    ${tableName}
    ${where}
    GROUP BY ${group}
  `;
  console.log(sql);
  var showReg = new RegExp(`.*(${show.join('|')}).*`);

  let adList = yield q(adData, sql);
  let dataList = new Map();
  let groupList = query.group.split(',');

  yield adList.map(function* (item) {
    if (showReg.test(item.url)) {
      let val = RegExp.$1;
      let key = '';
      for (let k in item) {
        if (groupList.indexOf(k) >= 0) {
          key += item[k];
        }
      }
      if (dataList.has(key)) {
        let data = dataList.get(key);
        data[val] = (data[val] || 0) + item.pv;
        dataList.set(key, data);
      } else {
        item[val] = item.pv;
        dataList.set(key, item);
      }
    }
  });

  return Array.from(dataList.values());
}

module.exports = {
  search
}
