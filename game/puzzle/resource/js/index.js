var handlerName = "ontouchstart" in document ? "touchstart" : "click";
$(function() {
    if (document.body.addEventListener) {
        document.body.addEventListener(handlerName, function() {});
    }
    var $loading = $(".loading").show(),
        $imgs = $("img[data-src]"),
        srcList = [],
        swiper, // swiper对象指向
        onInit = true; // 只有初次加载，构建切换选择图片的控件
    $imgs.each(function() {
        srcList.push($(this).data("src"));
    });
    loadResource(srcList, function() {
        $imgs.each(function() {
            var $this = $(this);
            $this.attr("src", buildImgSrc($this.data("src")));
        });
        $loading.hide();
        $("#panel").css({
            height: $(window).height()
        }).show();
    });
    // 切换难度事件
    var $diffItem = $(".diff-item .diff-default").on(handlerName, function() {
        $diffItem.parent().removeClass("selected");
        $(this).parent().addClass("selected");
    });
    $("#go2Play").on(handlerName, function() {
        if ($(".diff-item.selected").length <= 0) {
            alert("请选择游戏难度");
        } else {
            $("#diff-choice").hide(); // 隐藏选择难度面板
            $loading.show();
            // 选择的图片列表
            var swiperImgs = [
                'puzzle01.jpg',
                'puzzle02.jpg',
                'puzzle03.jpg',
                'puzzle04.jpg',
                'puzzle05.jpg'
            ];
            // 用于生成选择图片界面的资源数组
            // 命名为原图名+.min+图片后缀
            if (onInit) {
                onInit = false;
                loadResource(swiperImgs, function() {
                    generateSwiper(swiperImgs);
                    // 滑动选择图片
                    $("#example-image").show();
                    swiper = new Swiper('.swiper-container', {
                        pagination: '.swiper-pagination',
                        paginationClickable: true
                    });
                    $loading.hide();
                    swiper.slideTo(~~(swiperImgs.length / 2), 1);
                })
            } else {
                $("#example-image").show();
                swiper.init();
                $loading.hide();
                swiper.slideTo(~~(swiperImgs.length / 2), 1);
            }
        }
    });
    $("#next").on(handlerName, function() {
        $("#example-image").hide();
        var imgSrc = $(".swiper-slide-active img").attr("src"); // 获取当前选中图片的路径
        go2Play(imgSrc);
    })
});


function loadResource(imgs, callBack) {
    var len = imgs.length,
        loadCallBack = buildCompleteCall(len, callBack),
        _img;
    while (len--) {
        _img = new Image();
        _img.src = buildImgSrc(imgs[len]);
        $(_img).on("load", loadCallBack);
    }
}

function buildCompleteCall(count, func) {
    return function() {
        if (--count === 0) {
            func();
        }
    }
}

function generateSwiper(imgs) {
    var len = imgs.length,
        index = 0,
        innerHTML = "";
    for (; index < len; index++) {
        innerHTML += '<div class="swiper-slide">';
        innerHTML += '<img class="show-shadow" src="' + buildImgSrc(imgs[index]) + '" />';
        innerHTML += '</div>';
    }
    $(".swiper-pagination").html("");
    $(".swiper-wrapper").eq(0).html("").html(innerHTML);
}

function removeHandlers() {
    // 下方操作按钮事件重置及绑定
    $("#refresh").add($("#level")).add($("#pause")).off(handlerName + ".control");
    $(window).off("resize.puzzle");
}

// 显示提示消息
function showMessage(html) {
    $(".bar").css({
        width: $(window).width(),
        height: $(window).height()
    }).show(); // 遮罩层
    $("#message p").html(html); // 提示信息赋值
    $("#message").removeClass("zoomOutDown").addClass("zoomInUp").show(); // 动画事件
    $("#message #close").on(handlerName + ".handlers", function() {
        $(".bar").hide(); // 隐藏遮罩层
        $(this).off(handlerName + ".handlers"); // 移除该关闭事件
        $("#message").removeClass("zoomInUp").addClass("zoomOutDown"); // 移除动画class
        setTimeout(function() {
            $("#message").hide();
            $("#message p").html(""); // 清空提示信息
        }, 1000); // 动画结束后隐藏元素
    }); // 关闭提示框
}

