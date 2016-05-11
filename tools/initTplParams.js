'use strict';

let render = require('../libs/views.js');
let getUser = require('../libs/getUserInfo.js');
let hashids = require('../libs/hashids');

// 如果需要往模版里传入一些比较特殊的数据，塞到第四个参数里即可。
module.exports = function*(me, tplName, title, cusParams) {
  let huid = me.cookies.get('BDTOKEN');
  let uid = huid ? hashids.decode(huid)[0] : '0';
  let u = yield getUser(uid);
  // 权限为空 或者请求的路径（key）不存在他的权限内 返回木有权限
  if (isEmptyObject(u.navmapping) || !(me.url.match(/\/?(\w+)?\/?/)[1] in u.navmapping)) {
    me.st = 60002;
    return;
  }

  let params = {
    title: title,
    navmapping: u.navmapping || [],
    name: u.name || '',
    avatar: u.avatar || '',
    identity: u.identity || '',
  };
  cusParams && !isEmptyObject(cusParams) && Object.assign(params, cusParams);
  let html = yield render(tplName, params);
  return html;
}
// 判断是否为空object
function isEmptyObject(obj) {
  var isEmpty = true;
  var t;
  for (t in obj) {
    isEmpty = false;
    break;
  }
  return isEmpty;
}
