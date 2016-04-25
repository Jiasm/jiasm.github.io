;
(function() {
  var SHOWDATE = 'YYYY-MM-DD';
  var path = location.pathname.split('/').pop();
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      data: null
    },
    yAxis: {
      type: 'value'
    },
    xAxis: {
      type: 'category',
      data: null,
    },
    series: null,
  };

  function load(flag) {
    toastr.info('loading...');
    var myChart = echarts.init(document.getElementById('retentionmain'));
    var regNum = 0;
    var dateList = [];
    var seriesList = [];
    var stats = $('.stats .btn.sel').attr('stats');
    var isPlatform = /platform/.test(stats);
    var timeline = stats.match(/([^\_]+)?\_?/)[1];
    if (!flag) changePicker(timeline);  // 如果不是通过选择日期触发的事件，重新生成一下日期选择框
    var date = $('#reportrange').attr('xdate');
    var url = '/data/abroad?action=' + path + '&stats=' + stats + '&date=' + date;

    bluedAjaxFunc(url, function(res) {
      if (res.code === 200) {
        toastr.success('The data load success!');
        var reg = res.data;
        var datas = {};
        for (var key in reg) {
          var item = reg[key];
          var len = item.length;
          var index = 0;
          for (; index < len; index++) {
            var platform = isPlatform ? item[index]['platform'] : '海外用户';
            var count = item[index][path];
            var data = datas[platform] = datas[platform] || [];
            data.push(count);
            regNum += count;
          }
        }
        $('#retentionreg').html(regNum);

        var index = 0;
        var len = datas.length;
        for (var key in datas) {
          dateList.push(key);
          seriesList.push({
            name: key,
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: datas[key]
          });
        }
        option.legend.data = dateList;
        option.series = seriesList;
        var typeName;
        switch (path) {
          case 'active':
            typeName = '活跃';
            break;
          case 'reg':
            typeName = '新增';
            break;
          case 'retention':
            typeName = '留存';
            break;
        }
        if (timeline === 'daily') {  // 暂时先留着，等着做周和月
          var suffix = '日' + typeName;
          option.xAxis.data = [moment(date).format('MM/DD') + (path === 'retention' ? '日新增' : suffix)].concat(buildShaft([1, 2, 4, 5, 6, 7], date, 'd', suffix));
        } else if (timeline === 'weekly') {
          var suffix = '周' + typeName;
          option.xAxis.data = [moment(date).format('MM/DD') + '-' + moment(date).add(6, 'days').format('MM/DD') + (path === 'retention' ? '周新增' : suffix)].concat(buildShaft([1, 2, 4, 5, 6, 7], date, 'w', suffix));
        } else {
          var suffix = '月' + typeName;
          option.xAxis.data = [
            moment(date).format('M') + (path === 'retention' ? '月新增' : suffix),
            moment(date).add(1, 'months').format('M') + suffix,
            moment(date).add(2, 'months').format('M') + suffix,
            moment(date).add(3, 'months').format('M') + suffix,
            moment(date).add(4, 'months').format('M') + suffix,
            moment(date).add(5, 'months').format('M') + suffix,
            moment(date).add(6, 'months').format('M') + suffix,
            moment(date).add(7, 'months').format('M') + suffix,
          ]
        }
        myChart.setOption(option);
        toastr.clear();
      } else {
        toastr.error(res.msg);
      }
    });
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
          str = moment(date).add(attr, 'days').format('MM/DD') + suffix || '';
          break;
        case 'w':
        case 'weekly':
          str = moment(date).add(attr, 'weeks').format('MM/DD') + '-' + moment(date).add(attr, 'weeks').add(6, 'days').format('MM/DD') + suffix || '';
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

  // 因为切换日周月是在一个页面完成的，所以不能直接通过截取location.href来获取 所以在切换按钮click事件中调用了该函数
  function changePicker (path) {
    // <!-- datepicker -->
    var cb = function(start, end, label) {

      if (path === 'daily') {
        $('#reportrange span').html(start.format(SHOWDATE));
        $('#reportrange').attr('xdate', start.format(SHOWDATE));
        $('#retentiondate').html(start.format(SHOWDATE));
      } else if (path === 'weekly') {
        $('#reportrange span').html(start.format(SHOWDATE));
        $('#reportrange').attr('xdate', start.subtract(start.weekday() - 1, 'days').format(SHOWDATE));
        $('#retentiondate').html(start.format(SHOWDATE) + ' 至 ' + start.add(6, 'days').format(SHOWDATE));
      } else {
        $('#reportrange span').html(start.format('YYYY-MM'));
        $('#reportrange').attr('xdate', start.format('YYYY-MM'));
        $('#retentiondate').html(start.format('YYYY-M') + '月');
      }
      // 这里参数表示为切换日期，而不是切换日周月 因为切换日周月需要重新生成datepicker
      load(true);
    }

    if (path === 'daily') {
      var _date = moment().subtract(8, 'days');
    } else if (path === 'weekly') {
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
    if (path === 'daily') {
      $('#retentiondate').html(_date.format(SHOWDATE));
      $('#reportrange span').html(_date.format(SHOWDATE));
      $('#reportrange').attr('xdate', _date.format(SHOWDATE)).daterangepicker(optionSet1, cb);
    } else if (path === 'weekly') {
      $('#retentiondate').html(_date.format(SHOWDATE) + ' 至 ' + moment().weekday(-13).add(6, 'days').format(SHOWDATE));
      $('#reportrange span').html(_date.format(SHOWDATE));
      $('#reportrange').attr('xdate', _date.format(SHOWDATE)).daterangepicker(optionSet1, cb);
    } else {
      $('#retentiondate').html(_date.format('YYYY-M') + '月');
      $('#reportrange span').html(_date.format('YYYY-MM'));
      $('#reportrange').attr('xdate', _date.format('YYYY-MM')).daterangepicker(optionSet1, cb);
    }
    //<!-- /datepicker -->
  }

  $('.stats .btn').on('click', function() {
    if ($(this).hasClass('sel')) {
      return;
    }
    $('.stats .btn').removeClass('btn-primary').removeClass('sel');
    $(this).addClass('btn-primary').addClass('sel');
    load();
  });
  $('.stats .btn').eq(0).trigger('click');
})();
