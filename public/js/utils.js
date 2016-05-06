(function (global, factory) {
  global.Utils = global.Utils || factory();
})(this, function () {
  var utils = {};
  var SHOWDATE = 'YYYY-MM-DD';

  utils.buildShaft = buildShaft;

  utils.changePicker = changePicker;

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
          str = moment(date).add(attr, 'days').format('MM/DD') + suffix || '';
          break;
        case 'w':
        case 'weekly':
          str = moment(date).add(attr, 'weeks').format('MM/DD') + '-' + moment(date).add(attr, 'weeks').add(6, 'days').format('MM/DD') + suffix || '';
          break;
        case 'm':
        case 'monthly':
          str = moment(date).add(attr, 'months').format('MM') + suffix || '';
          break;
        case 't-d':
        case 't-daily':
        case 'timestmap-d':
        case 'timestmap-daily':
          str = moment(date).add(attr, 'days').format('YYYYMMDD');
          break;
        case 't-w':
        case 't-weekly':
        case 'timestmap-w':
        case 'timestmap-weekly':
          str = moment(date).add(attr, 'weeks').format('YYYYMMDD')+ '-' + moment(date).add(attr, 'weeks').add(6, 'days').format('YYYYMMDD');
          break;
        case 't-m':
        case 't-monthly':
        case 'timestmap-m':
        case 'timestmap-monthly':
          str = moment(date).add(attr, 'months').format('YYYYMM');
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



  // 生成日期选择框，对日期切换的事件做了默认值设置，可以传入第二个参数进行定制事件处理
  function changePicker (path, load, cb) {

    cb = cb || function(start, end, label) {
      if (/daily/.test(path)) {
        $('#reportrange span').html(start.format(SHOWDATE));
        $('#reportrange').attr('xdate', start.format(SHOWDATE));
        $('#retentiondate').html(start.format(SHOWDATE));
      } else if (/weekly/.test(path)) {
        $('#reportrange span').html(start.format(SHOWDATE));
        $('#reportrange').attr('xdate', start.subtract(start.weekday() - 1, 'days').format(SHOWDATE));
        $('#retentiondate').html(start.format(SHOWDATE) + ' 至 ' + start.add(6, 'days').format(SHOWDATE));
      } else {
        $('#reportrange span').html(start.format('YYYY-MM'));
        $('#reportrange').attr('xdate', start.format('YYYY-MM'));
        $('#retentiondate').html(start.format('YYYY-M') + '月');
      }
      load();
    }

    if (/daily/.test(path)) {
      var _date = moment().subtract(8, 'days');
    } else if (/weekly/.test(path)) {
      var _date = moment().weekday(-13);
    } else {
      var _date = moment().subtract(3, 'months').startOf('months');
    }
    var optionSet1 = {
      weekStart: 1,
      startDate: _date,
      singleDatePicker: true,
      minDate: '01/01/2016',
      maxDate: '12/31/2018',
      showDropdowns: true,
      showWeekNumbers: true,
      opens: 'left',
      buttonClasses: ['btn btn-default'],
      applyClass: 'btn-small btn-primary',
      cancelClass: 'btn-small',
      format: 'MM/DD/YYYY',
      separator: ' to ',
    };
    if (/daily/.test(path)) {
      $('#retentiondate').html(_date.format(SHOWDATE));
      $('#reportrange span').html(_date.format(SHOWDATE));
      $('#reportrange').attr('xdate', _date.format(SHOWDATE)).daterangepicker(optionSet1, cb);
    } else if (/weekly/.test(path)) {
      $('#retentiondate').html(_date.format(SHOWDATE) + ' 至 ' + moment().weekday(-13).add(6, 'days').format(SHOWDATE));
      $('#reportrange span').html(_date.format(SHOWDATE));
      $('#reportrange').attr('xdate', _date.format(SHOWDATE)).daterangepicker(optionSet1, cb);
    } else {
      $('#retentiondate').html(_date.format('YYYY-M') + '月');
      $('#reportrange span').html(_date.format('YYYY-MM'));
      $('#reportrange').attr('xdate', _date.format('YYYY-MM')).daterangepicker(optionSet1, cb);
    }
  }

  return utils;
});
