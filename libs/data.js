'use strict';

let prefix = '../dao/';
let dashboard = require(`${prefix}dashboard.js`);
let retention = require(`${prefix}retention.js`);
let users = require(`${prefix}users.js`);
let video = require(`${prefix}video.js`);
let abroad = require(`${prefix}abroad.js`);

module.exports = {
  retention,
  dashboard,
  users,
  video,
  abroad,
}
