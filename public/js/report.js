'use strict';
;(function () {

  var MAP = {}; // 一些 0 1 2 3 的映射
  // 广告类型
  MAP.TYPE = {
    'all': '全部',
    0: '动态',
    1: 'banner'
  }
  // 设备类型
  MAP.PLATFORM = {
    0: '全部',
    1: 'Android',
    2: 'iOS'
  }

  function init () {

    initDatePicker();
    initSelector();
    bindSearch();
  }

  /**
   * 初始化日期选择
   */
  function initDatePicker () {
    var _date = moment();
    var $start = $('#startDate');
    var $end = $('#endDate');
    var $startText = $('#startDate span');
    var $endText = $('#endDate span');
    var SHOWDATE = 'YYYY-MM-DD';
    var cbStart = function (start) {
      $startText.html(start.format(SHOWDATE));
      $start.attr('xdate', start.format(SHOWDATE));
    }
    var cbEnd = function (start) {
      $endText.html(start.format(SHOWDATE));
      $end.attr('xdate', start.format(SHOWDATE));
    }
    var options = {
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
    $start.daterangepicker(options, cbStart);
    $end.daterangepicker(options, cbEnd);
    cbStart(_date);
    cbEnd(_date);
  }

  /**
   * 初始化多选下拉框
   */
  function initSelector () {
    $('.data-type').selectpicker()
    $('.platform-type').selectpicker()
    buildSelector('.data-area', {
      navData: window.REGION,
      termData: window.AREA,
      preData: window.REGION_CODE_PREFIX,
      title: '选择投放地区'
    })
  }

  /**
   * 获取查询条件
   * @return {JSON} 包含了一系列的查询条件
   */
  function getForms () {
    var startDate = $('#startDate').attr('xdate');    // 开始时间
    var endDate = $('#endDate').attr('xdate');        // 结束时间
    var type = $('select.data-type').val().join(','); // 类型
    var regions = $('.data-area').data('val') || 'all';        // 投放地区的数据
    var platform = $('select.platform-type').val();   // 投放系统
    var adId = $('#ad-id').val();                     // 广告ID

    var $group = $('.group-list input:checked');
    var groupList = [];
    $group.each(function (_, item) {
      groupList.push($(item).val())
    });
    var group = groupList.join(',');                  // 分组条件

    var $show = $('.show-list input:checked');
    var showList = [];
    $show.each(function (_, item) {
      showList.push($(item).val())
    });
    var show = showList.join(',');                  // 展示指标

    var data = {
      startDate: startDate,
      endDate: endDate,
      type: type,
      regions: regions,
      platform: platform,
      adId: adId,
      group: group,
      show: show
    }

    return data;
  }

  /**
   * 拿到参数发请求 并执行回调
   * @param  {JSON}   data       参数集合
   * @param  {Function} callback
   */
  function getData (data, callback) {
    toastr.info('loading...');
    $.ajax({
      method: 'get',
      dataType: 'JSON',
      data: data,
      url: '/data/report?action=search',
      success: function (result) {
        if (result.code === 200) {
          callback(result, data);
          toastr.clear();
          toastr.success('The data load success!');
        } else {
          toastr.error(result.msg);
        }
      }
    })
  }

  /**
   * 根据数据生成表格
   * @param  {JSON} data   数据的集合
   * @param  {JSON} config 发请求时的数据 需要用到里边的一些信息
   */
  function buildTable (result, config) {
    var data = result.data;
    var titles = [];

    if (config.group) {
      titles = titles.concat(config.group.split(','));
    }

    if (config.show) {
      titles = titles.concat(config.show.split(','));
    }

    if (titles.indexOf('day') < 0) {
      titles.unshift('day');
    }

    var str = '<table id="sort-table" class="table table-striped responsive-utilities jambo_table bulk_action">';

    // 拼接title
    str += '<thead><tr>';
    titles.forEach(function (key) {
      if (key) {
        str += '<th class="sorting">';
        str += getTitle(key);
        str += '</th>'
      }
    });
    str += '</tr></thead>';

    // 拼接数据
    str += '<tbody id="tablemain">';
    data.forEach(function (item) {
      if (item) {
        str += '<tr>';
        titles.forEach(function (key) {
          if (key) {
            str += '<td>';
            str += getValue(key, item, config);
            str += '</td>'
          }
        });
        str += '</tr>';
      }
    });
    str += '</tbody>';
    str += '</table>';

    $('#data-table').html(str);

    $('#sort-table').DataTable({
      order: [[0, 'desc']],
      searching: false,
      lengthMenu: false,
      bInfo: false,
      bFilter: false,
      bPaginate: false
    });
  }

  /**
   * 根据英文title生成中文title
   * @param  {String} key title
   * @return {String}
   */
  function getTitle (key) {
    var titles = {
      day: '日期',
      type: '广告类型',
      region: '投放地区',
      platform: '投放系统',
      adm_id: '广告ID',
      is_show: '曝光',
      is_hidden: '关闭',
      is_click: '点击',
      is_liked: '点赞'
    }
    return titles[key] || key;
  }

  /**
   * 根据key从item中取出值 因为可能不同的列需要不同的处理 所以把config也传进去了
   * @param  {[type]} key    [description]
   * @param  {[type]} item   [description]
   * @param  {[type]} config [description]
   * @return {[type]}        [description]
   */
  function getValue (key, item, config) {
    switch (key) {
      case 'day':
        if (config.group.indexOf('day') < 0) {
          return moment(config.startDate, 'YYYYMMDD').format('YYYY-MM-DD') + ' ~ ' + moment(config.endDate, 'YYYYMMDD').format('YYYY-MM-DD');
        }
        return moment(item[key], 'YYYYMMDD').format('YYYY-MM-DD');
      break;
      case 'type':
        return MAP.TYPE[item[key]] || item[key];
      break;
      case 'platform':
        return MAP.PLATFORM[item[key]] || item[key];
      break;
      case 'region':
        for (var index in window.REGION_CODE_PREFIX) {
          var obj = window.REGION_CODE_PREFIX[index];
          if (item[key] + '_' === obj) {
            return getValue('en2cn', index);
          } else {
            return window.CITYMAP[item[key]] || item[key];
          }
        }
        return item[key];
      break;
      case 'en2cn':
        for (var index in window.REGION) {
          var obj = window.REGION[index];
          if (item === obj.value) {
            return obj.title;
          }
        }
      break;
      default :
      return item[key] || 0;
      break;
    }
  }

  /**
   * 绑定查询事件
   */
  function bindSearch () {
    $('#search').on('click', function () {
      var data = getForms();

      getData(data, buildTable);
    });
  }

  init()
})();
