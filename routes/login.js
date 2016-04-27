'use strict';

let crypto = require('crypto');
let util = require('util');
let render = require('../libs/views.js');
let userMysql = require('../libs/mysql.js')('userMysql');
let userRedis = require('../libs/user_redis.js');
let q = require('../tools/query.js');
let hashids = require('../libs/hashids');
const PASSPORT_MOBILE_HMAC_KEY = 'zCxC8+Ut7P9mW4sKuTCNsg==';

// console.log(hashids.encode(4239999));
// console.log(hashids.decode('yPe2QA')[0]);

let eFun = (me, msg) => {
  me.jsonp = {
    code: 5001,
    msg: '账号或密码错误。 错误码：5001',
  }
}

let proPasswd = (str) => {
  let sign = crypto.createHash('sha1')
    .update(str)
    .digest('hex');
  return sign;
}

let checkPasswd = (pw1, pw2, me, uid) => {
  if (pw1 === pw2) {
    let account = hashids.encode(Number(uid));
    me.cookies.set('BDNAME', account, {
      maxAge: 7 * 24 * 60 * 60 * 1000 // 一周
    });
    me.jsonp = {
      code: 200,
    }
  } else {
    me.jsonp = {
      code: 4001,
      msg: '账号或密码错误。  错误码：4001',
    }
  }
}

module.exports = function(router, conf) {
  router.get('/', function*() {
    let html = yield render('login', {
      title: conf.productName
    });
    this.body = html;
  });

  router.post('/email', function*() {
    let b = this.request.body;
    let input = b.input;
    let pw = b.pw;
    let passwd = proPasswd(pw);

    try {
      let emailmd5 = crypto.createHash('md5')
        .update(input)
        .digest('hex')
        .toString().slice(0, 2);
      let userid = yield userRedis.hget(['u:emails:' + emailmd5, input]);
      let userPasswd = yield userRedis.hget('u:' + userid, 'passwd');
      checkPasswd(userPasswd, passwd, this, userid);
    } catch (err) {
      eFun(this, 'err_msg: ' + err.message + ' || err_name: ' + err.name + ' || err_stack: ' + err.stack);
    }
  });

  router.post('/phone', function*() {
    let b = this.request.body;
    let input = b.input;
    let pw = b.pw;
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
        let userid = user[0].uid;
        let userPasswd = yield userRedis.hget('u:' + userid, 'passwd');
        checkPasswd(userPasswd, passwd, this, userid);
      } else {
        eFun(this, 'input error');
      }
    } catch (err) {
      eFun(this, 'err_msg: ' + err.message + ' || err_name: ' + err.name + ' || err_stack: ' + err.stack);
    }
  });
}
