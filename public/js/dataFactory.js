;
(function (init, global) {
  global.DataFactory = global.DataFactory || init();
})(function () {

  function DataFactory (data, config) {
    var _data = {};
    var date = config.date; // 时间轴起始值
    var former = config.former;
    var type = former.type;
    if (config.key) {
      // 这种只是用于更改key名
      for (var key in data) {
        var item = _data[key] = [];
        var index = 0;
        var row = data[key];
        var len = row.length;
        for (; index < len; index++) {
          item.push(buildItem(row[index][type], row[index][former.value]));
        }
      }
    } else {
      var cols = [];
      var index = 0;
      var row = data[0];
      // 获取列名集合
      for (var col in row) {
        if (col !== type) {
          cols.push(col);
        }
      }
      // 获取列完毕

      for (; index < cols.length; index++) {
        var arr = _data[buildShaft(index, date, config.unit)] = [];
        for (var key in data) {
          arr.push(buildItem(data[key][type], data[key][cols[index]]));
        }
      }
    }
    return _data;
  }
  // 用于合并多个数据集合 默认认为是按日期戳为key的
  DataFactory.concat = function (datas) {
    var data = {};
    var index = 0;
    var len = datas.length;
    for (; index < len; index++) {
      var _data = datas[index];
      for (var key in _data) {
        data[key] = _data[key];
      }
    }

    return data;
  }

  // 生成数据列
  function buildItem (type, value) {
    return {
      type: type,
      value: value
    };
  }

  // 用来生成x时间轴
  // attr 偏移量 可以为数字或者为数组
  // date 当前日期
  // unit 单位 日｜周｜月 XXXXX
  // suffix 轴日期后边拼的字符串 如： 日新增 日留存 什么什么的
  function buildShaft (attr, date, unit, suffix) {
    if (typeof attr !== 'object') {
      var str;
      switch (unit) {
        case 'd':
        case 'daily':
          str = moment(date).add(attr, 'days').format('YYYYMMDD');
          break;
        case 'w':
        case 'weekly':
          str = moment(date).add(attr, 'weeks').format('YYYYMMDD')+ '-' + moment(date).add(attr, 'weeks').add(6, 'days').format('YYYYMMDD');
          break;
        case 'm':
        case 'month':
          str = moment(date).add(attr, 'months').format('YYYYMMDD');
          break;
      }
      return str;
    } else {
      var arr = [];
      var index = 0;
      var len = attr.length;
      for (; index < len; index++) {
        arr.push(buildShaft(attr[index], date, unit, suffix));
      }
      return arr;
    }
  }

  return DataFactory;
}, this);
