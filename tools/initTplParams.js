'use strict';

let render = require('../libs/views.js');
let getUser = require('../libs/getUserInfo.js');
let hashids = require('../libs/hashids');

module.exports = function*(me, tplName, title) {
  let huid = me.cookies.get('BD_UID') || 'Xxwm9w';
  let uid = hashids.decode(huid)[0];
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
