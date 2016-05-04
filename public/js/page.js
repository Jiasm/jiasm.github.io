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
