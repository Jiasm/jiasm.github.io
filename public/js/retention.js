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
    var isMonth = path === 'monthly';
    var dateFormat = isMonth ? 'YYYYMM' : 'YYYYMMDD';

    bluedAjaxFunc(url, function(res) {
      if (res.code === 200) {
        toastr.success('The data load success!');
        var dataConfig = {
          date: moment(date, dateFormat).format('YYYYMM'),
          dateFormat: dateFormat,
          unit: path,
          former: {
            type: 'name'
          }
        }
        var __reg = DataFactory(res.data.reg, dataConfig);
        for (var key in res.data.reg) {
          regNum += res.data.reg[key].reg;
        }
        dataConfig.date = moment(date, dateFormat).add(1, isMonth ? 'M' : 'd').format(isMonth ? 'YYYY-MM' : 'YYYY-MM-DD');
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
        var isCountry = stats === 'country' || stats === 'city_settled';
        var title = '<p><code id="retentiondate">2016-04-28</code> 新增用户 <code id="retentionreg">' + regNum +'</code></p>';
        var buildRow = function (timeline, datas, titles) {
            var str = '';
            var index = 0;
            var len = timeline.length;
            var titleLen = titles.length;
            for (; index < len; index++) {
              str += '<tr>';
              str += '<td>' + timeline[index] + '</td>';
              for (var titleIndex = 0; titleIndex < titleLen; titleIndex++) {
                var count = datas[titles[titleIndex]][index + 1] || 0;
                str += isCountry ? '<td>' + count + '  ' + (count / datas[titles[titleIndex]][0] * 100).toFixed(2) + '%</td>' : '<td>留存用户：' + count + '，留存率：' + (count / datas[titles[titleIndex]][0] * 100).toFixed(2) + '%</td>';
              }
              str += '</tr>';
            }
            return str;
          }
        if (path === 'daily') {
          option.xAxis.data = [moment(date, dateFormat).format('MM/DD') + '新增'].concat(Utils.buildShaft([1, 2, 3, 4, 5, 6, 7], date, 'd', suffix));
        } else if (path === 'weekly') {
          option.xAxis.data = [moment(date, dateFormat).format('MM/DD') + '-' + moment(date, dateFormat).add(6, 'days').format('MM/DD') + '新增'].concat(Utils.buildShaft([1, 2, 3, 4, 5, 6, 7], date, 'w', suffix));
        } else {
          option.xAxis.data = [moment(date, dateFormat).format('MM') + '新增'].concat(Utils.buildShaft([1, 2, 3, 4, 5, 6, 7], date, 'm', suffix));
        }
        var $table = $('#data-table').html(buildTable({
          data: datas,
          timeline: Utils.buildShaft([1, 2, 3, 4, 5, 6, 7], date, 't-' + path),
          keys: stats === '' ? ['用户'] : null,
          buildRow: buildRow
        }));
        $table.find('.x_title').after(title)
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
