;
(function() {
  function load () {
    toastr.info('loading...');
    $.ajax({
      url: '/data/members?action=get_members',
      method: 'get',
      dataType: 'json',
      success: function (data) {
        if (data.code === 200) {
          var datas = data.data;
          var index = 0;
          var len = datas.length;
          var adminStr =  '';
          var adminCount = 0;
          var watcherStr = '';
          var watcherCount = 0;
          for (; index < len; index++) {
            var item = datas[index];
            if (!item || !item.info || !item.info.name) continue;
            if (item.isAdmin) {
              adminCount++;
              adminStr += '<div class="col-md-4 col-sm-4 col-xs-12 animated fadeInDown">'
                +'<div class="well profile_view">'
                  +'<div class="col-sm-12">'
                    +'<div class="left col-xs-7">'
                      +'<ul class="list-unstyled">'
                        +'<li>' + item.info.name + '</li>'
                        +'<li>Blued ID:</li>'
                        +'<li>' + item.uid + '</li>'
                      +'</ul>'
                    +'</div>'
                    +'<div class="right col-xs-5 text-center">'
                      +'<img class="img-circle members-img" alt="" src="' + (item.info.avatar || 'https://dn-web-blued-cn.qbox.me/userfiles/006/701/811/9669!Head.jpg') +'">'
                    +'</div>'
                  +'</div>'
                  +'<div class="col-xs-12 bottom text-center">'
                      +'<button class="btn btn-success btn-xs" type="button">'
                        +'<i class="fa fa-user"></i> 已激活'
                      +'</button>'
                  +'</div>'
                +'</div>'
              +'</div>';
            } else {
              watcherCount++;
              watcherStr += '<div class="col-md-4 col-sm-4 col-xs-12 animated fadeInDown watcher-warp">'
                +'<div class="well profile_view">'
                  + (window.admin ? '<div class="col-sm-12" style="text-align:right;">'
                    +'<a class="close-link" data-uid="' + item.uid + '" data-name="' + item.info.name + '" href="javascript:;"><i class="fa fa-close"></i></a>'
                  +'</div>' : '')
                  +'<div class="col-sm-12">'
                    +'<div class="left col-xs-7">'
                      +'<ul class="list-unstyled">'
                        +'<li>' + item.info.name + '</li>'
                        +'<li>Blued ID:</li>'
                        +'<li>' + item.uid + '</li>'
                      +'</ul>'
                    +'</div>'
                    +'<div class="right col-xs-5 text-center">'
                      +'<img class="img-circle members-img" alt="" src="' + (item.info.avatar || 'https://dn-web-blued-cn.qbox.me/userfiles/006/701/811/9669!Head.jpg') +'">'
                    +'</div>'
                  +'</div>'
                  +'<div class="col-xs-12 bottom text-center">'
                      +'<a class="btn btn-primary" type="button" href="/settings/permission?uid=' + item.uid + '">'
                        +'<i class="fa fa-user"></i> 权限设置'
                      +'</a>'
                  +'</div>'
                +'</div>'
              +'</div>'
            }
          }
          $('#admin-list').append(adminStr);
          $('#admin-count').html(adminCount);
          $('#watcher-list').append(watcherStr);
          $('#watcher-count').html(watcherCount);

          $('.close-link').on('click', function () {
            confirmDelete($(this));
          })
        } else {
          toastr.error(data.msg);
        }
        toastr.clear();
      }
    });
  }

  function confirmDelete ($target) {
    if (confirm('确定要删除' + $target.data('name') + '吗？ \n该操作无法还原。')) {
      toastr.info('删除中...');
      $.ajax({
        url: '/settings/remove?uid=' + $target.data('uid'),
        method: 'get',
        dataType: 'json',
        success: function (data) {
          if (data.success) {
            toastr.success('删除成功');
            $target.parents('.watcher-warp').remove();
          } else {
            toastr.error(data.err);
          }

          toastr.clear();
        }
      })
    }
  }

  load();
})();
