'use strict';

function Cls (dom, $img) {

  var $dom = $(dom);
  var lock = true;

  $img = $($img);
  var img = $img[0];

  var roundRect = function (context, x, y, w, h, r) {
    var min_size = Math.min(w, h);
    if (r > min_size / 2) r = min_size / 2;
    // 开始绘制
    context.beginPath();
    context.moveTo(x + r, y);
    context.arcTo(x + w, y, x + w, y + h, r);
    context.arcTo(x + w, y + h, x, y + h, r);
    context.arcTo(x, y + h, x, y, r);
    context.arcTo(x, y, x + w, y, r);
    context.closePath();
  }

  /**
   * 移动橡皮
   * @param  {Context} context canvas.getContext()
   * @param  {Image} img       用于当橡皮擦
   * @param  {Number} left
   * @param  {Number} top
   * @param  {Number} width
   * @param  {Number} height
   * @param  {Number} radius
   */
  var move = function (context, img, left, top, width, height, radius) {
    var pattern = context.createPattern(img, "repeat");
    roundRect(context, left, top, width, height, radius);
    context.fillStyle = pattern;
    context.fill()
  }

  var clean = this.clean = function () {
    var width = $dom.width() + parseInt($dom.css('padding-left')) + parseInt($dom.css('padding-right'));
    var height = $dom.height() + parseInt($dom.css('padding-top')) + parseInt($dom.css('padding-bottom'));
    $img.css({
      display: 'none',
      width: width,
      height: height
    });
    var $canvas = $('<canvas>');
    var context = $canvas[0].getContext('2d');

    $canvas.remove();

    $canvas.css({
      position: 'absolute',
      top: 0,
      left: 0,
      'z-index': 2333
    }).attr({
      width: width,
      height: height
    });

    $canvas.appendTo($dom);

    // @TODO 通过 高宽 计算出 每次需要擦除的面积 然后多少次全部清除 达到擦黑板的行为
  }
}
