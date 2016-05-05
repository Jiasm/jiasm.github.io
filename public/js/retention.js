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
    var date = $('#reportrange').attr('xdate');
    var stats = $('.stats .btn.sel').attr('stats');
    var url = '/data/retention?action=' + path + '&stats=' + stats + '&date=' + date;

    bluedAjaxFunc(url, function(res) {
      if (res.code === 200) {
        toastr.success('The data load success!');
        var dataConfig = {
          date: date,
          unit: path,
          former: {
            type: 'name'
          }
        }
        var __reg = DataFactory(res.data.reg, dataConfig);
        dataConfig.date = moment(date).add(1, 'd').format('YYYY-MM-DD');
        var __retention = DataFactory(res.data.retention, dataConfig);
        var reg = DataFactory.concat([__reg, __retention]);
        reg = sliceData(reg, 10); // 处理后的数据
        var datas = {};
        for (var key in reg) {
          var item = reg[key];
          var len = item.length;
          var index = 0;
          for (; index < len; index++) {
            var platform = /^\d+$/.test(item[index].type) ? '用户' : item[index].type;
            var count = item[index].value;
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
        option.legend.data = dateList;
        option.series = seriesList;

        var suffix = '留存';
        if (path === 'daily') {
          option.xAxis.data = [moment(date).format('MM/DD') + '新增'].concat(Utils.buildShaft([1, 2, 3, 4, 5, 6, 7], date, 'd', suffix));
          $('#data-table').html(buildTable(datas, Utils.buildShaft([0, 1, 2, 3, 4, 5, 6, 7], date, 't-d'), null, stats === '' ? ['用户'] : null));
        } else if (path === 'weekly') {
          option.xAxis.data = [moment(date).format('MM/DD') + '-' + moment(date).add(6, 'days').format('MM/DD') + '新增'].concat(Utils.buildShaft([1, 2, 3, 4, 5, 6, 7], date, 'w', suffix));
          $('#data-table').html(buildTable(datas, Utils.buildShaft([0, 1, 2, 3, 4, 5, 6, 7], date, 't-w'), null, stats === '' ? ['用户'] : null));
        } else {
          option.xAxis.data = [moment(date).format('M') + '新增'].concat(Utils.buildShaft([1, 2, 3, 4, 5, 6, 7], date, 'm', suffix));
          $('#data-table').html(buildTable(datas, Utils.buildShaft([0, 1, 2, 3, 4, 5, 6, 7], date, 't-m'), null, stats === '' ? ['用户'] : null));
        }
        myChart.setOption(option);
        toastr.clear();
      } else {
        toastr.error(res.msg);
      }
    });
  }

  Utils.changePicker(path, load);

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
