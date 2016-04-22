'use strict';

let dashboard = require('../dao/dashboard.js');
let retention = require('../dao/retention.js');
let users = require('../dao/users.js');

module.exports = {
  retention: retention,
  dashboard: dashboard,
  users: users,
}
