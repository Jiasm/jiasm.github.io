'use strict';

let render = require('../libs/views.js');
let moment = require('moment');
let getAuthority = require('../libs/getAuthority.js');
let ak47 = require('../libs/mysql.js')('ak47');
let q = require('../tools/query.js');
let initTpl = require('../tools/initTplParams.js');

const USERTABLE = 'dt_admin';

module.exports = function(router, conf) {
  router.get('/', function*() {
    let html = yield initTpl(this, 'members', conf.productName);
    this.body = html;
  });

  router.get('/permission', function*() {
    let uid = this.query.uid;
    var authority = yield getAuthority(uid);
    let html = yield initTpl(this, 'permission', conf.productName, {
      authority: authority && authority.rule
    });
    this.body = html;
  });

  router.get('/new', function*() {
    let path = this.params.path;
    let html = yield initTpl(this, 'new', conf.productName);
    this.body = html;
  });

  router.post('/adduser', function*(next) {
    let params = this.request.body;
    let uid = params.uid;
    let is_super = params.is_super;
    // let latest_operate_time
    try {
      let sql = `
        SELECT count(1) as count
        FROM ${USERTABLE}
        WHERE uid = ${uid}
      `;

      let result = yield q(ak47, sql);
      let count = result[0].count;
      if (count === 0) {
        let addSql = `
          INSERT INTO ${USERTABLE} (uid, is_super)
          VALUES (${uid}, ${is_super})
        `;
        console.log(addSql);
        let res = yield q(ak47, addSql);
        console.log(res);
        if (res.affectedRows === 1) { // 受影响行数
          this.body = {
            success: true
          }
        }
      } else {
        this.body = {
          err: '该用户已存在'
        }
      }
    } catch (e) {
      this.body = {
        err: e
      }
    } finally {
      yield next;
    }
  });
}
