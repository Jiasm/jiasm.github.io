"use strict";
//引入多说
var duoshuoQuery = {
    short_name: "jiasm"
};
var ds = document.createElement('script');
ds.type = 'text/javascript';
ds.async = true;
ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
ds.charset = 'UTF-8';
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ds);
//引入多说 end
//改装一下多说- -
function loadCompvare() {
    document.body.scrollTop = "0px";
    DUOSHUO.init();
    var countList = $(".ds-thread-count");
    countList.each(function(_, item) {
        if (!item.innerHTML)
            item.innerHTML = "暂无评论";
    })
    document.body.className += "complete";
    Prism.highlightAll(); // 语法高亮
}
onload = function() {
    location.search ? change() : init();
}

function init() {
    require(['feed/index'], function(_data) {
        var datas = _data.data;
        var $panel = document.createDocumentFragment();
        var $article = createElement("li");
        var $title = createElement("p");
        var $postTitle = createElement("a");
        var $dateTitle = createElement("time");
        var $comments = createElement("p");
        $article.className = "article";
        $title.className = "title";
        $postTitle.className = "post-title";
        $dateTitle.className = "date-title";
        for (var len = datas.length - 1; len >= 0; len--) {
            var data = datas[len];
            $article = $article.cloneNode();
            $title = $title.cloneNode();
            $postTitle = $postTitle.cloneNode();
            $dateTitle = $dateTitle.cloneNode();
            $comments = $comments.cloneNode();
            $postTitle.innerHTML = data.title;
            $postTitle.href = "?page=" + data.id;
            $postTitle.title = data.title;
            $postTitle.id = data.id;
            $dateTitle.innerHTML = data.postDate;
            $postTitle.appendChild($dateTitle);
            $comments.innerHTML = '<span class="ds-thread-count" data-thread-key="' + data.id + '" data-count-type="comments"></span>';
            $title.appendChild($postTitle);
            $article.appendChild($title);
            $article.appendChild($comments);
            $panel.appendChild($article);
        }
        document.getElementById("article-list").appendChild($panel);
        loadCompvare();
    });
}

function change() {
    var key = location.search.substring(1);
    var search = generate(key);
    require(["feed/" + search.page], function(_data) {
        build(_data, document.getElementById("main"))
    })
}

function generate(key) {
    var kvs = key.split("&"),
        kv, len, obj = {};
    for (var len = kvs.length - 1, kv = kvs[len].split("="); len >= 0; kv = kvs[len--].split("=")) {
        obj[kv[0]] = kv[1];
    }
    return obj;
}

function build(data, container) {
    var $panel = document.createDocumentFragment();
    var $section = createElement("section");
    var $header = createElement("header");
    var $postTitle = createElement("h1");
    var $postDate = createElement("time");
    var $content = createElement("section");
    $postTitle.innerHTML = data.title;
    $postDate.innerHTML = data.postDate;
    $header.appendChild($postTitle);
    $header.appendChild($postDate);
    $section.appendChild($header);
    $content.innerHTML = data.content;
    $section.appendChild($content);
    $panel.appendChild($section);
    //添加多说评论框
    var duoshuoBox = [];
    duoshuoBox.push('<article class="ds-thread" data-thread-key="');
    duoshuoBox.push(data.id);
    duoshuoBox.push('" data-title="');
    duoshuoBox.push(data.title);
    duoshuoBox.push('" data-url="jiasm.github.io"></article>');

    container.innerHTML = $section.outerHTML + duoshuoBox.join("");
    loadCompvare();
}

function createElement(tag) {
    return document.createElement(tag);
}

$(window).scroll(function() {
    $(window).scrollTop() > 100 ? $("#go2top").fadeIn(1000) : $("#go2top").fadeOut(1000);
});

$("#go2top").click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 1000);
});
