'use strict';

let render = require('../libs/views.js');
let moment = require('moment');
let ak47 = require('../libs/mysql.js')('ak47');
let q = require('../tools/query.js');

const USERTABLE = 'dt_admin';

module.exports = function(router, conf) {
  let navmaping = require('../conf/navmaping.js')();
  router.get('/', function*() {
    let path = this.params.path;
    let html = yield render('members', {
      title: conf.productName,
      navmaping: navmaping
    });
    this.body = html;
  });

  router.get('/permission', function*() {
    let path = this.params.path;
    let html = yield render('permission', {
      title: conf.productName,
      navmaping: navmaping
    });
    this.body = html;
  });

  router.get('/new', function*() {
    let path = this.params.path;
    let html = yield render('new', {
      title: conf.productName,
      navmaping: navmaping
    });
    this.body = html;
  });

  router.post('/adduser', function*(next) {
    let params = this.request.body;
    let uid = params.uid;
    let is_super = params.is_super;
    // let latest_operate_time
    //
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
          this.body = {success: true}
        }
      } else {
        this.body = {err: '该用户已存在'}
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
