'use strict';

let thenifyAll = require('thenify-all');
let mysql = require('mysql');
let random = require('./random');
let mysqlEnv = require('../conf/backend.js');

module.exports = function(conf) {
  let mysqlConf = mysqlEnv[conf];
  let configs = {
    host: mysqlConf.host,
    user: mysqlConf.user,
    password: mysqlConf.password,
    database: mysqlConf.database
  }
  let mysqlServer = configs.host[random(0, configs.host.length - 1)];
  let mysqlConnection = mysql.createPool({
    host: mysqlServer,
    user: configs.user,
    password: configs.password,
    database: configs.database,
  });

  return thenifyAll(mysqlConnection, mysqlConnection, ['query']);
}
