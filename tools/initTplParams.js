'use strict';

let render = require('../libs/views.js');
let getUser = require('../libs/getUserInfo.js');
let hashids = require('../libs/hashids');

module.exports = function*(me, tplName, title) {
  let uid = hashids.decode(me.cookies.get('BD_UID'))[0];
  let u = yield getUser(uid);
  let html = yield render(tplName, {
    title: title,
    navmaping: u.navmaping || [],
    name: u.name || '',
    avatar: u.avatar || '',
    identity: u.identity || '',
  });
  return html;
}
