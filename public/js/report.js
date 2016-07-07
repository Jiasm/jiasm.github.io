'use strict';
;(function () {
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
    $.ajax({
      method: 'get',
      dataType: 'JSON',
      data: data,
      url: '/data/report?action=search',
      success: function (result) {
        callback(result, data)
      }
    })
  }

  /**
   * 根据数据生成表格
   * @param  {JSON} data   数据的集合
   * @param  {JSON} config 发请求时的数据 需要用到里边的一些信息
   */
  function buildTable (data, config) {
    console.log(data);
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
