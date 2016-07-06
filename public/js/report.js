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
    var cbStart = function (start, end) {
      $startText.html(start.format(SHOWDATE));
      $start.attr('xdate', start.format(SHOWDATE));
    }
    var cbEnd = function (start, end) {
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
   * 绑定查询事件
   */
  function bindSearch () {
    $('#search').on('click', function () {
      console.log('search');
    });
  }

  init()
})();
