'use strict';

let thenifyAll = require('thenify-all');
let redis = require("redis");
let random = require('./random');
let liveRedisServers = require('../conf/backend.js').live_redis;

let liveRedisServer = liveRedisServers[random(0, liveRedisServers.length - 1)];
let liveRedisClient = redis.createClient('6379', liveRedisServer);
let liveRedisCo = thenifyAll(liveRedisClient, liveRedisClient, [
  'zcard',
  'hgetall',
  'hget',
  'hmget',
  'zrevrange',
  'zscore',
  'zrange',
  'sismember',
  'smembers',
]);

module.exports = liveRedisCo;