// 游戏开始前的准备
function go2Play(imgSrc) {
    var level = $(".diff-item.selected").data("diff"),
        panelWidth = $(".panel").width(),
        $loading = $(".loading").show();;
    buildPosition(panelWidth);
    imgSrc = imgSrc.replace(/\.min/, ""); // 去掉.min
    loadResource([imgSrc], function() {
        $loading.hide();
        $("#game-panel").show(); // 显示游戏面板
        playGame(imgSrc, level);
    })
    $("#message p").html(""); // 将提示框文本清除
}

// 设置一些元素的大小
function buildPosition(panelWidth) {
    var panelHeight = $(window).height();
    $("#puzzle-bar").css({
        height: panelWidth,
        width: panelWidth
    });
    $("#puzzle-container").css({
        height: panelWidth + 2,
        top: -1,
        width: panelWidth + 2,
        left: -1
    });
    $(".nav-bar").css({
        height: panelHeight * 0.1,
        width: panelWidth
    });
    $(".game-panel").css({
        height: panelHeight,
        width: panelWidth
    });
    $("#placeholder").css({
        top: panelWidth + panelHeight * 0.1
    });
}
// 游戏初始化
function playGame(imgSrc, level) {
    var puzzle = new Puzzle("#puzzle-container").init({
        'imgSrc': imgSrc,
        'size': level, // 难度
        'record': true, // 是否记步
        'autoplay': true, // 是否自动开始
        'timing': true, // 是否计时
        'gap': 1 // 小块之间的间隔(px)
    }).success(function() {
        showMessage("恭喜您！<br/>过关成功");
    }).over(function() {
        showMessage("很遗憾！<br/>过关失败");
    }).step(counts).timer(timing);


    var defaultHours, // 默认小时数
        defaultMinute, // 默认分钟数
        defaultSeconds; // 默认秒数
    initScore(); // 初始化倒计时信息
    initButton("gpi");

    removeHandlers();
    $("#refresh").on(handlerName + ".control", refresh); // 刷新

    $("#level").on(handlerName + ".control", function() { // 调整难度
        puzzle.gamePause();
        $("#diff-choice").show();
        $("#game-panel").hide();
    })

    $("#pause").on(handlerName + ".control", function() { // 暂停或继续
        var gameStatus = puzzle.getGameStatus();
        if (gameStatus === 1) {
            puzzle.gamePause();
            initButton("gpri");
        } else if (gameStatus === 2) {
            puzzle.gameProceed();
            initButton("gpi");
        }
    })


    $(window).on("resize.puzzle", function() { // 窗口大小改变，调用拼图resize，重新设置大小
        var panelWidth = $(".panel").width();
        buildPosition(panelWidth);
        puzzle.resize(panelWidth);
    });


    // 重置倒计时
    function initScore() {
        defaultHours = 0; // 默认的小时数
        defaultMinute = 30; // 默认的分钟数
        defaultSeconds = 0; // 默认的秒数
        setTiming(defaultHours, defaultMinute, defaultSeconds);
        $("#steps").html(0); // 初始化步数
    }

    // 刷新
    function refresh() {
        puzzle.update().gameStart();
        initScore();
        initButton("gpi");
    }

    // 更改暂停或继续按钮图像路径
    function initButton(imgName) {
        $("#pause img").attr("src", buildImgSrc(imgName) + ".png");
    }

    // 每走一步触发的事件，参数为number 步数
    function counts(step) {
        $("#steps").html(step);
    }

    // 计时的事件，参数为number 秒
    function timing(time) {
        if (defaultHours <= 0 && defaultMinute <= 0 && defaultSeconds <= 1) { // 超时
            puzzle.gameOver();
            $("#hours").html("00");
            $("#minutes").html("00");
            $("#seconds").html("00");
            return false;
        }
        if (defaultSeconds-- === 0) { // 切换分钟 29:00切换至28:59
            if (defaultMinute-- === 0) {
                --defaultHours;
                defaultMinute = 59;
            }
            defaultSeconds = 59;
        }
        setTiming(defaultHours, defaultMinute, defaultSeconds);
    }

    function setTiming(h, m, s) {
        $("#hours").html((h + "").length === 1 ?
            "0" + h :
            h); // 初始化小时
        $("#minutes").html((m + "").length === 1 ?
            "0" + m :
            m);
        $("#seconds").html((s + "").length === 1 ?
            "0" + s :
            s);
    }
}

function buildImgSrc(imgName) {
    return /\//.test(imgName) ? imgName : "resource/image/" + imgName;
}
