'use strict';

module.exports = function() {
  var now = new Date(); //当前日期
  // var now = new Date(now.getTime() - (86400000 * 7));
  // var nowDayOfWeek = now.getDay() - 1;
  var nowDayOfWeek = (now.getDay()) ? now.getDay() - 1 : 7 - 1; //今天本周的第几天
  var nowDay = now.getDate(); //当前日
  var nowMonth = now.getMonth(); //当前月
  var nowYear = now.getYear(); //当前年
  nowYear += (nowYear < 2000) ? 1900 : 0; //

  var lastMonthDate = new Date(); //上月日期
  lastMonthDate.setDate(1);
  lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);
  var lastYear = lastMonthDate.getYear();
  var lastMonth = lastMonthDate.getMonth();

  //格式化日期：yyyy-MM-dd
  function formatDate(date) {
    var myyear = date.getFullYear();
    var mymonth = date.getMonth() + 1;
    var myweekday = date.getDate();

    if (mymonth < 10) {
      mymonth = "0" + mymonth;
    }
    if (myweekday < 10) {
      myweekday = "0" + myweekday;
    }
    return (myyear + mymonth + myweekday);
  }

  //获得某月的天数
  function getMonthDays(myMonth) {
    var monthStartDate = new Date(nowYear, myMonth, 1);
    var monthEndDate = new Date(nowYear, myMonth + 1, 1);
    var days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
    return days;
  }

  //获得本季度的开始月份
  function getQuarterStartMonth() {
    var quarterStartMonth = 0;
    if (nowMonth < 3) {
      quarterStartMonth = 0;
    }
    if (2 < 6) {
      quarterStartMonth = 3;
    }
    if (5 < 9) {
      quarterStartMonth = 6;
    }
    if (nowMonth > 8) {
      quarterStartMonth = 9;
    }
    return quarterStartMonth;
  }

  //今天
  var getCurrentDate = new Date(nowYear, nowMonth, nowDay);
  var getCurrentDate = formatDate(getCurrentDate)

  //昨天
  var getYesterdayDate = new Date(nowYear, nowMonth, nowDay - 1);
  var getYesterdayDate = formatDate(getYesterdayDate);

  //获得本周的开始日期
  var getWeekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek);
  var getWeekStartDate = formatDate(getWeekStartDate);

  //获得本周的结束日期
  var getWeekEndDate = new Date(nowYear, nowMonth, nowDay + (6 - nowDayOfWeek));
  var getWeekEndDate = formatDate(getWeekEndDate);

  //获得上周的开始日期
  var getUpWeekStart = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek - 7);
  var getUpWeekStartDate = formatDate(getUpWeekStart);

  //获得上周的结束日期
  var getUpWeekEnd = new Date(nowYear, nowMonth, nowDay + (6 - nowDayOfWeek - 7));
  var getUpWeekEndDate = formatDate(getUpWeekEnd);

  //获得本月的开始日期
  var getMonthStartDate = new Date(nowYear, nowMonth, 1);
  var getMonthStartDate = formatDate(getMonthStartDate);

  //获得本月的结束日期
  var getMonthEndDate = new Date(nowYear, nowMonth, getMonthDays(nowMonth));
  var getMonthEndDate = formatDate(getMonthEndDate);

  //获得上月开始时间
  var getLastMonthStartDate = new Date(nowYear, lastMonth, 1);
  var getLastMonthStartDate = formatDate(getLastMonthStartDate);

  //获得上月结束时间
  var getLastMonthEndDate = new Date(nowYear, lastMonth, getMonthDays(lastMonth));
  var getLastMonthEndDate = formatDate(getLastMonthEndDate);

  // 获得当天的开始时间和结束时间(毫秒)
  var time = (Date.parse(getCurrentDate.substr(4, 2) + "/" + getCurrentDate.substr(6, 2) + "/" + getCurrentDate.substr(0, 4)) / 1000).toFixed(0);

  var obj = {
    today: getCurrentDate,
    todaystart: time,
    todayend: Number(time) + 86400,
    yesterday: getYesterdayDate,
    upWeekStart: getUpWeekStartDate,
    upWeekEnd: getUpWeekEndDate,
    upMonthStart: getLastMonthStartDate,
    upMonthEnd: getLastMonthEndDate,
    weekStart: getWeekStartDate,
    weekEnd: getWeekEndDate,
    monthStart: getMonthStartDate,
    monthEnd: getMonthEndDate,
  };
  return obj;
}
