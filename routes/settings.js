'use strict';

let render = require('../libs/views.js');
let moment = require('moment');
let getAuthority = require('../libs/getAuthority.js');
let ak47 = require('../libs/mysql.js')('ak47');
let q = require('../tools/query.js');
let initTpl = require('../tools/initTplParams.js');
let hashids = require('../libs/hashids');
let getUser = require('../libs/getUserInfo.js');
let checkAccess = require('../libs/checkAccess.js');

const USERTABLE = 'dt_admin';

module.exports = function(router, conf) {
  router.get('/', function*() {
    let account = this.cookies.get('BDTOKEN');
    let admin = false;
    if (account && hashids.decode(account)[0]) {
      let uid = hashids.decode(account)[0];
      let user = yield getUser(uid);
      if (user && user.is_super === 1 && user.is_locked === 0) {
        admin = true;
      }
    }
    let html = yield initTpl(this, 'members', conf.productName, {
      admin
    });
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

  router.get('/remove', function*() {
    yield checkAccess(this, removeWatcher);
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
        SELECT count(1) as count, is_locked
        FROM ${USERTABLE}
        WHERE uid = ${uid}
      `;
      let addSql = ``;
      let result = yield q(ak47, sql);
      let count = result[0].count; // 获取该uid是否已经存在
      if (count === 0) {  // 不存在
        addSql = `
          INSERT INTO ${USERTABLE} (uid, is_super)
          VALUES (${uid}, ${is_super})
        `;
      } else if (result[0].is_locked === 1) {  // 说明用户是之前存在过 后来被删除了
        addSql = `
          UPDATE ${USERTABLE}
          SET is_locked = 0 ,
            is_super = ${is_super},
            authority = ''
          WHERE uid = ${uid}
        `;
      } else {
        return {
          err: '该用户已存在'
        }
      }

      // 如果进行到这一步 说明用户是不存在或者被禁用的 遂执行sql
      let res = yield q(ak47, addSql);
      if (res.affectedRows === 1) { // 受影响行数 == 1 表示添加(修改)成功
        return {
          success: true
        }
      }
    } catch (e) {
      return {
        err: e
      }
    }
  }

  // 删除某个观察者
  function* removeWatcher (me) {
    let uid = me.query.uid;
    let user = yield getUser(uid);

    // 找到了user 并且user为一个活动的非管理员用户
    if (user || user.is_super !== 1 || user.is_locked !== 0) {
      let removeSql = `
        UPDATE ${USERTABLE}
        SET is_locked = 1 ,
          authority = ''
        WHERE uid = ${uid}
      `;
      let result = yield q(ak47, removeSql);
      if (result.affectedRows === 1) { // 受影响行数 == 1 表示更新成功
        return {
          success: true
        }
      }
    }

    return {
      err: '该uid对应的观察者不存在'
    }
  }
}
