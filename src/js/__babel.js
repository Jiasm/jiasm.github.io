'use strict';

//引入多说

var duoshuoQuery = {
  short_name: "jiasm"
};
var ds = document.createElement('script');
ds.src = '//static.duoshuo.com/embed.js';
ds.charset = 'UTF-8';
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ds);
//引入多说 end

// 引入百度统计
var _hmt = _hmt || [];
(function () {
  var hm = document.createElement('script');
  hm.src = '//hm.baidu.com/hm.js?4d095165e26e8e13e47c1b7eda944091';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
})();
// 引入百度统计 end

window.addEventListener('load', function () {
  var cls = new Cls($('.wrap'), $('.eraser'));
  var router = new Router(window);
  var $body = $(document.body);

  router.router('/', index).router('/blog/:id', blog).unknown(function () {
    this.render('/');
  }).hold();

  /**
   * 加载首页
   */
  function index() {
    getJSON('feed/index.js', function (error, dataList) {
      if (error) return console.log(error);
      var str = '\n        <header><h2>全部文章</h2></header>\n        <ul class="article-list article" id="article-list">\n        ' + buildItem(dataList.data) + '\n        </ul>\n      ';
      $('#content').html(str);
      loadComplete();
    });
  }

  /**
   * 加载博客
   * @param  {Object} param router返回的参数
   */
  function blog(param) {
    var id = param.id;
    getJSON('feed/' + id + '.js', function (error, data) {
      if (error) return console.log(error);
      var str = '\n        <article class="blog-wrap">\n          ' + parseString(data.content) + '\n        </article>\n        <section class="ds-thread" id="jarvis-comments" data-thread-key="' + data.id + '" data-title="' + data.title + '" data-url="jiasm.github.io"></section>\n      ';
      $('#content').html(str);
      document.title = data.title;
      loadComplete();
    });
  }

  /**
   * 根据传进来的集合进行生成dom
   * @param  {Array} list  数据集
   * @return {String}      生成好的dom片段
   */
  function buildItem(list) {
    return list.reverse().map(function (item) {
      return '\n        <li class="article-item">\n          <span class="title-name">\n            <a class="title-link" href="#/blog/' + item.id + '" title="' + item.title + '" id="' + item.id + '">\n              ' + item.title + '\n            </a>\n          </span>\n          <time class="title-date">' + item.postDate + '</time>\n          <span class="ds-thread-count" data-thread-key="' + item.id + '" data-count-type="comments"></span>\n        </li>\n      ';
    }).join('');
  }

  /**
   * 获取json数据的一个简单封装
   * @param  {String}   url      url
   * @param  {Function} callback 回调 默认第一个参数为error 如果有的话
   */
  function getJSON(url, callback) {
    $.ajax({
      url: url,
      success: function success(data) {
        callback(null, data);
      },
      error: function error(_error) {
        callback(_error);
      },
      dataType: 'json'
    });
  }

  /**
   * 将多余的转义符干掉
   * @param  {String} str 原字符串
   * @return {String}     过滤后的字符串
   */
  function parseString(str) {
    return str.replace(/\\([^ts])?/g, function (_, $1) {
      return $1 ? $1 === 'n' ? '\n' : $1 : _;
    });
  }

  /**
   * 加载dom完毕 需要设置多说评论框的加载 以及code语法高亮的解析
   */
  function loadComplete(config) {
    config = config || {};
    document.title = config.title || '首页';
    // document.body.scrollTop = '0px'
    DUOSHUO.init();
    var countList = $('.ds-thread-count');
    countList.each(function (_, item) {
      if (!item.innerHTML) {
        item.innerHTML = '暂无评论';
      }
    });
    $body.addClass('complete');
    Prism.highlightAll(); // 语法高亮
    cls.clean();
  }
});