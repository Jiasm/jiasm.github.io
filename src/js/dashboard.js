;
(function() {
  var url = '';
  var path = location.pathname.split('/').pop();
  var activeChart = echarts.init(document.getElementById('activemain'));
  var regChart = echarts.init(document.getElementById('regmain'));
  var dateList = [];
  var seriesList = [];
  var dimensionList = [];
  var seriesOpts = {
    active: {
      name: '日活跃',
      data: [],
    },
    reg: {
      name: '日新增',
      data: [],
    }
  };
  var option = {
    title: {
      text: '用户趋势图'
    },
    tooltip: {
      trigger: 'axis'
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: dateList
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: null,
  };

  if (path === 'index') {
    var enddate = moment().subtract(1, 'days').format('YYYYMMDD');
    var startdate = moment().subtract(31, 'days').format('YYYYMMDD')
    url = '/data/dashboard?action=get_active_and_reg&stardate=' + startdate + '&enddate=' + enddate;
  }

  function load() {
    toastr.info('loading...');
    bluedAjaxFunc(url, function(res) {
      if (res.code === 200) {
        toastr.success('The data load success!');
        var monthlyData = res.data.monthly;
        if (monthlyData) {
          var tr = '';
          for (var i = 0; i < monthlyData.length; i++) {
            dateList.push(monthlyData[i].date);
            seriesOpts.reg.data.push(monthlyData[i].reg);
            seriesOpts.active.data.push(monthlyData[i].active);
            tr += '<tr>' +
              '<td>' + monthlyData[i].date + '</td>' +
              '<td>' + monthlyData[i].reg + '</td>' +
              '<td>' + monthlyData[i].active + '</td>' +
              '</tr>';
          }
          for (var x in seriesOpts) {
            dimensionList.push(seriesOpts[x]['name'])
            seriesList.push({
              name: seriesOpts[x]['name'],
              type: 'line',
              itemStyle: {
                normal: {
                  color: '#368e98'
                }
              },
              areaStyle: {
                normal: {
                  color: '#368e98'
                }
              },
              data: seriesOpts[x]['data']
            })
          }
          option.series = [seriesList[0]];
          activeChart.setOption(option);
          option.series = [seriesList[1]];
          regChart.setOption(option);
          $('#tablemain').html(tr);
          toastr.clear();
        } else {
          toastr.error('Data Error!');
        }
      } else {
        toastr.error(res.msg);
      }
    });
  }
  load();

  // <!-- datepicker -->
  var cb = function(start, end, label) {
    $('#reportrange span').html(start.format('MMMM D, YYYY'));
    var enddate = start.format('YYYYMMDD');
    var startdate = start.subtract(30, 'days').format('YYYYMMDD')
    if (path === 'index') {
      url = '/data?type=get_dashboard&stardate=' + startdate + '&enddate=' + enddate;
      load();
    }
  }

  var optionSet1 = {
    startDate: moment().subtract(1, 'days'),
    singleDatePicker: true,
    minDate: '01/01/2012',
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
  $('#reportrange span').html(moment().subtract(1, 'days').format('MMMM D, YYYY'));
  $('#reportrange').daterangepicker(optionSet1, cb);
  // <!-- /datepicker -->

  console.log('dashboard.js');
})();
