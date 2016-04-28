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
        var reg = res.data.reg;
        for (var k = 0; k < reg.length; k++) {
          regNum += reg[k].reg
        }
        $('#retentionreg').html(regNum);
        var data = res.data.retention;
        for (var i = 0; i < data.length; i++) {
          dateList.push(data[i].name);
          seriesList.push({
            name: data[i].name,
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [reg[i].reg, data[i].a1, data[i].a2, data[i].a3, data[i].a4, data[i].a5, data[i].a6, data[i].a7]
          });
        }
        option.legend.data = dateList;
        option.series = seriesList;

        var suffix = '留存';
        if (path === 'daily') {
          option.xAxis.data = [moment(date).format('MM/DD') + '新增'].concat(Utils.buildShaft([1, 2, 3, 4, 5, 6, 7], date, 'd', suffix));
        } else if (path === 'weekly') {
          option.xAxis.data = [moment(date).format('MM/DD') + '-' + moment(date).add(6, 'days').format('MM/DD') + '新增'].concat(Utils.buildShaft([1, 2, 3, 4, 5, 6, 7], date, 'w', suffix));
        } else {
          option.xAxis.data = [moment(date).format('M') + '新增'].concat(Utils.buildShaft([1, 2, 3, 4, 5, 6, 7], date, 'm', suffix));
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
