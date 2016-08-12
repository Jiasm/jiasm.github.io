{
  "id": "2625a7d9-15e9-45d6-93ef-394e7d26e3d3",
  "title": "关于一个js连续赋值问题之我见(词略穷,见谅)",
  "postDate": "2015-07-08 10:15",
  "content": "<p>前几天在搜索面试题时发现了这么一段代码,执行完后感觉完全不与所想的一样</p><pre class=\\\"language-javascript\\\"><code><span style=\\\"color: #008080;\\\">1</span> <span style=\\\"color: #0000ff;\\\">var</span> a =<span style=\\\"color: #000000;\\\"> {</span><span style=\\\"color: #008080;\\\">2</span>     n : 1<span style=\\\"color: #008080;\\\">3</span> <span style=\\\"color: #000000;\\\">};</span><span style=\\\"color: #008080;\\\">4</span> <span style=\\\"color: #0000ff;\\\">var</span> b =<span style=\\\"color: #000000;\\\"> a;</span><span style=\\\"color: #008080;\\\">5</span> a.x = a = {n : 2<span style=\\\"color: #000000;\\\">};</span><span style=\\\"color: #008080;\\\">6</span> <span style=\\\"color: #000000;\\\">console.log(a.x);</span><span style=\\\"color: #008080;\\\">7</span> console.log(b.x);</code></pre><p>输出结果为:</p><p>undefined</p><p>[object Object]</p><p>一开始以为语句应该是先给 a 赋值 {n : 2} , 然后再将 a.x 赋值 {n : 2} ;</p><p>但事实却不是那样,于是改动了一下代码,添加几条log</p><pre class=\\\"language-javascript\\\"><code><span style=\\\"color: #0000ff;\\\">var</span><span style=\\\"color: #000000;\\\"> test;</span><span style=\\\"color: #0000ff;\\\">var</span> a =<span style=\\\"color: #000000;\\\"> {    get test () {    console.log(</span>\\\"call a get\\\"<span style=\\\"color: #000000;\\\">);    </span><span style=\\\"color: #0000ff;\\\">return</span><span style=\\\"color: #000000;\\\"> test;    },    set test (value) {    console.log(</span>\\\"call a set\\\"<span style=\\\"color: #000000;\\\">);    test </span>=<span style=\\\"color: #000000;\\\"> value;    }}</span><span style=\\\"color: #0000ff;\\\">var</span><span style=\\\"color: #000000;\\\"> test2;</span><span style=\\\"color: #0000ff;\\\">var</span> b =<span style=\\\"color: #000000;\\\"> {    get test2 () {    console.log(</span>\\\"call b get\\\"<span style=\\\"color: #000000;\\\">);    </span><span style=\\\"color: #0000ff;\\\">return</span><span style=\\\"color: #000000;\\\"> test2;    },    set test2 (value) {    console.log(</span>\\\"call b set\\\"<span style=\\\"color: #000000;\\\">);    test2 </span>=<span style=\\\"color: #000000;\\\"> value;    }}a.test </span>=<span style=\\\"color: #000000;\\\"> {    n : </span>1<span style=\\\"color: #000000;\\\">};b.test2 </span>=<span style=\\\"color: #000000;\\\"> a.test;console.log(</span>\\\"begin\\\"<span style=\\\"color: #000000;\\\">);a.test.x </span>= a.test = {n : 2};</code></pre><p>这样,在begin后边,这条赋值到底执行了什么就一目了然了.</p><p><img src=\\\"http:\\/\\/images0.cnblogs.com/blog2015/731575/201507/081004145024795.png\\\" alt=\\\"\\\" /></p><p>这是语句执行时打印的log</p><p>先触发了一次get,然后触发了一次set.</p><p>本人猜想,该条语句执行的顺序为,先将左边变量取出,然后执行赋值.(在执行该条语句前,先将对象引用取出,然后从右到左执行赋值)</p><p><img src=\\\"http:\\/\\/dl.iteye.com/upload/attachment/331387/1304e9c9-1e99-3cb6-ad70-97a0ef10c5cb.png\\\" alt=\\\"\\\" width=\\\"546\\\" height=\\\"150\\\" /></p><p>上图来自 <a href=\\\"http:\\/\\/snandy.iteye.com/blog/785445\\\" target=\\\"_blank\\\">http:\\/\\/snandy.iteye.com/blog/785445</a></p><p> </p><p>部分参考资料:</p><p><a href=\\\"http:\\/\\/blog.csdn.net/kittyjie/article/details/8242523\\\" target=\\\"_blank\\\">http:\\/\\/blog.csdn.net/kittyjie/article/details/8242523</a></p><p> </p>"
}