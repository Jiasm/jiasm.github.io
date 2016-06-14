define({id:"03ced697-a832-49fa-98a8-6e6b50cfb878",title:"学习zepto.js(对象方法)[4]",postDate:"2015-08-19 17:15",content:"<p>今天说说那一套获取元素集合的一些方法:</p><p><span style=\"color: #808080;\">[\"children\", \"clone\", \"closest\", \"contents\", \"empty\", \"eq\", \"filter\", \"find\", \"first\", \"get\", \"has\", \"last\", \"not\", \"parent\", \"parents\", \"siblings\"]</span></p><h2>children:</h2><p>获取对象的所有匹配的直接子元素.</p><p>参数为可选的一个选择器.如果不填则是所有子节点,否则为匹配的所有子节点;</p><pre class=\"language-javascript\"><code>$(\"#demo\").children();<span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\">--&gt;所有的子节点</span>$(\"#demo\").children(\"li\");<span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\">--&gt;所有的li子节点</span></code></pre><p> 返回的是一个zepto对象,里边存储的是匹配的子节点的集合.</p><p><img src=\"http:\/\/images0.cnblogs.com/blog2015/731575/201508/191609356608381.png\" alt=\"\" /></p><p><img src=\"http:\/\/images0.cnblogs.com/blog2015/731575/201508/191609453002059.png\" alt=\"\" /></p><p>上边那个过滤方法用的地方比较多,所以给它放在上边;</p><p>children方法调用的filtered传入的是两个参数,第一个是一个集合,将所有对象的所有的子节点取出,并放入一个集合;children方法内部调用的children方法不是自身,而是另有一个children方法;&darr;</p><p><img src=\"http:\/\/images0.cnblogs.com/blog2015/731575/201508/191618570197013.png\" alt=\"\" /></p><p>我们调用的是对象方法,而对象方法调用的那个就是一个普通的内部私有函数- -(望理解它们之间的区别);</p><p>返回的是做一个兼容处理的获取子元素的实现,如果节点存在children属性就直接取出,不存在的话,就循环childNodes并将nodeType为1的元素筛选出来;</p><p>在filtered方法中,第二个参数就是children方法可选的那个选择器,而filtered方法又会牵扯到下边要说的两个方法,这里先把代码贴上</p><p>filter与not的作用相反.</p><p>从源码来看,能发现一个children的隐藏功能,这是api里边没说的.而我们的确能用的<img src=\"http:\/\/images0.cnblogs.com/blog2015/731575/201508/191635299567494.png\" alt=\"\" />;</p><p>也就是说,我们可以在children参数中传入一个function,function有一个实参,就是下标.</p><pre class=\"language-javascript\"><code><span style=\"color: #0000ff;\">var</span> temp = $(\"li\").children(<span style=\"color: #0000ff;\">function</span><span style=\"color: #000000;\"> (index) {    </span><span style=\"color: #0000ff;\">return</span> (index % 2 === 0<span style=\"color: #000000;\">);})</span></code></pre><p> </p><p>返回的是一个boolean值.为true则放入集合;</p><h2>filter:</h2><p>filter方法接收一个参数,可以为选择器,也可以为一个function,function返回true则视为匹配.</p><pre class=\"language-javascript\"><code>$(\".item\").filter(\".nav\"); <span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> 相当于$(\".item.nav\");</span>$(\".item\").filter(<span style=\"color: #0000ff;\">function</span><span style=\"color: #000000;\"> (index) {    </span><span style=\"color: #0000ff;\">return</span> index % 2 === 0;  <span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\">函数内部 this指向集合中的当前元素</span>}); <span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\">将集合中偶数位的元素取出并放入一个集合</span></code></pre><p> </p><p>直接说实现,省得上边那一大串children白说了.</p><p><img src=\"http:\/\/images0.cnblogs.com/blog2015/731575/201508/191626238787230.png\" alt=\"\" /></p><p>首先进入方法判断传入选择器是否为一个function类型,如果是,则执行this.not(this.not(function));看起来可能有点乱.但结果是对的.</p><p>not方法与filter相反,先简单的说它的作用.下边再介绍它</p><p>内层not参数为一个function,not方法内部会执行该function,并将所有不满足的元素返回,</p><p>外层not方法的参数就是内层not的返回值,也就是所有不满足的元素的集合,然后再经过筛选,取出所有不存在于参数集合中的元素.</p><p>也就变相的取出了所有满足条件的元素;</p><h2>not:</h2><p>not方法用法与filter相同,返回值相反.</p><p>用法直接pass.</p><p><img src=\"http:\/\/images0.cnblogs.com/blog2015/731575/201508/191626332692068.png\" alt=\"\" /></p><p>首先函数内部判断传入选择器类型,如果是个functin,妥妥的循环对象并执行它.</p><p>否则就判断选择器类型是否为字符串,如果是,则调用filter方法.加个表情<img src=\"http:\/\/images0.cnblogs.com/blog2015/731575/201508/191705415663885.png\" alt=\"\" />;</p><p>如果不是一个字符串,就判断是否是一个类数组,并且对象的item是一个方法,(是的,变相的判断为一个zepto对象.)</p><p>其余的情况,直接通过参数构建一个zepto对象.</p><p>以上操作均为给excludes变量赋值;</p><p>在最后,通过循环对象.将对象中不存在于excludes变量中的所有元素取出.并构件为一个zepto对象.</p><p>也就是说,not方法传入的参数类型是可以比filter更丰富一些的.</p><p>可以传入一个zepto对象,或者一个dom标签数组.一个html片段.等等......</p><p>当然最后返回的对象决不会存在于not的参数中.</p><p>\/\/indexOf就是数组的原生方法,</p><p> </p><p>先发这三个方法的.其余的以后补上.</p>"});