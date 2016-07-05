'use strict';

let prefix = '../dao/';
let dashboard = require(`${prefix}dashboard.js`);
let retention = require(`${prefix}retention.js`);
let users = require(`${prefix}users.js`);
let video = require(`${prefix}video.js`);
let abroad = require(`${prefix}abroad.js`);
let members = require(`${prefix}members.js`);
let permission = require(`${prefix}permission.js`);
let advert = require(`${prefix}advert.js`);
let report = require(`${prefix}report.js`);

module.exports = {
  retention,
  dashboard,
  users,
  video,
  abroad,
  members,
  permission,
  advert,
  report,
}
