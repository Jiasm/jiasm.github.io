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
    var regNum = 0;
    var dateList = [];
    var seriesList = [];
    var isActive = (path === 'active');
    var date = $('#reportrange').attr('xdate');
    var stats = $('.stats .btn.sel').attr('stats');
    var url = '/data/users?action=' + (isActive ? 'get_daily_active' : 'get_daily_reg') + '&stats=' + stats + '&date=' + date;

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
            var platform = item[index][stats];
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
        // if (path === 'daily') {  // 暂时先留着，等着做周和月
          var suffix = isActive ? '日活' : '日新增';
          option.xAxis.data = [
            moment(date).format('MM/DD') + suffix,
            moment(date).add(1, 'days').format('MM/DD') + suffix,
            moment(date).add(2, 'days').format('MM/DD') + suffix,
            moment(date).add(3, 'days').format('MM/DD') + suffix,
            moment(date).add(4, 'days').format('MM/DD') + suffix,
            moment(date).add(5, 'days').format('MM/DD') + suffix,
            moment(date).add(6, 'days').format('MM/DD') + suffix,
            moment(date).add(7, 'days').format('MM/DD') + suffix,
          ]
        // } else if (path === 'weekly') {
        //   option.xAxis.data = [
        //     moment(date).format('MM/DD') + '-' + moment(date).add(6, 'days').format('MM/DD') + '新增',
        //     moment(date).add(1, 'weeks').format('MM/DD') + '-' + moment(date).add(1, 'weeks').add(6, 'days').format('MM/DD') + '留存',
        //     moment(date).add(2, 'weeks').format('MM/DD') + '-' + moment(date).add(2, 'weeks').add(6, 'days').format('MM/DD') + '留存',
        //     moment(date).add(3, 'weeks').format('MM/DD') + '-' + moment(date).add(3, 'weeks').add(6, 'days').format('MM/DD') + '留存',
        //     moment(date).add(4, 'weeks').format('MM/DD') + '-' + moment(date).add(4, 'weeks').add(6, 'days').format('MM/DD') + '留存',
        //     moment(date).add(5, 'weeks').format('MM/DD') + '-' + moment(date).add(5, 'weeks').add(6, 'days').format('MM/DD') + '留存',
        //     moment(date).add(6, 'weeks').format('MM/DD') + '-' + moment(date).add(6, 'weeks').add(6, 'days').format('MM/DD') + '留存',
        //     moment(date).add(7, 'weeks').format('MM/DD') + '-' + moment(date).add(7, 'weeks').add(6, 'days').format('MM/DD') + '留存',
        //   ]
        // } else {
        //   option.xAxis.data = [
        //     moment(date).format('M') + '月新增',
        //     moment(date).add(1, 'months').format('M') + '月留存',
        //     moment(date).add(2, 'months').format('M') + '月留存',
        //     moment(date).add(3, 'months').format('M') + '月留存',
        //     moment(date).add(4, 'months').format('M') + '月留存',
        //     moment(date).add(5, 'months').format('M') + '月留存',
        //     moment(date).add(6, 'months').format('M') + '月留存',
        //     moment(date).add(7, 'months').format('M') + '月留存',
        //   ]
        // }
        myChart.setOption(option);
        toastr.clear();
      } else {
        toastr.error(res.msg);
      }
    });
  }


  // <!-- datepicker -->
  var cb = function(start, end, label) {

    // if (path === 'daily') {
    $('#reportrange span').html(start.format(SHOWDATE));
    $('#reportrange').attr('xdate', start.format(SHOWDATE));
    $('#retentiondate').html(start.format(SHOWDATE));
    // } else if (path === 'weekly') {
    //   $('#reportrange span').html(start.format(SHOWDATE));
    //   $('#reportrange').attr('xdate', start.subtract(start.weekday() - 1, 'days').format(SHOWDATE));
    //   $('#retentiondate').html(start.format(SHOWDATE) + ' 至 ' + start.add(6, 'days').format(SHOWDATE));
    // } else {
    //   $('#reportrange span').html(start.format('YYYY-MM'));
    //   $('#reportrange').attr('xdate', start.format('YYYY-MM'));
    //   $('#retentiondate').html(start.format('YYYY-M') + '月');
    // }
    load();
  }

  // if (path === 'daily') {
  var _date = moment().subtract(8, 'days');
  // } else if (path === 'weekly') {
  //   var _date = moment().weekday(-13);
  // } else {
  //   var _date = moment().subtract(3, 'months').startOf('months');
  // }
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
  //if (path === 'daily') {
  $('#retentiondate').html(_date.format(SHOWDATE));
  $('#reportrange span').html(_date.format(SHOWDATE));
  $('#reportrange').attr('xdate', _date.format(SHOWDATE)).daterangepicker(optionSet1, cb);
  // } else if (path === 'weekly') {
  //   $('#retentiondate').html(_date.format(SHOWDATE) + ' 至 ' + moment().weekday(-13).add(6, 'days').format(SHOWDATE));
  //   $('#reportrange span').html(_date.format(SHOWDATE));
  //   $('#reportrange').attr('xdate', _date.format(SHOWDATE)).daterangepicker(optionSet1, cb);
  // } else {
  //   $('#retentiondate').html(_date.format('YYYY-M') + '月');
  //   $('#reportrange span').html(_date.format('YYYY-MM'));
  //   $('#reportrange').attr('xdate', _date.format('YYYY-MM')).daterangepicker(optionSet1, cb);
  // }
  // <!-- /datepicker -->

  $('.stats .btn').on('click', function() {
    if ($(this).hasClass('sel')) {
      return;
    }
    $('.stats .btn').removeClass('btn-primary').removeClass('sel');
    $(this).addClass('btn-primary').addClass('sel');
    load();
  });
  $('.stats .btn').eq(1).trigger('click');
})();
