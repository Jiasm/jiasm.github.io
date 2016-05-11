;
(function() {

  function init () {
    var authority = $('#authority').val();
    if (authority) {
      authority = JSON.parse(authority);
      // 选中已有权限
      for (var key in authority) {
        $('#' + authority[key]).iCheck('check');
      }
    }

    function reset () {
      $('.rule-setting .icheckbox_flat-green .flat').iCheck('uncheck');
    }

    function commit () {
      var rulesDOM = $('.rule-setting .icheckbox_flat-green.checked .flat');
      var rules = [];
      rulesDOM.each(function (_, item) {
        rules.push($(item).attr('id'));
      });
      $.ajax({
        url: '/data/permission?action=set_authority&rules=' + JSON.stringify(rules) + '&uid=' + GetQueryString('uid'),
        method: 'get',
        dataType: 'json',
        success: function (data) {
          if (data.data === 1) {
            toastr.success('更新成功');
            location.href = '/settings';
          } else if (data.data === 0) {
            toastr.error('该用户不存在');
          } else {
            toastr.error(data.msg);
          }
        }
      })
    }

    $('#reset').on('click', reset);
    $('#commit').on('click', commit);
  }

  function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
    var r = window.location.search.substr(1).match(reg);
    if (r!=null) return (r[2]); return null;
  }

  init();

})();
