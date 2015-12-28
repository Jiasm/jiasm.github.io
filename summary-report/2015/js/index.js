$(function() {
    var getDelay = buildDelayStyle(),
        handlersMap = {
            1: getPage1,
            4: getPage4
        },
        baseHandler = function($slide, count, $slides) {
            var $animates = $slide.find("[data-animate]");
            $animates.each(function(_, $tag) {
                $tag = $($tag);
                $tag.addClass($tag.data("animate")).removeData("animate");
            })
            $slide.addClass("canAnimate");
            location.hash = "pageNo=" + count;
        };
    require(['../../js/swiper'], function(Swiper) {
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            direction: 'vertical',
            onSlideChangeEnd: getChangeHandler(registerHandler(baseHandler, handlersMap))
        }),
        count = location.hash ? location.hash.match(/\=(\d+)?$/)[1] : 0;
        if (count) {
            swiper.slideTo(count);
        }
            baseHandler($(".page1").eq(0), 0);
    });


    function registerHandler(baseHandler, handlersMap) {
        return function($slides, count) {
            var $slide = $slides.eq(count);
            if ($slide.hasClass("canAnimate")) {
                return;
            }
            handlersMap[count] && handlersMap[count]($slide, count, $slides);
            baseHandler && baseHandler($slide, count, $slides);
        }
    }

    function getChangeHandler(handlerFunc) {
        var $slides = $(".swiper-slide");
        return function(swiper) {
            handlerFunc($slides, swiper.activeIndex)
        }
    }

    // 拼一个延迟动画的style，顺便返回一个获取延迟多少多少的class的函数
    function buildDelayStyle() {
        var innerHtml = "",
            utilSize = 20,
            delay,
            result = {};
        while (--utilSize) {
            delay = utilSize / 2;
            innerHtml += ".myAnimate.delay-";
            innerHtml += (result[utilSize] = (delay + "").replace(/\./g, "d"), result[utilSize]);
            innerHtml += "{";
            innerHtml += "-webkit-animation-delay: ";
            innerHtml += delay
            innerHtml += "s;";
            innerHtml += "animation-delay: ";
            innerHtml += delay
            innerHtml += "s;";
            innerHtml += "}";
        }
        $("#delay").html(innerHtml);
        return function(count) {
            return result[count + 1];
        }
    }

    function getPage1() {
        var innerHtml = "",
            targets = [{
                title: "搭建自己的博客",
                value: "done"
            }, {
                title: "学习EcmScript6",
                value: "done"
            }, {
                title: "学习CSS3",
                value: "done"
            }, {
                title: "学习Nodejs",
                value: "done"
            }, {
                title: "换个新手机",
                value: "done"
            }, {
                title: "换个新电脑",
                value: "undone"
            }, {
                title: "体重减到70KG",
                value: "probably"
            }],
            len = targets.length,
            index = 0;
        while (index < len) {
            innerHtml += "<p class='table-row'>";
            innerHtml += "<span class='table-cell title myAnimate delay-";
            innerHtml += getDelay(index);
            innerHtml += "' data-animate='fadeInRightBig'>";
            innerHtml += "<span class='neon'>";
            innerHtml += targets[index].title;
            innerHtml += "</span>";
            innerHtml += "</span>";
            innerHtml += "<span class='table-cell value myAnimate delay-";
            innerHtml += getDelay(index);
            innerHtml += "' data-animate='fadeInLeftBig'>";
            innerHtml += "<span class='neon'>";
            innerHtml += targets[index].value;
            innerHtml += "</span>";
            innerHtml += "</span>";
            innerHtml += "</p>";
            index++;
        }
        $("#completeTable").html(innerHtml);
    }

    function getPage4() {
        var innerHtml = "",
            targets = [{
                title: "学习要出的EcmaScript7"
            }, {
                title: "学习有可能要出的CSS4"
            }, {
                title: "掌握React"
            }, {
                title: "掌握AngularJs"
            }, {
                title: "用NodeJs搭建自己的网站"
            }, {
                title: "买个域名"
            }, {
                title: "换个新电脑- -"
            }, {
                title: "把体重控制在68KG"
            }],
            animateList = [
                "rotateInDownLeft",
                "rotateInDownRight",
                "rotateInUpLeft",
                "rotateInUpRight"
            ],
            len = targets.length,
            index = 0;
        while (index < len) {
            innerHtml += "<p class='table-row'>";
            innerHtml += "<span class='table-cell title myAnimate delay-";
            innerHtml += getDelay(index);
            innerHtml += "' data-animate='";
            innerHtml += animateList[index % 4];
            innerHtml += "'>";
            innerHtml += "<span class='neon'>";
            innerHtml += targets[index].title;
            innerHtml += "</span>";
            innerHtml += "</span>";
            innerHtml += "</p>";
            index++;
        }
        $("#futureTable").html(innerHtml);
    }
})
var duoshuoQuery = {
    short_name: "jiasm"
};