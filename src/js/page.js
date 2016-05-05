console.log('page.js');

function bluedAjaxFunc(url, cb) {
  $.ajax({
    url: url,
    success: function(res) {
      cb(res);
    }
  });
}

function bluedGetQs(name) {
  var arr = location.search.split('?');
  var num = '';
  if (arr.length > 1) {
    var qs = arr[1].split('&');
    for (var i = 0; i < qs.length; i++) {
      if (qs[i].indexOf(name + '=') !== -1) {
        num = qs[i].split('=')[1];
      }
    }
    return num;
  } else {
    return false;
  }
}

function bluedGetCookie(c_name) {
  if (document.cookie.length > 0) {
    var c_start = document.cookie.indexOf(c_name + "=")
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1
      var c_end = document.cookie.indexOf(";", c_start)
      if (c_end == -1) {
        c_end = document.cookie.length
      }
      return unescape(decodeURI(document.cookie.substring(c_start, c_end)))
    }
  }
  return ""
}

function bluedSetCookie(c_name, value, expiredays) {
  var exdate = new Date();
  exdate.setHours(exdate.getHours() + expiredays);
  document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toUTCString());
}

function numberAddComma(num) {
  var str = num + '';
  return str.split('').reverse().join('').replace(/(\d{3})/g, '$1,').replace(/\,$/, '').split('').reverse().join('');
}

function buildTable (data, timeline, keys, headers, buildRow, title) {
  var templete = '';
  var index = 0;
  keys = keys || getKeys(data);
  buildRow = buildRow || _buildRow;
  var headerStr = '<th>' + (headers || keys).join('</th><th>') + '</th>';
  templete +='<div class="dashboard_graph x_panel">'
        +'<div class="row x_title">'
          +'<div class="col-md-6">'
            +'<h3>' + (title || '') +'<small>数据展示</small></h3>'
          +'</div>'
        +'</div>'
        +'<div class="x_content">'
          +'<table class="table table-striped responsive-utilities jambo_table bulk_action">'
            +'<thead>'
              +'<tr>'
                +'<th>#</th>'
                +headerStr
              +'</tr>'
            +'</thead>'
            +'<tbody id="tablemain">'
              + buildRow(timeline, data, keys)
          +'</table>'
        +'</div>'
        +'<div class="clearfix"></div>'
  +'</div>';

  function _buildRow (timeline, datas, titles) {
    var str = '';
    var index = 0;
    var len = timeline.length;
    var titleLen = titles.length;
    for (; index < len; index++) {
      str += '<tr>';
      str += '<td>' + timeline[index] + '</td>';
      for (var titleIndex = 0; titleIndex < titleLen; titleIndex++) {
        str += '<td>' + (datas[titles[titleIndex]][index] || '') + '</td>';
      }
      str += '</tr>';
    }
    return str;
  }

  return templete;
}

function getKeys (obj) {
  var arr =[];
  var index = 0;
  for (arr[index++] in obj);
  return arr;
}

/*
  用于合并数据
  默认用date做key
  返回一个 json
  目前用于用户留存
  data1 结构为
    { name: xxx,
      value: xxx }
  data2结构为
    { name: xxx,
      col1: xxx,
      col2: xxx,
      coln: xxx }
  需要将数据合并为
    [{ name: xxx,
      value: xxx },
    { name: xxx,
      value: xxx }...]
    date 用于生成json的key key为日期
    unit 为日期的格式 天 周 月
    key 为两个json数据中相对应的那一列的key
    value 为data1的值的key
    keys 为data2中要被转换的那些列的key
    title 如果有值 则覆盖自动生成的 数据的name的值
 */
function generatorData (data1, data2, date, unit, key, value, keys, title) {
  var data = {};
  var orders = [];
  var row = data[Utils.buildShaft(0, date, unit)] = [];
  for (var index = 0; index < data1.length; index++) {
    var item = {};
    item.name = title || data1[index][key];
    item.value = data1[index][value];
    orders.push(item.name);
    row.push(item);
  }
  for (var i = 0; i < keys.length; i++) {
    var row = data[Utils.buildShaft(i + 1, date, unit)] = [];
    for (var oIndex = 0; oIndex < orders.length; oIndex++) {
      for (var index = 0; index < data2.length; index++) {
        if (data2[index][key] === orders[oIndex]) {
          var item = {};
          item.name = title || orders[oIndex];
          item.value = data2[index][keys[i]];
          row.push(item);
        }
      }
    }
  }


  return data;
}

// 将数据中的数量超出 length参数 的值 后边的数据砍掉
function sliceData (data, length) {
  for (var key in data) {
    if (data[key].length > length) {
      data[key] = data[key].slice(0, length);
    }
  }
  return data;
}
