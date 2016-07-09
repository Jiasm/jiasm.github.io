{
  "id": "0fc538fb-ecda-41e1-99e3-5067ad4b2277",
  "title": "学习zepto.js(对象方法)[5]",
  "postDate": "2015-08-28 18:14",
  "content": "<p><span style=\\\"line-height: 1.5;\\\">继续说.</span></p><h2>clone:</h2><p>该方法不接收任何参数,会返回对象中的所有元素集合,但不会对象绑定的事件.</p><pre class=\\\"language-javascript\\\"><code><span style=\\\"color: #0000ff;\\\">var</span> $temp = $(\\\"div\\\").clone(); <span style=\\\"color: #008000;\\\">\\/\\/</span><span style=\\\"color: #008000;\\\">并不接收任何参数.</span></code></pre><p> </p><p>方法的实现就是循环调用方法对象.然后将所有的dom元素克隆并返回</p><p><img src=\\\"http:\\/\\/images0.cnblogs.com/blog2015/731575/201508/211421392539708.png\\\" alt=\\\"\\\" /></p><p>而且使用的深度克隆,就是说,会将节点下方的子节点统统克隆过来.</p><h2>closest:</h2><p>方法接收1-2个参数,第一个为selector(选择器),第二个为context(上下文);</p><p>方法会从调用节点开始,逐级向上匹配.</p><p>如果只传入selector,则会返回第一个匹配的元素.如同时传入了context,则只会寻找context的子节点.</p><p>(通俗来说就是如果能被匹配的元素不属于context,那么将会直接返回false)</p><p>selector参数也可以传入一个zepto对象.或一个dom集合.</p><p>而返回的元素则会属于传入的selector对象中的一个.</p><p>context的有效值为一个dom元素.</p><p><span style=\\\"color: #ff0000;\\\">注意:返回值是与调用对象中的第一个元素有关的.<img src=\\\"http:\\/\\/images0.cnblogs.com/blog2015/731575/201508/211455009728313.png\\\" alt=\\\"\\\" />所以说返回值也只会是包含一个节点元素的zepto对象或是一个空对象[没有找到匹配的元素])</span></p><pre class=\\\"language-markup\\\"><code><span style=\\\"color: #0000ff;\\\">&lt;!</span><span style=\\\"color: #ff00ff;\\\">DOCTYPE html</span><span style=\\\"color: #0000ff;\\\">&gt;</span>\\n<span style=\\\"color: #0000ff;\\\">&lt;</span><span style=\\\"color: #800000;\\\">html</span><span style=\\\"color: #0000ff;\\\">&gt;</span>\\n    <span style=\\\"color: #0000ff;\\\">&lt;</span><span style=\\\"color: #800000;\\\">head</span><span style=\\\"color: #0000ff;\\\">&gt;</span>\\n        <span style=\\\"color: #0000ff;\\\">&lt;</span><span style=\\\"color: #800000;\\\">title</span><span style=\\\"color: #0000ff;\\\">&gt;</span>hello world<span style=\\\"color: #0000ff;\\\">&lt;/</span><span style=\\\"color: #800000;\\\">title</span><span style=\\\"color: #0000ff;\\\">&gt;</span>\\n        <span style=\\\"color: #0000ff;\\\">&lt;</span><span style=\\\"color: #800000;\\\">meta </span><span style=\\\"color: #ff0000;\\\">charset</span><span style=\\\"color: #0000ff;\\\">=\\\"utf-8\\\"</span><span style=\\\"color: #0000ff;\\\">&gt;</span>\\n        <span style=\\\"color: #0000ff;\\\">&lt;</span><span style=\\\"color: #800000;\\\">script </span><span style=\\\"color: #ff0000;\\\">type</span><span style=\\\"color: #0000ff;\\\">=\\\"text/javascript\\\"</span><span style=\\\"color: #ff0000;\\\"> src</span><span style=\\\"color: #0000ff;\\\">=\\\"js/zepto.js\\\"</span><span style=\\\"color: #0000ff;\\\">&gt;&lt;/</span><span style=\\\"color: #800000;\\\">script</span><span style=\\\"color: #0000ff;\\\">&gt;</span>\\n        <span style=\\\"color: #0000ff;\\\">&lt;</span><span style=\\\"color: #800000;\\\">style </span><span style=\\\"color: #ff0000;\\\">type</span><span style=\\\"color: #0000ff;\\\">=\\\"text/css\\\"</span><span style=\\\"color: #0000ff;\\\">&gt;</span>\\n<span style=\\\"background-color: #f5f5f5; color: #800000;\\\">            body * </span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">{\\n</span><span style=\\\"background-color: #f5f5f5; color: #ff0000;\\\">                color</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">:</span><span style=\\\"background-color: #f5f5f5; color: #0000ff;\\\"> #000</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">;</span>\\n            <span style=\\\"background-color: #f5f5f5; color: #000000;\\\">}</span>\\n        <span style=\\\"color: #0000ff;\\\">&lt;/</span><span style=\\\"color: #800000;\\\">style</span><span style=\\\"color: #0000ff;\\\">&gt;</span>\\n    <span style=\\\"color: #0000ff;\\\">&lt;/</span><span style=\\\"color: #800000;\\\">head</span><span style=\\\"color: #0000ff;\\\">&gt;</span>\\n    <span style=\\\"color: #0000ff;\\\">&lt;</span><span style=\\\"color: #800000;\\\">body</span><span style=\\\"color: #0000ff;\\\">&gt;</span>\\n        <span style=\\\"color: #0000ff;\\\">&lt;</span><span style=\\\"color: #800000;\\\">ul </span><span style=\\\"color: #ff0000;\\\">id</span><span style=\\\"color: #0000ff;\\\">=\\\"one\\\"</span><span style=\\\"color: #ff0000;\\\"> class</span><span style=\\\"color: #0000ff;\\\">=\\\"level-1\\\"</span><span style=\\\"color: #0000ff;\\\">&gt;</span>\\n            <span style=\\\"color: #0000ff;\\\">&lt;</span><span style=\\\"color: #800000;\\\">li </span><span style=\\\"color: #ff0000;\\\">class</span><span style=\\\"color: #0000ff;\\\">=\\\"item-i\\\"</span><span style=\\\"color: #0000ff;\\\">&gt;</span>I<span style=\\\"color: #0000ff;\\\">&lt;/</span><span style=\\\"color: #800000;\\\">li</span><span style=\\\"color: #0000ff;\\\">&gt;</span>\\n            <span style=\\\"color: #0000ff;\\\">&lt;</span><span style=\\\"color: #800000;\\\">li </span><span style=\\\"color: #ff0000;\\\">id</span><span style=\\\"color: #0000ff;\\\">=\\\"ii\\\"</span><span style=\\\"color: #ff0000;\\\"> class</span><span style=\\\"color: #0000ff;\\\">=\\\"item-ii\\\"</span><span style=\\\"color: #0000ff;\\\">&gt;</span><span style=\\\"color: #000000;\\\">II\\n                </span><span style=\\\"color: #0000ff;\\\">&lt;</span><span style=\\\"color: #800000;\\\">ul </span><span style=\\\"color: #ff0000;\\\">class</span><span style=\\\"color: #0000ff;\\\">=\\\"level-2\\\"</span><span style=\\\"color: #0000ff;\\\">&gt;</span>\\n                    <span style=\\\"color: #0000ff;\\\">&lt;</span><span style=\\\"color: #800000;\\\">li </span><span style=\\\"color: #ff0000;\\\">class</span><span style=\\\"color: #0000ff;\\\">=\\\"item-a\\\"</span><span style=\\\"color: #0000ff;\\\">&gt;</span>A<span style=\\\"color: #0000ff;\\\">&lt;/</span><span style=\\\"color: #800000;\\\">li</span><span style=\\\"color: #0000ff;\\\">&gt;</span>\\n                    <span style=\\\"color: #0000ff;\\\">&lt;</span><span style=\\\"color: #800000;\\\">li </span><span style=\\\"color: #ff0000;\\\">class</span><span style=\\\"color: #0000ff;\\\">=\\\"item-b\\\"</span><span style=\\\"color: #0000ff;\\\">&gt;</span><span style=\\\"color: #000000;\\\">B\\n                        </span><span style=\\\"color: #0000ff;\\\">&lt;</span><span style=\\\"color: #800000;\\\">ul </span><span style=\\\"color: #ff0000;\\\">class</span><span style=\\\"color: #0000ff;\\\">=\\\"level-3\\\"</span><span style=\\\"color: #0000ff;\\\">&gt;</span>\\n                            <span style=\\\"color: #0000ff;\\\">&lt;</span><span style=\\\"color: #800000;\\\">li </span><span style=\\\"color: #ff0000;\\\">class</span><span style=\\\"color: #0000ff;\\\">=\\\"item-1\\\"</span><span style=\\\"color: #0000ff;\\\">&gt;</span>1<span style=\\\"color: #0000ff;\\\">&lt;/</span><span style=\\\"color: #800000;\\\">li</span><span style=\\\"color: #0000ff;\\\">&gt;</span>\\n                            <span style=\\\"color: #0000ff;\\\">&lt;</span><span style=\\\"color: #800000;\\\">li </span><span style=\\\"color: #ff0000;\\\">class</span><span style=\\\"color: #0000ff;\\\">=\\\"item-2\\\"</span><span style=\\\"color: #0000ff;\\\">&gt;</span>2<span style=\\\"color: #0000ff;\\\">&lt;/</span><span style=\\\"color: #800000;\\\">li</span><span style=\\\"color: #0000ff;\\\">&gt;</span>\\n                            <span style=\\\"color: #0000ff;\\\">&lt;</span><span style=\\\"color: #800000;\\\">li </span><span style=\\\"color: #ff0000;\\\">class</span><span style=\\\"color: #0000ff;\\\">=\\\"item-3\\\"</span><span style=\\\"color: #0000ff;\\\">&gt;</span>3<span style=\\\"color: #0000ff;\\\">&lt;/</span><span style=\\\"color: #800000;\\\">li</span><span style=\\\"color: #0000ff;\\\">&gt;</span>\\n                        <span style=\\\"color: #0000ff;\\\">&lt;/</span><span style=\\\"color: #800000;\\\">ul</span><span style=\\\"color: #0000ff;\\\">&gt;</span>\\n                    <span style=\\\"color: #0000ff;\\\">&lt;/</span><span style=\\\"color: #800000;\\\">li</span><span style=\\\"color: #0000ff;\\\">&gt;</span>\\n                    <span style=\\\"color: #0000ff;\\\">&lt;</span><span style=\\\"color: #800000;\\\">li </span><span style=\\\"color: #ff0000;\\\">class</span><span style=\\\"color: #0000ff;\\\">=\\\"item-c\\\"</span><span style=\\\"color: #0000ff;\\\">&gt;</span>C<span style=\\\"color: #0000ff;\\\">&lt;/</span><span style=\\\"color: #800000;\\\">li</span><span style=\\\"color: #0000ff;\\\">&gt;</span>\\n                <span style=\\\"color: #0000ff;\\\">&lt;/</span><span style=\\\"color: #800000;\\\">ul</span><span style=\\\"color: #0000ff;\\\">&gt;</span>\\n            <span style=\\\"color: #0000ff;\\\">&lt;/</span><span style=\\\"color: #800000;\\\">li</span><span style=\\\"color: #0000ff;\\\">&gt;</span>\\n            <span style=\\\"color: #0000ff;\\\">&lt;</span><span style=\\\"color: #800000;\\\">li </span><span style=\\\"color: #ff0000;\\\">class</span><span style=\\\"color: #0000ff;\\\">=\\\"item-iii\\\"</span><span style=\\\"color: #0000ff;\\\">&gt;</span>III<span style=\\\"color: #0000ff;\\\">&lt;/</span><span style=\\\"color: #800000;\\\">li</span><span style=\\\"color: #0000ff;\\\">&gt;</span>\\n        <span style=\\\"color: #0000ff;\\\">&lt;/</span><span style=\\\"color: #800000;\\\">ul</span><span style=\\\"color: #0000ff;\\\">&gt;</span>\\n        <span style=\\\"color: #0000ff;\\\">&lt;</span><span style=\\\"color: #800000;\\\">script </span><span style=\\\"color: #ff0000;\\\">type</span><span style=\\\"color: #0000ff;\\\">=\\\"text/javascript\\\"</span><span style=\\\"color: #0000ff;\\\">&gt;</span>\\n<span style=\\\"background-color: #f5f5f5; color: #000000;\\\">            $(</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">\\\"</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">.level-3</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">\\\"</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">).closest(</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">\\\"</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">.item-b</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">\\\"</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">).css(</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">\\\"</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">color</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">\\\"</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">, </span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">\\\"</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">red</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">\\\"</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">);                            </span><span style=\\\"background-color: #f5f5f5; color: #008000;\\\">\\/\\/</span><span style=\\\"background-color: #f5f5f5; color: #008000;\\\">匹配距离对象最近的.item-b元素</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">            \\n$(</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">\\\"</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">.level-3</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">\\\"</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">).closest(</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">\\\"</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">.item-ii</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">\\\"</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">).css(</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">\\\"</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">color</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">\\\"</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">, </span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">\\\"</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">blue</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">\\\"</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">);                          </span>\\n<span style=\\\"background-color: #f5f5f5; color: #008000;\\\">\\/\\/</span><span style=\\\"background-color: #f5f5f5; color: #008000;\\\">匹配距离对象最近的.item-ii元素</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">            \\n$(</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">\\\"</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">.level-3</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">\\\"</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">).closest(</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">\\\"</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">#one</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">\\\"</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">, $(</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">\\\"</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">#ii</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">\\\"</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">)[</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">0</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">]).css(</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">\\\"</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">background-color</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">\\\"</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">, </span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">\\\"</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">green</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">\\\"</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">);     </span><span style=\\\"background-color: #f5f5f5; color: #008000;\\\">\\n\\/\\/</span><span style=\\\"background-color: #f5f5f5; color: #008000;\\\">匹配距离对象最近的#one元素,并且匹配元素必须属于#ii元素内部</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">            \\n$(</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">\\\"</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">.level-3</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">\\\"</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">).closest($(</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">\\\"</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">ul</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">\\\"</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">)).css(</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">\\\"</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">background-color</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">\\\"</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">, </span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">\\\"</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">yellow</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">\\\"</span><span style=\\\"background-color: #f5f5f5; color: #000000;\\\">);                </span><span style=\\\"background-color: #f5f5f5; color: #008000;\\\">\\n\\/\\/</span><span style=\\\"background-color: #f5f5f5; color: #008000;\\\">匹配距离对象最近的属于$(\\\"ul\\\")中其中一个的元素</span>        <span style=\\\"color: #0000ff;\\\">&lt;/</span><span style=\\\"color: #800000;\\\">script</span><span style=\\\"color: #0000ff;\\\">&gt;</span>\\n    <span style=\\\"color: #0000ff;\\\">&lt;/</span><span style=\\\"color: #800000;\\\">body</span><span style=\\\"color: #0000ff;\\\">&gt;</span>\\n<span style=\\\"color: #0000ff;\\\">&lt;/</span><span style=\\\"color: #800000;\\\">html</span><span style=\\\"color: #0000ff;\\\">&gt;</span>\\n</code></pre><p> </p><p><img src=\\\"http:\\/\\/images0.cnblogs.com/blog2015/731575/201508/211541204257150.png\\\" alt=\\\"\\\" /></p><p>方法首先取出当前dom对象作为基点并赋值给node.collection默认的为false.如果传入的selector参数为一个object,则认为选择器是一个zepto对象,或者是一个dom对象(集合),并将转换为zepto对象的值赋给collection;</p><p>下边是循环,循环判断的条件为node存在,并且collection中不存在node(selector为object的情况下)或者node不匹配selector选择器(selector为string的情况下)</p><p>循环内部,如果node不等于context(上下文)并且node不为document对象,就将node的父节点赋值给node(直到node满足匹配条件或者循环值文档对象).否则直接赋值false,然后循环终止,返回false;</p><p>最终返回一个zepto对象,空的或者包含一个元素的zepto对象;</p><h2>contents:</h2><p>contents用来获取zepto所有对象的子节点（包括文本，注释），或者zepto某对象为一个iframe时，则获取该iframe的document对象引用；</p><p>直接使用zepto对象调用即可；</p><pre class=\\\"language-javascript\\\"><code>$(\\\"#temp\\\").contents(); <span style=\\\"color: #008000;\\\">\\/\\/</span><span style=\\\"color: #008000;\\\"> 如果temp为一个iframe对象，则返回它的contentDocument引用，否则返回该dom对象的所有child节点</span></code></pre><p> </p><p><img src=\\\"http:\\/\\/images0.cnblogs.com/blog2015/731575/201508/281645248596572.png\\\" alt=\\\"\\\" /></p><p>首先是遍历zepto对象，然后返回每个对象的子节点或者document对象。contentDocument为iframe对象的属性，与contentWindow性质一样；</p><h2>empty:</h2><p>用来清空zepto对象的所有innerHTML值（dom内容，相当于移除所有子节点）。</p><pre class=\\\"language-javascript\\\"><code>$(\\\"#temp\\\").empty(); <span style=\\\"color: #008000;\\\">\\/\\/</span><span style=\\\"color: #008000;\\\">该方法将清除#temp的innerHTML</span></code></pre><p> </p><p><img src=\\\"http:\\/\\/images0.cnblogs.com/blog2015/731575/201508/281650017033749.png\\\" alt=\\\"\\\" /></p><p>代码也只是简单的遍历并给innerHTML赋值而已。</p><p><span style=\\\"color: #888888;\\\">题外话：map方法与each方法的区别。两者回调函数的参数，是一样的。两者的区别在于结束循环的方式。each返回false结束循环，而map （我还真没发现返回null或undefined能停止它）；</span></p><h2><span style=\\\"color: #000000;\\\">eq:</span></h2><p><span style=\\\"color: #000000;\\\">通过index来取出一个对象，如果为-1，则取出最后一个。</span></p><p><span style=\\\"color: #000000;\\\">与get方法的区别是，get返回一个dom对象，eq返回一个zepto对象。</span></p><pre class=\\\"language-javascript\\\"><code>$(\\\"#test\\\").eq(0<span style=\\\"color: #000000;\\\">);$($(</span>\\\"#test\\\").get(0<span style=\\\"color: #000000;\\\">));$($(</span>\\\"#test\\\").[0<span style=\\\"color: #000000;\\\">]);</span><span style=\\\"color: #008000;\\\">\\/\\/</span><span style=\\\"color: #008000;\\\">此三条效果一样。</span></code></pre><p> </p><h2>find:</h2><p>find方法通过传入的一个参数来筛选出zepto对象符合条件的子节点集合并返回。</p><pre class=\\\"language-javascript\\\"><code>$(\\'#myform\\').find(\\'input, select\\'<span style=\\\"color: #000000;\\\">);$(</span>\\'input, select\\', $(\\'#myform\\'<span style=\\\"color: #000000;\\\">));</span><span style=\\\"color: #008000;\\\">\\/\\/</span><span style=\\\"color: #008000;\\\">这两条的结果是一样的。</span></code></pre><p> </p><p><img src=\\\"http:\\/\\/images2015.cnblogs.com/blog/731575/201508/731575-20150828180325640-1699807251.png\\\" alt=\\\"\\\" /></p><p>首先判断是否传入选择器，如果没有则直接返回一个空的zepto对象；</p><p>如果选择器为一个对象，则将对象转换为zepto对象，然后通过filter筛选出一些匹配的节点，并存入result集合；</p><p>如果调用find方法的对象为一个单一的对象，则直接用过qsa方法（前几篇说过qsa方法），将选择器作为一个选择器，并将对象作为上下文传入；</p><p>否则循环zepto对象重复上边那一条；</p><p>（find方法可能说的不太细。如果有什么，还请大家一起交流）</p>"
}
