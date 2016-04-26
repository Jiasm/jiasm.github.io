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

  function load() {
    toastr.info('loading...');
    var myChart = echarts.init(document.getElementById('retentionmain'));
    var regNum = '';
    var dateList = [];
    var seriesList = [];
    var date = $('#reportrange').attr('xdate');
    var stats = $('.stats .btn.sel').attr('stats');
    var url = '/data/video?action=' + path + '&date=' + date + '&stats=' + stats;

    bluedAjaxFunc(url, function(res) {
      if (res.code === 200) {
        toastr.success('The data load success!');
        var datas = res.data;
        var numbers = {};
        var titles = [];
        for (var key in datas) {
          var item = datas[key];
          if (item && item.length) {
            item = item[0];
          }
          var _total = 0;
          regNum += '/';
          numbers[key] = [];
          for (var title in item) {
            titles.push(title);
            _total += item[title];
            numbers[key].push(item[title]);
          }
          regNum += _total;
        }
        $('#retentionreg').html(regNum.replace(/^\//, ''));

        for (var key in datas) {
          dateList.push(getTitle(key));
          seriesList.push({
            name: getTitle(key),
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: numbers[key]
          });
        }
        option.legend.data = dateList;
        option.series = seriesList;
        option.xAxis.data = getAxis(titles);
        myChart.setOption(option);
        toastr.clear();
      } else {
        toastr.error(res.msg);
      }

      function getAxis (titles) {
        var len = titles.length;
        var index = 0;
        var arr = [];
        for (; index < len; index++) {
          if (path === 'daily') {
            arr.push(moment(date).format('MM/DD') + '日' + getTitle(titles[index]));
          } else if (path === 'weekly') {
            arr.push(moment(date).format('MM/DD') + '-' + moment(date).add(6, 'days').format('MM/DD') + getTitle(titles[index]))
          } else {
            arr.push('总' + getTitle(titles[index]));
          }
        }
        return arr;
      }
    });
  }

  var getTitle = function (key) {
    return ({
      consume: '消费',
      recharge: '充值',
      total: '收支',
      ios: 'ios收支',
      android: 'android收支'
    })[key] || ''
  }

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
    }
    load();
  }

  var _date = moment().subtract(1, 'day');
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
  } else {  // 这里表示为总的消费和充值
    $('#retentiondate').hide()
  }
  // <!-- /datepicker -->

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
