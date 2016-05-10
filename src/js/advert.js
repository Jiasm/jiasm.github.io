;
(function() {
  var SHOWDATE = 'YYYY-MM-DD';
  var path = location.pathname.split('/').pop();

  function load() {
    toastr.info('loading...');
    var regNum = 0;
    var dateList = [];
    var seriesList = [];
    var date = $('#reportrange').attr('xdate');
    var stats = $('.stats .btn.sel').attr('stats');
    var url = '/data/advert?action=' + path + '&stats=' + stats + '&date=' + date;
    var isMonth = path === 'monthly';
    var dateFormat = isMonth ? 'YYYYMM' : 'YYYYMMDD';

    bluedAjaxFunc(url, function(res) {
      if (res.code === 200) {
        toastr.success('The data load success!');
        var data = res.data;

        $('#data-table').html(buildTable({
          data: data,
          stats: stats
        }));

        $('#sort-table').DataTable({
      		order: [[1, 'desc']],
          searching: false,
          lengthMenu: false,
          bInfo: false,
          bFilter: false,
          bPaginate: false
      	});
        toastr.clear();
      } else {
        toastr.error(res.msg);
      }
    });
  }

  changePicker(path, load);

  $('.stats .btn').on('click', function() {
    if ($(this).hasClass('sel')) {
      return;
    }
    $('.stats .btn').removeClass('btn-primary').removeClass('sel');
    $(this).addClass('btn-primary').addClass('sel');
    load();
  });
  $('.stats .btn').eq(1).trigger('click');

  // 生成展示数据的表格
  function buildTable (config) {
    var data = config.data;
    var stats = config.stats;
    var str = '';
    var headers = [];

    if (stats === '') { // 表示为默认显示方式
      headers = ['url', 'pv', 'uv'];
      values = ['pv', 'uv'];
    } else if (stats === 'platform') { // 表示为按设备区分显示
      headers = ['url', 'android pv', 'android uv', 'ios pv', 'ios uv', 'unknown pv', 'unknown uv'];
      values = ['androidpv', 'androiduv', 'iospv', 'iosuv', 'unknownpv', 'unknownuv'];
    }

    var len = values.length;

    str += '<div class="x_content">'
      + '<table id="sort-table" class="table table-striped responsive-utilities jambo_table bulk_action">'
      + '<thead>'
      + '<tr>'
      + '<th class="sorting">' + headers.join('</th><th class="sorting">') +'</th>';
      + '</tr>'
      + '</thead>';

    str += '<tbody id="tablemain">';
    for (var key in data) {
      var item = data[key];
      str += '<tr>';
      str += '<td>'
        + key
        + '</td>';
      for (var index = 0; index < len; index++) {
        str += '<td>'
          + (item[values[index]] || 0);
          + '</td>';
      }
      str += '</tr>';
    }
    str += '</tbody>'
      + '</table>'
      + '<div class="clearfix"></div>';

    return str;
  }

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
      var _date = moment().subtract(1, 'days');
    } else if (/weekly/.test(path)) {
      var _date = moment().subtract(1, 'weeks');
    } else {
      var _date = moment().subtract(1, 'months');
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
})();
