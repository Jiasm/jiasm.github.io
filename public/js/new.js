;
(function () {
  $('#adduser').on('submit', function () {
    $('#user-submit').html('提交中...').attr('disabled', 'disabled');
     $.ajax({
       url: '/settings/adduser',
       method: 'post',
       data: {
         uid: $('#uid').val(),
         is_super: $('.roleInput:checked').val()
       },
       dataType: 'json',
       success: function (data) {
         if (data.success) {
           toastr.success('添加成功');
         } else {
           toastr.error(data.err);
         }
         $('#user-submit').html('提交').removeAttr('disabled');
       }
     })
     return false;
  })
})();
