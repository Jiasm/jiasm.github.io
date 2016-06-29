// "use strict"
// //引入多说
// var duoshuoQuery = {
//     short_name: "jiasm"
// }
// var ds = document.createElement('script')
// ds.type = 'text/javascript'
// ds.async = true
// ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js'
// ds.charset = 'UTF-8'
// (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ds)
// //引入多说 end
// //改装一下多说- -
// function loadComplete() {
//     document.body.scrollTop = "0px"
//     DUOSHUO.init()
//     var countList = $(".ds-thread-count")
//     countList.each(function(_, item) {
//         if (!item.innerHTML)
//             item.innerHTML = "暂无评论"
//     })
//     document.body.className += "complete"
//     Prism.highlightAll() // 语法高亮
// }
// onload = function() {
//     location.search ? change() : init()
// }
//
// function init() {
//     require(['feed/index'], function(_data) {
//         document.title = "首页"
//         var datas = _data.data
//         var $panel = document.createDocumentFragment()
//         var $article = createElement("li")
//         var $title = createElement("p")
//         var $postTitle = createElement("a")
//         var $dateTitle = createElement("time")
//         var $comments = createElement("p")
//         $article.className = "article"
//         $title.className = "title"
//         $postTitle.className = "post-title"
//         $dateTitle.className = "date-title"
//         for (var len = datas.length - 1 len >= 0 len--) {
//             var data = datas[len]
//             $article = $article.cloneNode()
//             $title = $title.cloneNode()
//             $postTitle = $postTitle.cloneNode()
//             $dateTitle = $dateTitle.cloneNode()
//             $comments = $comments.cloneNode()
//             $postTitle.innerHTML = data.title
//             $postTitle.href = "?page=" + data.id
//             $postTitle.title = data.title
//             $postTitle.id = data.id
//             $dateTitle.innerHTML = data.postDate
//             $postTitle.appendChild($dateTitle)
//             $comments.innerHTML = '<span class="ds-thread-count" data-thread-key="' + data.id + '" data-count-type="comments"></span>'
//             $title.appendChild($postTitle)
//             $article.appendChild($title)
//             $article.appendChild($comments)
//             $panel.appendChild($article)
//         }
//         document.getElementById("article-list").appendChild($panel)
//         loadComplete()
//     })
// }
//
// function change() {
//     var key = location.search.substring(1)
//     var search = generate(key)
//     require(["feed/" + search.page], function(_data) {
//         build(_data, document.getElementById("main"))
//     })
// }
//
// function generate(key) {
//     var kvs = key.split("&"),
//         kv, len, obj = {}
//     for (var len = kvs.length - 1, kv = kvs[len].split("=") len >= 0 kv = kvs[len--].split("=")) {
//         obj[kv[0]] = kv[1]
//     }
//     return obj
// }
//
// function build(data, container) {
//     var $panel = document.createDocumentFragment()
//     var $section = createElement("section")
//     var $header = createElement("header")
//     var $postTitle = createElement("h1")
//     var $postDate = createElement("time")
//     var $content = createElement("section")
//     $postTitle.innerHTML = data.title
//     $postDate.innerHTML = data.postDate
//     $header.appendChild($postTitle)
//     $header.appendChild($postDate)
//     $section.appendChild($header)
//     $content.innerHTML = data.content
//     $section.appendChild($content)
//     $panel.appendChild($section)
//     //添加多说评论框
//     var duoshuoBox = []
//     duoshuoBox.push('<article class="ds-thread" data-thread-key="')
//     duoshuoBox.push(data.id)
//     duoshuoBox.push('" data-title="')
//     duoshuoBox.push(data.title)
//     duoshuoBox.push('" data-url="jiasm.github.io"></article>')
//     document.title = data.title
//     container.innerHTML = $section.outerHTML + duoshuoBox.join("")
//     loadComplete()
// }
//
// function createElement(tag) {
//     return document.createElement(tag)
// }
//
// $(window).scroll(function() {
//     $(window).scrollTop() > 100 ? $("#go2top").fadeIn(1000) : $("#go2top").fadeOut(1000)
// })
//
// $("#go2top").click(function() {
//     $('body,html').animate({
//         scrollTop: 0
//     }, 1000)
// })


//引入多说
var duoshuoQuery = {
    short_name: "jiasm"
}
var ds = document.createElement('script');
ds.src = '//static.duoshuo.com/embed.js';
ds.charset = 'UTF-8';
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ds);
//引入多说 end

// 引入百度统计
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement('script');
  hm.src = '//hm.baidu.com/hm.js?4d095165e26e8e13e47c1b7eda944091';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
})()
// 引入百度统计 end

window.addEventListener('load', function () {
  var router = new Router(window)
  var $body = $(document.body)

  router.router('/', index).hold()

  /**
   * 加载首页
   */
  function index () {
    $.ajax({
      url: 'feed/index.js',
      success: function (dataList) {
        var str = `
          <header><h2>全部文章</h2></header>
          <ul class="article-list" id="article-list">
          ${buildItem(dataList.data)}
          </ul>
        `
        $('#content').html(str)
        loadComplete()
      },
      dataType: 'json'
    });
  }

  /**
   * 根据传进来的集合进行生成dom
   * @param  {Array} list  数据集
   * @return {String}      生成好的dom片段
   */
  function buildItem (list) {
    return list.reverse().map(item => {
      return `
        <li class="article">
          <p class="title">
            <a class="title-name" href="#/blog/${item.id}" title="${item.title}" id="${item.id}">
              ${item.title}<time class="post-date">${item.postDate}</time>
            </a>
          </p>
          <p>
            <span class="ds-thread-count" data-thread-key="${item.id}" data-count-type="comments"></span>
          </p>
        </li>
      `
    }).join('')
  }

  /**
   * 加载dom完毕 需要设置多说评论框的加载 以及code语法高亮的解析
   */
  function loadComplete (config) {
    config = config || {}
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
})
