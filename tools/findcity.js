'use strict';

let area = require('../data/area_zh.js');

module.exports = function(num) {
  let res = '未知';
  if (area[num]) {
    res = area[num].split('_')[1];
  }
  return res;
};