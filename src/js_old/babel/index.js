'use strict'

// 引入百度统计 & 多说
var _hmt = _hmt || []
var duoshuoQuery = {
  short_name: 'jiasm'
};
(function () {
  var hm = document.createElement('script')
  var ds = document.createElement('script')
  hm.src = '//hm.baidu.com/hm.js?4d095165e26e8e13e47c1b7eda944091'
  ds.src = '//static.duoshuo.com/embed.js'
  var s = document.getElementsByTagName('script')[0]
  s.parentNode.insertBefore(hm, s)
  s.parentNode.insertBefore(ds, s)
})()
// 引入百度统计 & 多说 end

window.addEventListener('load', function () {
  var router = new Router(window)  // @TODO 加上个before after就更完美了
  var $win = $(window)
  var $body = $(document.body)
  var $content = $('#content')
  var $go2top = $('#go2top')

  /**
   * 初始化页面
   */
  function init () {
    initRouter()
    bindEvent()
  }

  /**
   * 注册router
   */
  function initRouter () {
    router
      .router('/', index)
      .router('/blog/:id', blog)
      .unknown(function () {
        this.render('/')
      })
      .hold()
  }

  /**
   * 绑定滚动事件
   */
  function bindEvent () {
    $win.on('scroll', srollHandler)
    $go2top.on('click', go2topHandler)
  }

  /**
   * 加载首页
   */
  function index () {
    loading()
    getJSON('feed/index.js', function (error, dataList) {
      if (error) return console.log(error)
      var str = `
        <header><h2>全部文章</h2></header>
        <ul class="article-list article" id="article-list">
        ${buildItem(dataList.data)}
        </ul>
      `
      loadComplete({
        content: str
      })
    })
  }

  /**
   * 加载博客
   * @param  {Object} param router返回的参数
   */
  function blog (param) {
    loading()
    var id = param.id
    getJSON(`feed/${id}.js`, function (error, data) {
      if (error) return console.log(error)
      var str = `
        <article class="blog-wrap">
          ${parseString(data.content)}
        </article>
        <section class="ds-thread" id="jarvis-comments" data-thread-key="${data.id}" data-title="${data.title}" data-url="jiasm.github.io"></section>
      `
      loadComplete({
        title: data.title,
        content: str
      })
    })
  }

  /**
   * 根据传进来的集合进行生成dom
   * @param  {Array} list  数据集
   * @return {String}      生成好的dom片段
   */
  function buildItem (list) {
    return list.reverse().map(item => {
      return `
        <li class="article-item">
          <span class="title-name">
            <a class="title-link" href="#/blog/${item.id}" title="${item.title}" id="${item.id}">
              ${item.title}
            </a>
          </span>
          <time class="title-date">${item.postDate}</time>
          <span class="ds-thread-count" data-thread-key="${item.id}" data-count-type="comments"></span>
        </li>
      `
    }).join('')
  }

  /**
   * 监听滑动事件 目前只是处理了go2top
   * @param  {Event} e
   */
  function srollHandler (e) {
    if ($win.scrollTop() >= 666) {
      $go2top.show()
    } else {
      $go2top.hide()
    }
  }

  /**
   * 监听go2top点击的事件
   * @return {[type]} [description]
   */
  function go2topHandler () {
    $('body,html').animate({
      scrollTop: 0
    }, 1e3)
  }

  /**
   * 获取json数据的一个简单封装
   * @param  {String}   url      url
   * @param  {Function} callback 回调 默认第一个参数为error 如果有的话
   */
  function getJSON (url, callback) {
    $.ajax({
      url: url,
      success: function (data) {
        callback(null, data)
      },
      error: function (error) {
        callback(error)
      },
      dataType: 'json'
    })
  }

  /**
   * 将多余的转义符干掉
   * @param  {String} str 原字符串
   * @return {String}     过滤后的字符串
   */
  function parseString (str) {
    return str.replace(/\\([^ts])?/g, function (_, $1) { return $1 ? ($1 === 'n' ? '\n' : $1) : _ })
  }

  /**
   * 将当前页面改为loading状态
   */
  function loading () {
    $body.removeClass('complete')
  }

  /**
   * 加载dom完毕 需要设置多说评论框的加载 以及code语法高亮的解析
   */
  function loadComplete (config) {
    config = config || {}
    $content.html(config.content)
    document.title = config.title || '首页'
    document.body.scrollTop = '0px'
    DUOSHUO.init()
    var countList = $('.ds-thread-count')
    countList.each(function (_, item) {
      if (!item.innerHTML) {
        item.innerHTML = '暂无评论'
      }
    })
    $body.addClass('complete')
    Prism.highlightAll() // 语法高亮
  }

  init()
})