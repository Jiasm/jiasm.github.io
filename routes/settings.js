'use strict';

let render = require('../libs/views.js');
let moment = require('moment');
let getAuthority = require('../libs/getAuthority.js');
let ak47 = require('../libs/mysql.js')('ak47');
let q = require('../tools/query.js');
let initTpl = require('../tools/initTplParams.js');
let hashids = require('../libs/hashids');
let getUser = require('../libs/getUserInfo.js');

const USERTABLE = 'dt_admin';

module.exports = function(router, conf) {
  router.get('/', function*() {
    let html = yield initTpl(this, 'members', conf.productName);
    this.body = html;
  });

  router.get('/permission', function*(next) {
    yield checkUser(this, getPermission);
  });

  router.get('/new', function*() {
    yield checkUser(this, newUser);
  });

  router.post('/adduser', function*(next) {
    yield checkUser(this, addUser);
  });



  function* checkUser (me, callback) {
    let account = me.cookies.get('BDTOKEN');
    // 没有获取到uid
    if (!account || !hashids.decode(account)[0]) {
      me.body = {
        err: '请刷新后重试'
      }
      me.redirect('/nopermission');
    } else {
      let uid = hashids.decode(account)[0];
      let user = yield getUser(uid);
      // 没有查询到对应的用户 或者该用户是观察者
      if (!user || user.is_super === 0) {
        me.body = {
          err: '无此权限'
        }
        me.redirect('/nopermission');
      } else {
        me.body = yield callback(me);
      }
    }
  }

  // 获取要被设置权限的那个人的权限
  function* getPermission (me) {
    let uid = me.query.uid;
    var authority = yield getAuthority(uid);
    var _data = JSON.parse((authority && authority.rule) || '[]');
    _data.push('settings');
    let user = yield getUser(uid);
    let html = yield initTpl(me, 'permission', conf.productName, {
      authority: JSON.stringify(_data),
      mappings: require('../conf/navmapping.js')(),
      userName: user.name
    });

    return html;
  }

  // 打开添加用户界面
  function* newUser (me) {
    let path = me.params.path;
    let html = yield initTpl(me, 'new', conf.productName);
    return html;
  }

  // 添加用户
  function* addUser (me) {
    let params = me.request.body;
    let uid = params.uid;
    let is_super = params.is_super;
    try {
      let sql = `
        SELECT count(1) as count
        FROM ${USERTABLE}
        WHERE uid = ${uid}
      `;
      let result = yield q(ak47, sql);
      let count = result[0].count; // 获取该uid是否已经存在
      if (count === 0) {
        let addSql = `
          INSERT INTO ${USERTABLE} (uid, is_super)
          VALUES (${uid}, ${is_super})
        `;
        let res = yield q(ak47, addSql);
        if (res.affectedRows === 1) { // 受影响行数 == 1 表示添加成功
          return {
            success: true
          }
        }
      } else {
        return {
          err: '该用户已存在'
        }
      }
    } catch (e) {
      return {
        err: e
      }
    }
  }
}
