'use strict';

let render = require('../libs/views.js');
let moment = require('moment');
let getAuthority = require('../libs/getAuthority.js');
let ak47 = require('../libs/mysql.js')('ak47');
let q = require('../tools/query.js');
let initTpl = require('../tools/initTplParams.js');
let getUser = require('../libs/getUserInfo.js');
let checkAccess = require('../libs/checkAccess.js');

const USERTABLE = 'dt_admin';

module.exports = function(router, conf) {
  router.get('/', function*() {
    let html = yield initTpl(this, 'members', conf.productName);
    this.body = html;
  });

  router.get('/permission', function*(next) {
    yield checkAccess(this, getPermission);
  });

  router.get('/new', function*() {
    yield checkAccess(this, newUser);
  });

  router.post('/adduser', function*(next) {
    yield checkAccess(this, addUser);
  });

  // 获取要被设置权限的那个人的权限
  function* getPermission (me) {
    let uid = me.query.uid;
    // 获取这个人的权限信息 一个数组字符串
    var authority = yield getAuthority(uid);
    var _data = JSON.parse((authority && authority.rule) || '[]');
    // 默认都能看到settings
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
