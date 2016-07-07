'use strict';

;(function (factory) {
    window.buildSelector = window.buildSelector || factory(window);
})(function (win) {

  var stylePre = 'tab-selector-';
  var buildSelector = function (selector, config) {

    var $container = $(selector);
    var $text = $container.find('.shower');
    var title = config.title;

    // 添加自定义的dom

    var $panel = appendDom($container, config);

    // 点击文本框可以隐藏或显示
    $container.on('click', function () {
      $panel.toggle()
    });
    // 点击取消可以隐藏
    $('.tab-selector-cancel').on('click', function () {
      $panel.hide()
    });
    // 点击其他区域 也要隐藏它
    $(window).on('click', function (e) {
      var $this = $(e.target);
      if ($container.has($this).length === 0 && $this.parents('.' + stylePre + 'container').length === 0 && !$this.hasClass(stylePre + 'container')) {
        $panel.hide()
      }
    });
    // 点击确定可以隐藏
    $('.tab-selector-define').on('click', function () {
      var $checkboxs = $('.tab-selector-content-title');
      var checkLen = $checkboxs.filter(':checked').length;
      if (checkLen === 0 || $checkboxs.length === checkLen) {
        $container.find('.pull-left').text('全部')
        $container.data('val', 'all')
      } else {
        var text = [];
        var val = [];
        var $tabs = $('.tab-selector-checkbox');
        $tabs.each(function (_, item) {
          var $item = $(item);
          // 如果某个洲被选中了 则不去找下边的城市
          if ($item.prop('checked')) {
            text.push($item.data('text'));
            val.push($(item).val());
          } else {
            // 获取对应tab下选中的地区
            var $boxs = $('.tab-selector-content-' + $item.data('tab-index') + ' .tab-selector-content-title:checked');
            $boxs.each(function (_, item) {
              text.push($(item).data('text'));
              val.push($(item).val());
            });
          }
        });
        $container.data('val', val.join(','));
        $container.find('.pull-left').text(text.join(','));
      }
      $panel.hide()
    });
    // 点击第一级tab时 显示对应的tab页
    $('.tab-selector-nav-btn').on('click', function () {
      var index = $(this).data('tab-index');
      showTab(index);
    });
    // 点击tab的checkbox时 选中下边的所有checkbox
    $('.tab-selector-checkbox').on('click', function () {
      var index = $(this).data('tab-index');
      toggleCheck($(this), index)
    });
    // 点击某个城市的checkbox 也需要进行一些处理
    $('.tab-selector-content-btn').on('click', function () {
      var $this = $(this).find('input[type="checkbox"]');
      var $container = $(this).parents('.tab-selector-content');
      var index = $container.data('tab-index');
      var $tab = $('.tab-selector-checkbox-' + index);
      // 选中当前的
      if ($this.prop('checked') === true) {
        // 说明已经被全选了 需要将外层选中
        if ($container.find('input[type="checkbox"]').length === $container.find('input[type="checkbox"]:checked').length) {
          $tab.prop('checked', true);
          $tab.prop('indeterminate', false);
        } else {
          $tab.prop('indeterminate', true);
        }
      } else {
        // 说明现在处于全选状态
        if ($tab.prop('checked') === true) {
          $tab.prop('checked', false);
        }
        // 说明没有全部取消勾选
        if ($container.find('input[type="checkbox"]:checked').length !== 0) {
          $tab.prop('indeterminate', true);
        }
      }
    });

    showTab(0)
  }

  function toggleCheck ($this, index) {
    var checkList = $('.tab-selector-content-' + index).find('input[type="checkbox"]');
    // 表示有没有被选中的 执行全选
    if (checkList.length !== checkList.filter(':checked').length) {
      checkList.prop('checked', true)
      $this.prop('checked', true)
    } else {
      checkList.prop('checked', false)
      $this.prop('checked', false)
    }
  }

  function showTab (index) {
    $('.tab-selector-nav').removeClass('selected');
    $('.tab-selector-content').hide();
    $('.tab-selector-content-' + index).show();
    $('.tab-selector-nav-' + index).addClass('selected');
  }

  function appendDom ($dom, config) {
    var $parent = $dom.parent();
    var $panel = $('<div class="' + stylePre + 'container">').css({
      top: $dom.height() + 3,
      position: 'absolute',
      display: 'none',
      height: 'auto',
      width: 'auto',
      'min-width': 65 * config.navData.length,
      border: '1px solid #ccc',
      background: '#fff'
    });
    $parent.append($panel);
    $panel.html(buildTree(config.navData, config.termData, config.preData, config.title));
    return $panel;
  }

  function entries (obj) {
    var arr = [];
    for (var key in obj) {
      arr.push([key, obj[key]])
    }
    return arr;
  }

  function buildItem (items, pre) {
    var str = '';
    var len = items.length;
    var index = 0;
    for (; index < len; index++) {
      var childItem = entries(items[index])[0];
      var title = childItem[0];
      var value = childItem[1];
      str += '<label class="' + stylePre + 'content-btn">';
      str += '<input class="' + stylePre + 'content-title" type="checkbox" value="' + pre + value + '" data-text="' + title + '" />';
      str += '<span>';
      str += title;
      str += '</span>';
      str += '</label>'
    }

    return str;
  }

  function buildTree (navData, termData, preData, title) {
    var str = '';
    var nav = '';
    var content = '';
    var index = 0;
    var len = navData.length;

    str += '<div class="' + stylePre + 'wrap">';

    // 选项卡的标题
    str += '<div class="' + stylePre + 'title">';
    str += '<h6>' + title + '</h6>';
    str += '<button class="' + stylePre + 'define">确定</button>';
    str += '<span class="' + stylePre + 'cancel">取消</span>';
    str += '</div>';
    // 选项卡的标题 end

    str += '<div class="ln_solid"></div>';

    nav += '<ul class="' + stylePre + 'nav-list">';
    content += '<div class="' + stylePre + 'content-list">';
    for (; index < len; index++) {
      var item = navData[index];
      var value = item.value;
      var title = item.title;
      var child = termData[value];
      var childLen = child.length;

      // 拼接tab的标题
      nav += '<li class="' + stylePre + 'nav ' + stylePre + 'nav-' + index + '">';
      nav += '<input type="checkbox" class="' + stylePre + 'checkbox ' + stylePre + 'checkbox-' + index + '" id="' + stylePre + 'checkbox-' + value +'" name="' + stylePre + 'checkbox" data-tab-index="' + index + '" data-text="' + title + '" value="' + preData[value].replace(/\_$/, '') +'" />'
      nav += '<span class="' + stylePre + 'nav-btn" data-tab-index="' + index + '" data-value="' + preData[value].replace(/\_$/, '') +'">';
      nav += title;
      nav += '</span>';
      nav += '</li>';
      // 拼接tab的标题 end

      // 拼接tab的内容
      content += '<div class="' + stylePre + 'content ' + stylePre + 'content-' + index + '" data-tab-index="' + index + '">'
      for (var j = 0; j < child.length; j++) {
        var childItem = entries(child[j])[0]; // 这个是包含 字母开头的 那个json
        var sort = childItem[0];
        var items = childItem[1];

        content += '<h6>' + sort + '</h6>';
        content += buildItem(items, preData[value]);
      }
      content += '</div>'
      // 拼接tab的内容 end
    }

    nav += '</ul>';
    content += '</div>'

    str += nav;
    str += '<div class="ln_solid"></div>';
    str += content;
    str += '</div>';

    return str;
  }

  return buildSelector;
});
