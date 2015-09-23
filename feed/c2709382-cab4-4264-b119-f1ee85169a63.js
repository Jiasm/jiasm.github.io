define({id:"c2709382-cab4-4264-b119-f1ee85169a63",title:"JavaScript的一些小技巧(转)",postDate:"2015-07-10 17:03",content:"<p>本文是一篇翻译文章，原文信息如下：</p><ul><li>原文：<a href=\"http:\/\/modernweb.com/2013/12/23/45-useful-javascript-tips-tricks-and-best-practices/\" rel=\"external\" target=\"_blank\">45 Useful JavaScript Tips, Tricks and Best Practices</a></li><li>作者：<a href=\"http:\/\/modernweb.com/authors/saad-mousliki/\" rel=\"external\" target=\"_blank\">Saad Mousliki</a></li></ul><p>JavaScript是一个绝冠全球的编程语言，可用于Web开发、移动应用开发（<a href=\"http:\/\/phonegap.com/\" rel=\"external\" target=\"_blank\">PhoneGap</a>、<a href=\"http:\/\/www.appcelerator.com/\" rel=\"external\" target=\"_blank\">Appcelerator</a>）、服务器端开发（<a href=\"http:\/\/nodejs.org/\" rel=\"external\" target=\"_blank\">Node.js</a>和<a href=\"http:\/\/wakanda.org/\" rel=\"external\" target=\"_blank\">Wakanda</a>）等等。JavaScript还是很多新手踏入编程世界的第一个语言。既可以用来显示浏览器中的简单提示框，也可以通过<a href=\"http:\/\/nodebots.io/\" rel=\"external\" target=\"_blank\">nodebot</a>或<a href=\"http:\/\/semu.github.io/noduino/\" rel=\"external\" target=\"_blank\">nodruino</a>来控制机器人。能够编写结构清晰、性能高效的JavaScript代码的开发人员，现如今已成了招聘市场最受追捧的人。</p><p>在这篇文章里，我将分享一些JavaScript的技巧、秘诀和最佳实践，除了少数几个外，不管是浏览器的JavaScript引擎，还是服务器端JavaScript解释器，均适用。</p><p>本文中的示例代码，通过了在Google Chrome 30最新版（V8 3.20.17.15）上的测试。</p><p> </p><h3 id=\"1、首次为变量赋值时务必使用var关键字\">1、首次为变量赋值时务必使用<code>var</code>关键字</h3><p>变量没有声明而直接赋值得话，默认会作为一个新的全局变量，要尽量避免使用全局变量。</p><h3 id=\"2、使用===取代==\">2、使用<code>===</code>取代<code>==</code></h3><p><code>==</code>和<code>!=</code>操作符会在需要的情况下自动转换数据类型。但<code>===</code>和<code>!==</code>不会，它们会同时比较值和数据类型，这也使得它们要比<code>==</code>和<code>!=</code>快。</p><div class=\"cnblogs_code\"><pre>[10] === 10 <span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> is false</span>[10] == 10 <span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> is true</span>\'10\' == 10 <span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> is true</span>\'10\' === 10 <span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> is false</span>[] == 0 <span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> is true</span>[] === 0 <span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> is false</span>\'\' == <span style=\"color: #0000ff;\">false</span> <span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> is true but true == \"a\" is false</span>\'\' === <span style=\"color: #0000ff;\">false</span> <span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> is false</span></pre></div><p> </p><h3 id=\"3、underfined、null、0、false、NaN、空字符串的逻辑结果均为false\">3、<code>underfined</code>、<code>null</code>、0、false、NaN、空字符串的逻辑结果均为false</h3><h3 id=\"4、行尾使用分号\">4、行尾使用分号</h3><p>实践中最好还是使用分号，忘了写也没事，大部分情况下JavaScript解释器都会自动添加。对于为何要使用分号，可参考文章<a href=\"http:\/\/davidwalsh.name/javascript-semicolons\" rel=\"external\" target=\"_blank\">JavaScript中关于分号的真相</a>。</p><h3 id=\"5、使用对象构造器\">5、使用对象构造器</h3><div class=\"cnblogs_code\"><pre><span style=\"color: #0000ff;\">function</span><span style=\"color: #000000;\"> Person(firstName, lastName){    </span><span style=\"color: #0000ff;\">this</span>.firstName =<span style=\"color: #000000;\"> firstName;    </span><span style=\"color: #0000ff;\">this</span>.lastName =<span style=\"color: #000000;\"> lastName;}</span><span style=\"color: #0000ff;\">var</span> Saad = <span style=\"color: #0000ff;\">new</span> Person(\"Saad\", \"Mousliki\");</pre></div><p> </p><h3 id=\"6、使用typeof、instanceof和contructor\">6、使用<code>typeof</code>、<code>instanceof</code>和<code>contructor</code></h3><ul><li><code>typeof</code>：JavaScript一元操作符，用于以字符串的形式返回变量的原始类型，注意，<code>typeof null</code>也会返回<code>object</code>，大多数的对象类型（数组Array、时间Date等）也会返回<code>object</code></li><li><code>instanceof</code>：内部原型属性，可以通过代码重写</li><li><code>contructor</code>：JavaScript操作符，会在原型链中的构造器中搜索，找到则返回<code>true</code>，否则返回<code>false</code></li></ul><div class=\"cnblogs_code\"><pre><span style=\"color: #0000ff;\">var</span> arr =<span style=\"color: #000000;\"> [\"a\", \"b\", \"c\"];</span><span style=\"color: #0000ff;\">typeof</span> arr; <span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> 返回 \"object\"</span>arr <span style=\"color: #0000ff;\">instanceof</span> Array <span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> true</span>arr.constructor(); <span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\">[]</span></pre></div><p> </p><h3 id=\"7、使用自调用函数\">7、使用自调用函数</h3><p>函数在创建之后直接自动执行，通常称之为自调用匿名函数（Self-Invoked Anonymous Function）或直接调用函数表达式（Immediately Invoked Function Expression ）。格式如下：</p><div class=\"cnblogs_code\"><pre>(<span style=\"color: #0000ff;\">function</span><span style=\"color: #000000;\">(){</span><span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> 置于此处的代码将自动执行</span><span style=\"color: #000000;\">})();(</span><span style=\"color: #0000ff;\">function</span><span style=\"color: #000000;\">(a,b){    </span><span style=\"color: #0000ff;\">var</span> result = a+<span style=\"color: #000000;\">b;    </span><span style=\"color: #0000ff;\">return</span><span style=\"color: #000000;\"> result;})(</span>10,20)</pre></div><p> </p><h3 id=\"8、从数组中随机获取成员\">8、从数组中随机获取成员</h3><div class=\"cnblogs_code\"><pre><span style=\"color: #0000ff;\">var</span> items = [12, 548 , \'a\' , 2 , 5478 , \'foo\' , 8852, , \'Doe\' , 2145 , 119<span style=\"color: #000000;\">];</span><span style=\"color: #0000ff;\">var</span> randomItem = items[Math.floor(Math.random() * items.length)];</pre></div><p> </p><h3 id=\"9、获取指定范围内的随机数\">9、获取指定范围内的随机数</h3><p>这个功能在生成测试用的假数据时特别有数，比如介与指定范围内的工资数。</p><div class=\"cnblogs_code\"><pre><span style=\"color: #0000ff;\">var</span> x = Math.floor(Math.random() * (max &ndash; min + 1)) + min;</pre></div><p> </p><h3 id=\"10、生成从0到指定值的数字数组\">10、生成从0到指定值的数字数组</h3><div class=\"cnblogs_code\"><pre><span style=\"color: #0000ff;\">var</span> numbersArray = [] , max = 100<span style=\"color: #000000;\">;</span><span style=\"color: #0000ff;\">for</span>( <span style=\"color: #0000ff;\">var</span> i=1; numbersArray.push(i++) &lt; max;); <span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> numbers = [1,2,3 &hellip; 100]</span></pre></div><p> </p><h3 id=\"11、生成随机的字母数字字符串\">11、生成随机的字母数字字符串</h3><div class=\"cnblogs_code\"><pre><span style=\"color: #0000ff;\">function</span><span style=\"color: #000000;\"> generateRandomAlphaNum(len) {</span><span style=\"color: #0000ff;\">var</span> rdmString =<span style=\"color: #000000;\"> \"\";</span><span style=\"color: #0000ff;\">for</span>( ; rdmString.length &lt; len; rdmString += Math.random().toString(36).substr(2<span style=\"color: #000000;\">));    </span><span style=\"color: #0000ff;\">return</span> rdmString.substr(0<span style=\"color: #000000;\">, len);}</span></pre></div><p> </p><h3 id=\"12、打乱数字数组的顺序\">12、打乱数字数组的顺序</h3><div class=\"cnblogs_code\"><pre><span style=\"color: #0000ff;\">var</span> numbers = [5, 458 , 120 , -215 , 228 , 400 , 122205, -85411<span style=\"color: #000000;\">];numbers </span>= numbers.sort(<span style=\"color: #0000ff;\">function</span>(){ <span style=\"color: #0000ff;\">return</span> Math.random() &ndash; 0.5<span style=\"color: #000000;\">});</span><span style=\"color: #008000;\">/*</span><span style=\"color: #008000;\"> numbers 数组将类似于 [120, 5, 228, -215, 400, 458, -85411, 122205] </span><span style=\"color: #008000;\">*/</span></pre></div><p> </p><p>这里使用了JavaScript内置的数组排序函数，更好的办法是用专门的代码来实现（如Fisher-Yates算法），可以参见StackOverFlow上的<a href=\"http:\/\/stackoverflow.com/questions/962802/is-it-correct-to-use-javascript-array-sort-method-for-shuffling/962890#962890\" rel=\"external\" target=\"_blank\">这个讨论</a>。</p><h3 id=\"13、字符串去空格\">13、字符串去空格</h3><p>Java、C#和PHP等语言都实现了专门的字符串去空格函数，但JavaScript中是没有的，可以通过下面的代码来为<code>String</code>对象函数一个<code>trim</code>函数：</p><div class=\"cnblogs_code\"><pre>String.prototype.trim = <span style=\"color: #0000ff;\">function</span>(){<span style=\"color: #0000ff;\">return</span> <span style=\"color: #0000ff;\">this</span>.replace(/^\s+|\s+$/g, \"\");};</pre></div><p> </p><p>新的JavaScript引擎已经有了<code>trim()</code>的原生实现。</p><h3 id=\"14、数组之间追加\">14、数组之间追加</h3><div class=\"cnblogs_code\"><pre><span style=\"color: #0000ff;\">var</span> array1 = [12 , \"foo\" , {name \"Joe\"} , -2458<span style=\"color: #000000;\">];</span><span style=\"color: #0000ff;\">var</span> array2 = [\"Doe\" , 555 , 100<span style=\"color: #000000;\">];Array.prototype.push.apply(array1, array2);</span><span style=\"color: #008000;\">/*</span><span style=\"color: #008000;\"> array1 值为 [12 , \"foo\" , {name \"Joe\"} , -2458 , \"Doe\" , 555 , 100] </span><span style=\"color: #008000;\">*/</span></pre></div><p> </p><h3 id=\"15、对象转换为数组\">15、对象转换为数组</h3><div class=\"cnblogs_code\"><pre><span style=\"color: #0000ff;\">var</span> argArray = Array.prototype.slice.call(arguments);</pre></div><p> </p><h3 id=\"16、验证是否是数字\">16、验证是否是数字</h3><div class=\"cnblogs_code\"><pre><span style=\"color: #0000ff;\">function</span><span style=\"color: #000000;\"> isNumber(n){    </span><span style=\"color: #0000ff;\">return</span> !isNaN(parseFloat(n)) &amp;&amp;<span style=\"color: #000000;\"> isFinite(n);}</span></pre></div><p> </p><h3 id=\"17、验证是否是数组\">17、验证是否是数组</h3><div class=\"cnblogs_code\"><pre><span style=\"color: #0000ff;\">function</span><span style=\"color: #000000;\"> isArray(obj){    </span><span style=\"color: #0000ff;\">return</span> Object.prototype.toString.call(obj) ===<span style=\"color: #000000;\"> \'[object Array]\' ;}</span></pre></div><p> </p><p>但如果<code>toString()</code>方法被重写过得话，就行不通了。也可以使用下面的方法：</p><div class=\"cnblogs_code\"><pre>Array.isArray(obj); <span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> its a new Array method</span></pre></div><p><span style=\"line-height: 1.5;\">如果在浏览器中没有使用frame，还可以用</span><code style=\"line-height: 1.5;\">instanceof</code><span style=\"line-height: 1.5;\">，但如果上下文太复杂，也有可能出错。</span></p><div class=\"cnblogs_code\"><pre><span style=\"color: #0000ff;\">var</span> myFrame =<span style=\"color: #000000;\"> document.createElement(\'iframe\');document.body.appendChild(myFrame);</span><span style=\"color: #0000ff;\">var</span> myArray = window.frames[window.frames.length-1<span style=\"color: #000000;\">].Array;</span><span style=\"color: #0000ff;\">var</span> arr = <span style=\"color: #0000ff;\">new</span> myArray(a,b,10); <span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> [a,b,10]</span><span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> myArray 的构造器已经丢失，instanceof 的结果将不正常</span><span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> 构造器是不能跨 frame 共享的</span>arr <span style=\"color: #0000ff;\">instanceof</span> Array; <span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> false</span></pre></div><p> </p><h3 id=\"18、获取数组中的最大值和最小值\">18、获取数组中的最大值和最小值</h3><div class=\"cnblogs_code\"><pre><span style=\"color: #0000ff;\">var</span> numbers = [5, 458 , 120 , -215 , 228 , 400 , 122205, -85411<span style=\"color: #000000;\">];</span><span style=\"color: #0000ff;\">var</span> maxInNumbers =<span style=\"color: #000000;\"> Math.max.apply(Math, numbers);</span><span style=\"color: #0000ff;\">var</span> minInNumbers = Math.min.apply(Math, numbers);</pre></div><p> </p><h3 id=\"19、清空数组\">19、清空数组</h3><div class=\"cnblogs_code\"><pre><span style=\"color: #0000ff;\">var</span> myArray = [12 , 222 , 1000<span style=\"color: #000000;\"> ];myArray.length </span>= 0; <span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> myArray will be equal to [].</span></pre></div><p> </p><h3 id=\"20、不要直接从数组中delete或remove元素\">20、不要直接从数组中<code>delete</code>或<code>remove</code>元素</h3><p>如果对数组元素直接使用<code>delete</code>，其实并没有删除，只是将元素置为了<code>undefined</code>。数组元素删除应使用<code>splice</code>。</p><p>切忌：</p><div class=\"cnblogs_code\"><pre><span style=\"color: #0000ff;\">var</span> items = [12, 548 ,\'a\' , 2 , 5478 , \'foo\' , 8852, , \'Doe\' ,2154 , 119<span style=\"color: #000000;\"> ];items.length; </span><span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> return 11</span><span style=\"color: #0000ff;\">delete</span> items[3]; <span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> return true</span>items.length; <span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> return 11</span><span style=\"color: #008000;\">/*</span><span style=\"color: #008000;\"> items 结果为 [12, 548, \"a\", undefined &times; 1, 5478, \"foo\", 8852, undefined &times; 1, \"Doe\", 2154, 119] </span><span style=\"color: #008000;\">*/</span></pre></div><p> </p><p>而应：</p><div class=\"cnblogs_code\"><pre><span style=\"color: #0000ff;\">var</span> items = [12, 548 ,\'a\' , 2 , 5478 , \'foo\' , 8852, , \'Doe\' ,2154 , 119<span style=\"color: #000000;\"> ];items.length; </span><span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> return 11</span>items.splice(3,1<span style=\"color: #000000;\">) ;items.length; </span><span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> return 10</span><span style=\"color: #008000;\">/*</span><span style=\"color: #008000;\"> items 结果为 [12, 548, \"a\", 5478, \"foo\", 8852, undefined &times; 1, \"Doe\", 2154, 119]</span></pre></div><p> </p><p>删除对象的属性时可以使用<code>delete</code>。</p><h3 id=\"21、使用length属性截断数组\">21、使用<code>length</code>属性截断数组</h3><p>前面的例子中用<code>length</code>属性清空数组，同样还可用它来截断数组：</p><div class=\"cnblogs_code\"><pre><span style=\"color: #0000ff;\">var</span> myArray = [12 , 222 , 1000 , 124 , 98 , 10<span style=\"color: #000000;\"> ];myArray.length </span>= 4; <span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> myArray will be equal to [12 , 222 , 1000 , 124].</span></pre></div><p> </p><p>与此同时，如果把<code>length</code>属性变大，数组的长度值变会增加，会使用<code>undefined</code>来作为新的元素填充。<code>length</code>是一个可写的属性。</p><div class=\"cnblogs_code\"><pre>myArray.length = 10; <span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> the new array length is 10</span>myArray[myArray.length &ndash; 1] ; <span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> undefined</span></pre></div><p> </p><h3 id=\"22、在条件中使用逻辑与或\">22、在条件中使用逻辑与或</h3><div class=\"cnblogs_code\"><pre><span style=\"color: #0000ff;\">var</span> foo = 10<span style=\"color: #000000;\">;foo </span>== 10 &amp;&amp; doSomething(); <span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> is the same thing as if (foo == 10) doSomething();</span>foo == 5 || doSomething(); <span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> is the same thing as if (foo != 5) doSomething();</span></pre></div><p> </p><p>逻辑或还可用来设置默认值，比如函数参数的默认值。</p><div class=\"cnblogs_code\"><pre><span style=\"color: #0000ff;\">function</span><span style=\"color: #000000;\"> doSomething(arg1){    arg1 </span>= arg1 || 10; <span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> arg1 will have 10 as a default value if it\'s not already set</span>}</pre></div><p> </p><h3 id=\"23、使得map()函数方法对数据循环\">23、使得<code>map()</code>函数方法对数据循环</h3><div class=\"cnblogs_code\"><pre><span style=\"color: #0000ff;\">var</span> squares = [1,2,3,4].map(<span style=\"color: #0000ff;\">function</span><span style=\"color: #000000;\"> (val) {    </span><span style=\"color: #0000ff;\">return</span> val *<span style=\"color: #000000;\"> val;});</span><span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> squares will be equal to [1, 4, 9, 16]</span></pre></div><p> </p><h3 id=\"24、保留指定小数位数\">24、保留指定小数位数</h3><div class=\"cnblogs_code\"><pre><span style=\"color: #0000ff;\">var</span> num =2.443242342<span style=\"color: #000000;\">;num </span>= num.toFixed(4); <span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> num will be equal to 2.4432</span></pre></div><p> </p><p>注意，<code>toFixed()</code>返回的是字符串，不是数字。</p><h3 id=\"25、浮点计算的问题\">25、浮点计算的问题</h3><div class=\"cnblogs_code\"><pre>0.1 + 0.2 === 0.3 <span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> is false</span>9007199254740992 + 1 <span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> is equal to 9007199254740992</span>9007199254740992 + 2 <span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> is equal to 9007199254740994</span></pre></div><p> </p><p>为什么呢？因为0.1+0.2等于0.30000000000000004。JavaScript的数字都遵循IEEE 754标准构建，在内部都是64位浮点小数表示，具体可以参见<a href=\"http:\/\/www.2ality.com/2012/04/number-encoding.html\" rel=\"external\" target=\"_blank\">JavaScript中的数字是如何编码的</a>.</p><p>可以通过使用<code>toFixed()</code>和<code>toPrecision()</code>来解决这个问题。</p><h3 id=\"26、通过for-in循环检查对象的属性\">26、通过for-in循环检查对象的属性</h3><p>下面这样的用法，可以防止迭代的时候进入到对象的原型属性中。</p><div class=\"cnblogs_code\"><pre><span style=\"color: #0000ff;\">for</span> (<span style=\"color: #0000ff;\">var</span> name <span style=\"color: #0000ff;\">in</span><span style=\"color: #000000;\"> object) {    </span><span style=\"color: #0000ff;\">if</span><span style=\"color: #000000;\"> (object.hasOwnProperty(name)) {    </span><span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> do something with name</span><span style=\"color: #000000;\">    }}</span></pre></div><p> </p><h3 id=\"27、逗号操作符\">27、逗号操作符</h3><div class=\"cnblogs_code\"><pre><span style=\"color: #0000ff;\">var</span> a = 0<span style=\"color: #000000;\">;</span><span style=\"color: #0000ff;\">var</span> b = ( a++, 99<span style=\"color: #000000;\"> );console.log(a); </span><span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> a will be equal to 1</span>console.log(b); <span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> b is equal to 99</span></pre></div><p> </p><h3 id=\"28、临时存储用于计算和查询的变量\">28、临时存储用于计算和查询的变量</h3><p>可以使用变量临时存储整个DOM元素。</p><div class=\"cnblogs_code\"><pre><span style=\"color: #0000ff;\">var</span> navright =<span style=\"color: #000000;\"> document.querySelector(\'#right\');</span><span style=\"color: #0000ff;\">var</span> navleft =<span style=\"color: #000000;\"> document.querySelector(\'#left\');</span><span style=\"color: #0000ff;\">var</span> navup =<span style=\"color: #000000;\"> document.querySelector(\'#up\');</span><span style=\"color: #0000ff;\">var</span> navdown = document.querySelector(\'#down\');</pre></div><p> </p><h3 id=\"29、提前检查传入isFinite()的参数\">29、提前检查传入<code>isFinite()</code>的参数</h3><div class=\"cnblogs_code\"><pre>isFinite(0/0) ; \/\/ <span style=\"color: #0000ff;\">false</span><span style=\"color: #000000;\">isFinite(\"foo\"); </span><span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> false</span>isFinite(\"10\"); <span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> true</span>isFinite(10); <span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> true</span>isFinite(undefined); <span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> false</span>isFinite(); <span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> false</span>isFinite(<span style=\"color: #0000ff;\">null</span>); <span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> true，这点当特别注意</span></pre></div><p> </p><h3 id=\"30、避免在数组中使用负数做索引\">30、避免在数组中使用负数做索引</h3><div class=\"cnblogs_code\"><pre><span style=\"color: #0000ff;\">var</span> numbersArray = [1,2,3,4,5<span style=\"color: #000000;\">];</span><span style=\"color: #0000ff;\">var</span> from = numbersArray.indexOf(\"foo\") ; <span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> from is equal to -1</span>numbersArray.splice(from,2); <span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> will return [5]</span></pre></div><p> </p><p>注意传给<code>splice</code>的索引参数不要是负数，当是负数时，会从数组结尾处删除元素。</p><h3 id=\"31、用JSON来序列化与反序列化\">31、用JSON来序列化与反序列化</h3><div class=\"cnblogs_code\"><pre><span style=\"color: #0000ff;\">var</span> person = {name :\'Saad\', age : 26, department : {ID : 15, name : \"R&amp;<span style=\"color: #000000;\">D\"} };</span><span style=\"color: #0000ff;\">var</span> stringFromPerson =<span style=\"color: #000000;\"> JSON.stringify(person);</span><span style=\"color: #008000;\">/*</span><span style=\"color: #008000;\"> stringFromPerson 结果为 \"{\"name\":\"Saad\",\"age\":26,\"department\":{\"ID\":15,\"name\":\"R&amp;D\"}}\" </span><span style=\"color: #008000;\">*/</span><span style=\"color: #0000ff;\">var</span> personFromString =<span style=\"color: #000000;\"> JSON.parse(stringFromPerson);</span><span style=\"color: #008000;\">/*</span><span style=\"color: #008000;\"> personFromString 的值与 person 对象相同 </span><span style=\"color: #008000;\">*/</span></pre></div><p> </p><h3 id=\"32、不要使用eval()或者函数构造器\">32、不要使用<code>eval()</code>或者函数构造器</h3><p><code>eval()</code>和函数构造器（<code>Function</code> consturctor）的开销较大，每次调用，JavaScript引擎都要将源代码转换为可执行的代码。</p><div class=\"cnblogs_code\"><pre><span style=\"color: #0000ff;\">var</span> func1 = <span style=\"color: #0000ff;\">new</span><span style=\"color: #000000;\"> Function(functionCode);</span><span style=\"color: #0000ff;\">var</span> func2 = eval(functionCode);</pre></div><p> </p><h3 id=\"33、避免使用with()\">33、避免使用<code>with()</code></h3><p>使用<code>with()</code>可以把变量加入到全局作用域中，因此，如果有其它的同名变量，一来容易混淆，二来值也会被覆盖。</p><h3 id=\"34、不要对数组使用for-in\">34、不要对数组使用for-in</h3><p>避免：</p><div class=\"cnblogs_code\"><pre><span style=\"color: #0000ff;\">var</span> sum = 0<span style=\"color: #000000;\">;</span><span style=\"color: #0000ff;\">for</span> (<span style=\"color: #0000ff;\">var</span> i <span style=\"color: #0000ff;\">in</span><span style=\"color: #000000;\"> arrayNumbers) {    sum </span>+=<span style=\"color: #000000;\"> arrayNumbers[i];}</span></pre></div><p> </p><p>而是：</p><div class=\"cnblogs_code\"><pre><span style=\"color: #0000ff;\">var</span> sum = 0<span style=\"color: #000000;\">;</span><span style=\"color: #0000ff;\">for</span> (<span style=\"color: #0000ff;\">var</span> i = 0, len = arrayNumbers.length; i &lt; len; i++<span style=\"color: #000000;\">) {    sum </span>+=<span style=\"color: #000000;\"> arrayNumbers[i];}</span></pre></div><p> </p><p>另外一个好处是，<code>i</code>和<code>len</code>两个变量是在<code>for</code>循环的第一个声明中，二者只会初始化一次，这要比下面这种写法快：</p><div class=\"cnblogs_code\"><pre><span style=\"color: #0000ff;\">for</span> (<span style=\"color: #0000ff;\">var</span> i = 0; i &lt; arrayNumbers.length; i++)</pre></div><p> </p><h3 id=\"35、传给setInterval()和setTimeout()时使用函数而不是字符串\">35、传给<code>setInterval()</code>和<code>setTimeout()</code>时使用函数而不是字符串</h3><p>如果传给<code>setTimeout()</code>和<code>setInterval()</code>一个字符串，他们将会用类似于<code>eval</code>方式进行转换，这肯定会要慢些，因此不要使用：</p><div class=\"cnblogs_code\"><pre>setInterval(\'doSomethingPeriodically()\', 1000<span style=\"color: #000000;\">);setTimeout(\'doSomethingAfterFiveSeconds()\', </span>5000);</pre></div><p><span style=\"line-height: 1.5;\">而是用：</span></p><div class=\"cnblogs_code\"><pre>setInterval(doSomethingPeriodically, 1000<span style=\"color: #000000;\">);setTimeout(doSomethingAfterFiveSeconds, </span>5000);</pre></div><p> </p><h3><span style=\"font-size: 1.17em; line-height: 1.5;\">36、使用</span><code style=\"font-size: 1.17em; line-height: 1.5;\">switch/case</code><span style=\"font-size: 1.17em; line-height: 1.5;\">代替一大叠的</span><code style=\"font-size: 1.17em; line-height: 1.5;\">if/else</code></h3><p>当判断有超过两个分支的时候使用<code>switch/case</code>要更快一些，而且也更优雅，更利于代码的组织，当然，如果有超过10个分支，就不要使用<code>switch/case</code>了。</p><h3 id=\"37、在switch/case中使用数字区间\">37、在<code>switch/case</code>中使用数字区间</h3><p>其实，<code>switch/case</code>中的<code>case</code>条件，还可以这样写：</p><div class=\"cnblogs_code\"><pre><span style=\"color: #0000ff;\">function</span><span style=\"color: #000000;\"> getCategory(age) {    </span><span style=\"color: #0000ff;\">var</span> category =<span style=\"color: #000000;\"> \"\";    </span><span style=\"color: #0000ff;\">switch</span> (<span style=\"color: #0000ff;\">true</span><span style=\"color: #000000;\">) {        </span><span style=\"color: #0000ff;\">case</span><span style=\"color: #000000;\"> isNaN(age):        category </span>=<span style=\"color: #000000;\"> \"not an age\";        </span><span style=\"color: #0000ff;\">break</span><span style=\"color: #000000;\">;        </span><span style=\"color: #0000ff;\">case</span> (age &gt;= 50<span style=\"color: #000000;\">):        category </span>=<span style=\"color: #000000;\"> \"Old\";        </span><span style=\"color: #0000ff;\">break</span><span style=\"color: #000000;\">;        </span><span style=\"color: #0000ff;\">case</span> (age &lt;= 20<span style=\"color: #000000;\">):        category </span>=<span style=\"color: #000000;\"> \"Baby\";        </span><span style=\"color: #0000ff;\">break</span><span style=\"color: #000000;\">;        </span><span style=\"color: #0000ff;\">default</span><span style=\"color: #000000;\">:        category </span>=<span style=\"color: #000000;\"> \"Young\";        </span><span style=\"color: #0000ff;\">break</span><span style=\"color: #000000;\">;    };    </span><span style=\"color: #0000ff;\">return</span><span style=\"color: #000000;\"> category;}getCategory(</span>5); <span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> 将返回 \"Baby\"</span></pre></div><p> </p><h3><span style=\"font-size: 1.17em; line-height: 1.5;\">38、使用对象作为对象的原型</span></h3><p>下面这样，便可以给定对象作为参数，来创建以此为原型的新对象：</p><div class=\"cnblogs_code\"><pre><span style=\"color: #0000ff;\">function</span><span style=\"color: #000000;\"> clone(object) {    </span><span style=\"color: #0000ff;\">function</span><span style=\"color: #000000;\"> OneShotConstructor(){};    OneShotConstructor.prototype </span>=<span style=\"color: #000000;\"> object;    </span><span style=\"color: #0000ff;\">return</span> <span style=\"color: #0000ff;\">new</span><span style=\"color: #000000;\"> OneShotConstructor();}clone(Array).prototype ; </span><span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> []</span></pre></div><p> </p><h3><span style=\"font-size: 1.17em; line-height: 1.5;\">39、HTML字段转换函数</span></h3><div class=\"cnblogs_code\"><pre><span style=\"color: #0000ff;\">function</span><span style=\"color: #000000;\"> escapeHTML(text) {    </span><span style=\"color: #0000ff;\">var</span> replacements= {\"&lt;\": \"&lt;\", \"&gt;\": \"&gt;\",\"&amp;\": \"&amp;<span style=\"color: #000000;\">\", \"\"\": \"\"\"};    </span><span style=\"color: #0000ff;\">return</span> text.replace(/[&lt;&gt;&amp;\"]/g, <span style=\"color: #0000ff;\">function</span><span style=\"color: #000000;\">(character) {        </span><span style=\"color: #0000ff;\">return</span><span style=\"color: #000000;\"> replacements[character];    });}</span></pre></div><p> </p><h3><span style=\"font-size: 1.17em; line-height: 1.5;\">40、不要在循环内部使用try-catch-finally</span></h3><p>try-catch-finally中catch部分在执行时会将异常赋给一个变量，这个变量会被构建成一个运行时作用域内的新的变量。</p><p>切忌：</p><div class=\"cnblogs_code\"><pre><span style=\"color: #0000ff;\">var</span> object =<span style=\"color: #000000;\"> [\'foo\', \'bar\'], i;</span><span style=\"color: #0000ff;\">for</span> (i = 0, len = object.length; i &lt;len; i++<span style=\"color: #000000;\">) {    </span><span style=\"color: #0000ff;\">try</span><span style=\"color: #000000;\"> {    </span><span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> do something that throws an exception</span><span style=\"color: #000000;\">    }    </span><span style=\"color: #0000ff;\">catch</span><span style=\"color: #000000;\"> (e) {        </span><span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> handle exception</span><span style=\"color: #000000;\">    }}</span></pre></div><p><span style=\"line-height: 1.5;\">而应该：</span></p><div class=\"cnblogs_code\"><pre><span style=\"color: #0000ff;\">var</span> object =<span style=\"color: #000000;\"> [\'foo\', \'bar\'], i;</span><span style=\"color: #0000ff;\">try</span><span style=\"color: #000000;\"> {    </span><span style=\"color: #0000ff;\">for</span> (i = 0, len = object.length; i &lt;len; i++<span style=\"color: #000000;\">) {        </span><span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> do something that throws an exception</span><span style=\"color: #000000;\">    }}</span><span style=\"color: #0000ff;\">catch</span><span style=\"color: #000000;\"> (e) {    </span><span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> handle exception</span>}    </pre></div><p> </p><h3><span style=\"font-size: 1.17em; line-height: 1.5;\">41、使用XMLHttpRequests时注意设置超时</span></h3><p>XMLHttpRequests在执行时，当长时间没有响应（如出现网络问题等）时，应该中止掉连接，可以通过<code>setTimeout()</code>来完成这个工作：</p><div class=\"cnblogs_code\"><pre><span style=\"color: #0000ff;\">var</span> xhr = <span style=\"color: #0000ff;\">new</span><span style=\"color: #000000;\"> XMLHttpRequest ();xhr.onreadystatechange </span>= <span style=\"color: #0000ff;\">function</span><span style=\"color: #000000;\"> () {　　</span><span style=\"color: #0000ff;\">if</span> (<span style=\"color: #0000ff;\">this</span>.readyState == 4<span style=\"color: #000000;\">) {　　　　clearTimeout(timeout);　　　　</span><span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> do something with response data</span>　　<span style=\"color: #000000;\">}}</span><span style=\"color: #0000ff;\">var</span> timeout = setTimeout( <span style=\"color: #0000ff;\">function</span><span style=\"color: #000000;\"> () {　　xhr.abort(); </span><span style=\"color: #008000;\">\/\/</span><span style=\"color: #008000;\"> call error callback</span>}, 60*1000 <span style=\"color: #008000;\">/*</span><span style=\"color: #008000;\"> timeout after a minute </span><span style=\"color: #008000;\">*/</span><span style=\"color: #000000;\"> );xhr.open(\'GET\', url, </span><span style=\"color: #0000ff;\">true</span><span style=\"color: #000000;\">);xhr.send();</span></pre></div><p>同时需要注意的是，不要同时发起多个XMLHttpRequests请求。</p><h3 id=\"42、处理WebSocket的超时\">42、处理WebSocket的超时</h3><p>通常情况下，WebSocket连接创建后，如果30秒内没有任何活动，服务器端会对连接进行超时处理，防火墙也可以对单位周期没有活动的连接进行超时处理。</p><p>为了防止这种情况的发生，可以每隔一定时间，往服务器发送一条空的消息。可以通过下面这两个函数来实现这个需求，一个用于使连接保持活动状态，另一个专门用于结束这个状态。</p><div class=\"cnblogs_code\"><pre><span style=\"color: #0000ff;\">var</span> timerID = 0<span style=\"color: #000000;\">;</span><span style=\"color: #0000ff;\">function</span><span style=\"color: #000000;\"> keepAlive() {　　</span><span style=\"color: #0000ff;\">var</span> timeout = 15000<span style=\"color: #000000;\">;　　</span><span style=\"color: #0000ff;\">if</span> (webSocket.readyState ==<span style=\"color: #000000;\"> webSocket.OPEN) {　　　　webSocket.send(\'\');　　}　　timerId </span>=<span style=\"color: #000000;\"> setTimeout(keepAlive, timeout);}</span><span style=\"color: #0000ff;\">function</span><span style=\"color: #000000;\"> cancelKeepAlive() {　　</span><span style=\"color: #0000ff;\">if</span><span style=\"color: #000000;\"> (timerId) {　　　　cancelTimeout(timerId);　　}}</span></pre></div><p><code>keepAlive()</code>函数可以放在WebSocket连接的<code>onOpen()</code>方法的最后面，<code>cancelKeepAlive()</code>放在<code>onClose()</code>方法的最末尾。</p><h3 id=\"43、时间注意原始操作符比函数调用快，使用VanillaJS\">43、时间注意<a href=\"https:\/\/dev.opera.com/articles/efficient-javascript/?page=2#primitiveoperator\" rel=\"external\" target=\"_blank\">原始操作符比函数调用快</a>，使用<a href=\"http:\/\/vanilla-js.com/\" rel=\"external\" target=\"_blank\">VanillaJS</a></h3><p>比如，一般不要这样：</p><div class=\"cnblogs_code\"><pre><span style=\"color: #0000ff;\">var</span> min =<span style=\"color: #000000;\"> Math.min(a,b);A.push(v);</span></pre></div><p><span style=\"line-height: 1.5;\">可以这样来代替：</span></p><div class=\"line\"><div class=\"cnblogs_code\"><pre><span style=\"color: #0000ff;\">var</span> min = a &lt; b ?<span style=\"color: #000000;\"> a : b;A[A.length] </span>= v;</pre></div><p> </p></div><h3 id=\"44、开发时注意代码结构，上线时压缩JavaScript代码\">44、开发时注意代码结构，上线时压缩JavaScript代码</h3><p>可以使用JSLint或JSMin等方法来压缩代码。</p><h3 id=\"45、JavaScript博大精深，这里有些不错的学习资源\">45、JavaScript博大精深，这里有些<a href=\"http:\/\/stackoverflow.com/questions/11246/best-resources-to-learn-javascript\" rel=\"external\" target=\"_blank\">不错的学习资源</a></h3><ul><li>Code Academy资源：<a href=\"http:\/\/www.codecademy.com/tracks/javascript\" rel=\"external\" target=\"_blank\">http:\/\/www.codecademy.com/tracks/javascript</a></li><li>Marjin Haverbekex编写的<em>Eloquent JavaScript</em>：<a href=\"http:\/\/eloquentjavascript.net/\" rel=\"external\" target=\"_blank\">http:\/\/eloquentjavascript.net/</a></li><li>John Resig编写的<em>Advanced JavaScript</em>：<a href=\"http:\/\/ejohn.org/apps/learn/\" rel=\"external\" target=\"_blank\">http:\/\/ejohn.org/apps/learn/</a></li></ul>"});