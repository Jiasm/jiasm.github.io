'use strict';

/**
 * TMD 这个脚本碉堡了 不是吹牛逼 是真TM牛逼
 * 没事儿别瞎执行这个 绝壁会出错
 * 主要是为了 1.0切2.0 改方案用的
 * 把原来的 require.js需要的 带 define的文件改为纯洁的json文件
 * 一次性的 一次使用 终身享福
 * @author: jiasm
 */

var fs = require('fs');

fs.readFile('./index.js', (err, data) => {
  var obj = JSON.parse(data.toString());
  var data = obj.data;
  for (let item of data) {
    let filename = `./${item.id}.js`;
    fs.readFile(filename, (err, data) => {
      try {
        var str = data.toString();
        var reg = /(?=\"([a-zA-Z]+)?\"\:)\"(.*)?\"/g;
        var arr = {};
        str.replace(reg, (_, key, value, index) => {
          arr[key] = value.replace(key + '": "', '')
        })
        var translateStr = JSON.stringify(arr, null, 2);
        // console.log(JSON.parse(translateStr).title);
        fs.writeFile(filename, translateStr, (err) => {
          if (err) return;
          console.log('success', JSON.parse(translateStr).title);
        })
      } catch (e) {
        console.log(e, item.id);
      }
    })
  }
})

// blog.content.replace(/\\(.)?/g, function (_, $1) { return $1}) 用这个就好
//
// function parse (str) {
//   return str.replace(/\\([^ts])?/g, function (_, $1) { return $1 ? ($1 === 'n' ? '\n' : $1) : _});
// }
