$(function() {
    var getDelay = buildDelayStyle(),
        baseHandler = function($slide, count, $slides) {
            var $animates = $slide.find("[data-animate]");
            $animates.each(function(_, $tag) {
                $tag = $($tag);
                $tag.addClass($tag.data("animate")).removeData("animate");
            })
            $slide.addClass("canAnimate");
        };
        


    function registerHandler(baseHandler, handlersMap) {
        return function($slides, count) {
            var $slide = $slides.eq(count);
            location.hash = "pageNo=" + count;
            if ($slide.hasClass("canAnimate")) {
                return;
            } else {
                handlersMap && handlersMap[count] && handlersMap[count]($slide, count, $slides);
                baseHandler && baseHandler($slide, count, $slides);
            }
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
            return " delay-" + result[count + 1] + " ";
        }
    }

    var animateKey = " myAnimate ",
        neonKey = " neon ",
        animateObj = {
            className: animateKey
        },
        neonObj = {
            className: neonKey
        },
        Front = React.createClass({displayName: "Front",
            getNumbers: function () {
                var animateList = this.props.animateList;
                return this.props.numbers.map(function (title, index) {
                    return (
                        React.createElement("span", {key: "numbers" + title, className: (index && getDelay(index - 1)) + animateKey, "data-animate": animateList[index]}, 
                            React.createElement("span", React.__spread({},  neonObj), title)
                        )
                    )
                })
            },
            render: function () {
                return (
                    React.createElement("div", {className: animateKey + getDelay(this.props.animateList.length) + " hgroup", "data-animate": "rubberBand"}, 
                        React.createElement("h1", null, 
                            this.getNumbers()
                        ), 
                        React.createElement("h2", React.__spread({},  neonObj), this.props.title)
                    )
                )
            }
        }),
        Container = React.createClass({displayName: "Container",
            render: function () {
                return (
                    React.createElement("div", null, 
                        React.createElement("h2", {className: animateKey + (this.props.titleDelay || " "), "data-animate": this.props.titleAnimate}, 
                            React.createElement("span", React.__spread({},  neonObj), this.props.title)
                        ), 
                        React.createElement("div", {className: (this.props.articlesClass || "") + animateKey + (this.props.textDelay || ""), "data-animate": this.props.textAnimate || ""}, 
                            this.props.getChild()
                        )
                    )
                )
            }
        }),
        frameRender =  function () {
            return (
                React.createElement(Container, React.__spread({},  this.props, {getChild: this.buildContent}))
            )
        },
        Article = React.createClass({displayName: "Article",
            buildContent: function () {
                return this.props.articles.map(function (value, index) {
                    return (
                        React.createElement("p", React.__spread({key: this.props.page + "-item-" + index},  neonObj), 
                            value
                        )
                    )
                }.bind(this))
            },
            render: frameRender
        }),
        Table = React.createClass({displayName: "Table",
            buildContent: function () {
                var animates = this.props.dataTable.animates,
                    getAnimate = (function (animates, size) {
                        var count = 0;
                        return function () {
                            return animates[count++ % size];
                        }
                    })(animates, animates.length),
                    buildCell = function (text, cellName, index, animateType) {
                        return (
                            React.createElement("span", {key: cellName + index, className: " table-cell " + cellName + animateKey + getDelay(index), "data-animate": animateType}, 
                                React.createElement("span", React.__spread({},  neonObj), 
                                    text
                                )
                            )
                        )
                    };
                return this.props.dataTable.data.map(function (row, index) {
                    var title = row.title,
                        value = row.value;
                    return (
                            React.createElement("p", {key: this.props.page + "-item-" + index, className: "table-row"}, 
                                buildCell(title, "title", index, getAnimate()), 
                                (value ? buildCell(value, "value", index, getAnimate()) : "")
                            )
                    )
                }.bind(this))
            },
            render: frameRender
        }),
        Comment = React.createClass({displayName: "Comment",
            buildContent: function () {
                return (
                    React.createElement("div", {className: this.props.commentClass, "data-thread-key": this.props.threadKey, "data-title": this.props.dataTitle, "data-url": this.props.dataUrl})
                )
            },
            render: frameRender
        }),
        Summary = React.createClass({displayName: "Summary",
            buildComponent: function (config) {
                var component;
                switch (config.componentType) {
                    case "Front": component = (React.createElement(Front, React.__spread({},  config))); break;
                    case "Article": component = (React.createElement(Article, React.__spread({},  config))); break;
                    case "Table": component = (React.createElement(Table, React.__spread({},  config))); break;
                    case "Comment": component = (React.createElement(Comment, React.__spread({},  config))); break;
                    default: console.log("目测出错了"); component = (React.createElement("div", null, "error")); break;
                }
                return component;
            },
            getChild: function () {
                return this.props.pages.map(function (component, index) {
                    return (
                        React.createElement("div", {key: component.key, id: component.key, className: component.key + " swiper-slide " + (component.panelClass || " ")}, 
                            this.buildComponent(component)
                        )
                    )
                }.bind(this))
            },
            render: function () {
                return (
                    React.createElement("div", {className: "swiper-container"}, 
                        React.createElement("div", {className: "swiper-wrapper"}, 
                            this.getChild()
                        ), 
                        React.createElement("div", {className: "swiper-pagination neon"})
                    )
                )
            },
            componentDidMount: function () {
                var swiper = new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    direction: 'vertical',
                    onSlideChangeEnd: getChangeHandler(registerHandler(baseHandler))
                }),
                count = +(location.hash ? location.hash.match(/pageNo\=(\d+)?$/)[1] : 0);
                $("#loading").hide();
                if (count) {
                    swiper.slideTo(count);
                } else {
                    baseHandler($(".page1"), count);
                }
            }
        }),
        page1 = {
            key: "page1",
            page: "page1",
            componentType: "Front",
            panelClass: " table ",
            animateList: [
                "bounceInUp",
                "bounceInDown",
                "bounceInLeft",
                "bounceInRight"
            ],
            numbers: [2, 0, 1, 5],
            title: "年终总结"
        },
        page2 = {
            key: "page2",
            page: "page2",
            title: "2015年目标完成状况",
            componentType: "Table",
            titleAnimate: "bounceInUp",
            dataTable: {
                data: [{
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
                animates: [
                    "fadeInRightBig",
                    "fadeInLeftBig"
                ]
            },
            articlesClass: " table ",
            textAnimate: "slideInUp"

        },
        page3 = {
            key: "page3",
            page: "page3",
            title: "2015年这一年",
            componentType: "Article",
            titleAnimate: "fadeInRightBig",
            articles: [
                "2015年异常的快，也许是因为事情太多了，也许就是因为这一年本来就短，不管如何，这一年就这么过去了，人生并不像火车要通过每个站似的经过每一个生活阶段。人生总是直向前行走，从不留下什么。",
                "2015年自我感觉是比较不错的一年，学习了很多新技术，结交了一大波小伙伴，今年过的很<span class='big'>幸福</span>。"
            ],
            articlesClass: " article ",
            textAnimate: "slideInUp"

        },
        page4 = {
            key: "page4",
            page: "page4",
            title: "自我评价",
            componentType: "Article",
            titleAnimate: "rotateInDownRight",
            articles: [
                "虽然一直都在进步，但是自己也知道，还有很多不完美的地方，比如：",
                "过于粗心，经常导致代码带着bug上线- -",
                "不成熟，太轻易的就给人打保票，然后自己却做不到，搞得特别没意思。",
                "希望在新的一年里，自己做事能够更<span class='big'>稳重</span>些。"
            ],
            articlesClass: " article ",
            textAnimate: "rotateInDownLeft"

        },
        page5 = {
            key: "page5",
            page: "page5",
            title: "2016年目标",
            componentType: "Table",
            titleAnimate: "bounceInDown",
            dataTable: {
                data: [{
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
                animates: [
                    "rotateInDownLeft",
                    "rotateInDownRight",
                    "rotateInUpLeft",
                    "rotateInUpRight"
                ]
            },
            articlesClass: " table "
        },
        page6 = {
            key: "page6",
            page: "page6",
            title: "写在最后的话",
            componentType: "Article",
            titleAnimate: "bounceInUp",
            articles: [
                "父母恩，养育情。深似海，大如山。",
                "操劳苦，教养累，数不尽，报不完。",
                "常牵挂，多思念。情深深，意绵绵。",
                "声声诉，字字爱。衷心祝，永康健。",
                "爸妈，你们辛苦了！",
                "希望你们在新的一年里，身体健康，万事如意！"
            ],
            articlesClass: " article ",
            textAnimate: "fadeInUpBig"

        },
        page7 = {
            key: "page7",
            page: "page7",
            title: "评论区",
            componentType: "Comment",
            titleAnimate: "swing",
            threadKey: "summary2015",
            dataUrl: "jiasm.github.io",
            dataTitle: document.title,
            commentClass: "myRe ds-thread"

        };
    var pages = [
        page1,
        page2,
        page3,
        page4,
        page5,
        page6,
        page7
    ]
    ReactDOM.render(
        React.createElement(Summary, {pages: pages}),
        document.getElementById("content")
    )
})