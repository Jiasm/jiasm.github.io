'use strict';

let crypto = require('crypto');
let util = require('util');
let render = require('../libs/views.js');
let userMysql = require('../libs/mysql.js')('userMysql');
let userRedis = require('../libs/user_redis.js');
let q = require('../tools/query.js');

let eFun = (me, msg) => {
  me.jsonp = {
    msg: msg,
  }
}

let proPasswd = (str) => {
  return crypto.createHash('sha1')
    .update(str)
    .digest('hex');
}

let checkPasswd = (pw1, pw2, me) => {
  if (pw1 === pw2) {
    // return true;
  } else {
    // return false;
  }
  me.jsonp = {
    code: 200,
    account: input,
    pw: pw,
  }
}

const PASSPORT_MOBILE_HMAC_KEY = 'zCxC8+Ut7P9mW4sKuTCNsg==';

module.exports = function(router, conf) {
  router.get('/', function*() {
    let html = yield render('login', {
      title: conf.productName
    });
    this.body = html;
  });

  router.get('/email', function*() {
    let input = this.query.input;
    let pw = this.query.pw;
    let passwd = proPasswd(pw);

    let emailmd5 = crypto.createHash('md5')
      .update(input)
      .digest('hex')
      .toString().slice(0, 2);

    try {
      let userid = yield userRedis.hget(['u:emails:' + emailmd5, input]);
      let userPasswd = yield userRedis.hget('u:' + userid, 'passwd');
      checkPasswd(userPasswd, passwd, me);
    } catch (err) {
      eFun(this, 'service error');
    }
  });

  router.get('/phone', function*() {
    let input = this.query.input;
    let pw = this.query.pw;
    let passwd = proPasswd(pw);
    let keys = new Buffer(PASSPORT_MOBILE_HMAC_KEY, 'base64');
    let sign = crypto.createHmac('sha256', keys)
      .update('+86-' + input)
      .digest('hex');
    let sql = util.format(
      'SELECT * FROM %s %s LIMIT 1',
      'users_mobile', 'WHERE mid="' + sign + '"');

    try {
      let user = yield userMysql.query(sql).then(function(result) {
        return result[0];
      });
      if (user.length) {
        let userid = user[0].uid
        let userPasswd = yield userRedis.hget('u:' + userid, 'passwd');
        checkPasswd(userPasswd, passwd, this);
      } else {
        eFun(this, 'input error');
      }
    } catch (err) {
      eFun(this, 'service error');
    }
  });
}
