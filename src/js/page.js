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

function buildTable (config) {
  var templete = '';
  var index = 0;
  var data = config.data;
  var timeline = config.timeline;
  var keys = config.keys || getKeys(data);
  var headers = config.headers || keys;
  var buildRow = config.buildRow || _buildRow;
  var title = config.title || '';

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

// 将数据中的数量超出 length参数 的值 后边的数据砍掉
function sliceData (data, length) {
  for (var key in data) {
    if (data[key].length > length) {
      data[key] = data[key].slice(0, length);
    }
  }
  return data;
}
