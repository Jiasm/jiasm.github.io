'use strict';

let Hashids = require("hashids");
let hashids = new Hashids('1766', 6,
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123567890');

module.exports = hashids;
