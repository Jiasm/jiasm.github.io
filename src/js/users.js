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
        var reg = sliceData(res.data, 10);
        var colCount = 0; // 如果数据返回的不够7天的 下边的表格需要被处理下
        var datas = {};
        for (var key in reg) {
          colCount++;
          var item = reg[key];
          var len = item.length;
          var index = 0;
          for (; index < len; index++) {
            var platform = item[index][stats] || '活跃用户';
            var count = item[index][path];
            var data = datas[platform] = datas[platform] || [];
            data.push(count);
            regNum += count;
          }
        }
        $('#retentionreg').html(numberAddComma(regNum));

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
        option.legend.data = dateList.slice(0, 10);
        option.series = seriesList.slice(0, 10);
        var suffix = isActive ? '日活' : '日新增';
        option.xAxis.data = [moment(date).format('MM/DD') + suffix].concat(Utils.buildShaft([1, 2, 3, 4, 5, 6, 7].slice(0, colCount), date, 'd', suffix));
        myChart.setOption(option);
        $('#data-table').html(buildTable(datas, Utils.buildShaft([0, 1, 2, 3, 4, 5, 6].slice(0, colCount), date, 't-d')));
        toastr.clear();
      } else {
        toastr.error(res.msg);
      }
    });
  }

  Utils.changePicker('daily', load);

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
