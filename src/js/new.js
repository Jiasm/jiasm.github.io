;
(function () {
  $('#adduser').on('submit', function () {
    // uid不为纯数字
    if (!/^\d+$/g.test($('#uid').val())) {
      toastr.error('uid 格式错误');
    } else {
      $('#user-submit').html('提交中...').attr('disabled', 'disabled');
      var uid = $('#uid').val();
      var isSuper = +$('.roleInput:checked').val();
       $.ajax({
         url: '/settings/adduser',
         method: 'post',
         data: {
           uid: uid,
           is_super: isSuper
         },
         dataType: 'json',
         success: function (data) {
           if (data.success) {
             toastr.success('添加成功');
             if (isSuper === 1) { // 是管理员
               location.href = '/settings';
             } else if (isSuper === 0) { // 观察者
               location.href = '/settings/permission?uid=' + uid;
             }
           } else {
             toastr.error(data.err);
           }
           $('#user-submit').html('提交').removeAttr('disabled');
         }
       });
     }
     return false;
  })
})();
