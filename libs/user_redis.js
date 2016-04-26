'use strict';

let thenifyAll = require('thenify-all');
let redis = require("redis");
let random = require('./random');
let userRedisServers = require('../conf/backend.js').user_redis;

let userRedisServer = userRedisServers[random(0, userRedisServers.length - 1)];
let userRedisClient = redis.createClient('6379', userRedisServer);
let userRedisCo = thenifyAll(userRedisClient, userRedisClient, [
  'zcard',
  'hget',
  'hgetall',
  'hmget',
  'zrevrange',
  'zscore',
]);

module.exports = userRedisCo;
