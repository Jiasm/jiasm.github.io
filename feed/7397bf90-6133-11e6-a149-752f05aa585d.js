{
  "id": "7397bf90-6133-11e6-a149-752f05aa585d",
  "title": "在线JSON文件编辑器[0]",
  "postDate": "2016/8/13 16:53}",
  "content": "<h1>准备工作</h1>\r\n<h2>参考资料：</h2>\r\n<ul>\r\n<li>FileReader <a title=\"FileReader\" href=\"https://developer.mozilla.org/en-US/docs/Web/API/FileReader\">https://developer.mozilla.org/en-US/docs/Web/API/FileReader</a>&nbsp; 用来获取上传文件的数据</li>\r\n<li>&lt;download&gt; <a href=\"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-download\">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-download</a>&nbsp; 用来设置下载文件的名称</li>\r\n<li>Blob&nbsp;<a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Blob\">https://developer.mozilla.org/en-US/docs/Web/API/Blob</a>&nbsp; 用来存储数据的一个容器</li>\r\n<li>createObjectURL&nbsp;<a href=\"https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL\">https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL</a>&nbsp; 用来将一个Blog对象转换为Base64格式资源的API</li>\r\n</ul>\r\n<h2>前言：</h2>\r\n<p>&nbsp; &nbsp; 因前段时间给老板做了个在线编辑lua文件的小工具，期间用到了上述几个新的API，感觉挺有意思，所以决定做一个在线编辑JSON文件的例子show出来，并重新捋一遍思路。</p>\r\n<p>&nbsp; &nbsp; 代码会在 <a href=\"https://github.com/Jiasm/blog-resource/tree/master/json-editor\">这里</a> 更新，不出意外应该会使用ES6的语法进行编码。</p>\r\n<h2>预期效果：</h2>\r\n<p>&nbsp; &nbsp; 上传一个json文件，在页面中生成一个对应的树形结构；</p>\r\n<p>&nbsp; &nbsp; 单击某个节点，会在右侧显示该节点的属性（值类型的子节点）；</p>\r\n<p>&nbsp; &nbsp; 在节点上点击展开，会展开该节点，显示出该节点下的子节点；</p>\r\n<p>&nbsp; &nbsp; 关于数据的一套完整的CRUD操作；</p>\r\n<p>&nbsp; &nbsp; 点击下载，获取修改后的json文件；</p>\r\n<h2>效果图：</h2>\r\n<p><img src=\"https://dn-web-blued-cn.qbox.me/web/static/liveactivity/completed-50f137bf.png\" alt=\"\" width=\"2402\" height=\"1342\" /></p>\r\n<p>&nbsp; &nbsp; 这个Demo的周期应该会很长。。。但是希望能够写Blog把这个过程记录下来，之前实现的那版过于随意，这次会出一个更精致的。</p>"
}