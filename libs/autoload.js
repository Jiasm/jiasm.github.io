'use strict';

let path = require('path');
let fs = require('fs');
let conf = require('../conf/global.js');

function files(name, router) {
  let dirname = path.dirname(process.mainModule.filename);
  let appPath = path.join(dirname, name);
  if (fs.existsSync(appPath)) {
    let dirs = fs.readdirSync(appPath);
    let apps = {};
    dirs.map(function(value) {
      if (value.indexOf('.') != 0) {
        apps[value] = path.join(dirname, name, value);
        if (name === 'routes') {
          require(apps[value])(router, conf);
        } else {
          require(apps[value]);
        }
      }
    });
    /*
      @return:
      @returns 当没有找到这些路径时返回[];
     */
    return apps;
  } else {
    return [];
  }
}

module.exports = {files: files,}
