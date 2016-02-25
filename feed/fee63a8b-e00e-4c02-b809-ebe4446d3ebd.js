define({id:"fee63a8b-e00e-4c02-b809-ebe4446d3ebd",title:"总结CSS3新特性(Transition篇)",postDate:"2015-07-21 14:06",content:"<blockquote><strong>CSS 过渡（transition）</strong>, 是 <a title=\"/en-US/docs/CSS/CSS3\" href=\"https:\/\/developer.mozilla.org/en-US/docs/CSS/CSS3\">CSS3</a> 规范的一部分, 用来控制 CSS 属性的变化速率。 可以让属性的变化过程持续一段时间，而不是立即生效。比如，将元素的颜色从白色改为黑色，通常这个改变是立即生效的，使用 transition 后，将按一个曲线速率变化。这个过程可以自定义。</blockquote><p>Transition是一个简写属性,四个值(单独使用均加transition-前缀)的顺序:</p><p>　　property</p><p>　　duration</p><p>　　timing-function</p><p>　　delay</p><p>过渡就是在一定时间内完成某属性值的改变,所以,transition-duration一定要设置,因为它默认值为0;</p><h2>Transition-Property:</h2><p> 要过渡的属性值,只有被指定的属性才会在过度时产生动画效果,可以填all,all为所有<a href=\"https:\/\/developer.mozilla.org/en-US/docs/CSS/CSS_animated_properties\" target=\"_blank\">可动画属性</a>;</p><pre class=\"language-javascript\"><code><span style=\"color: #800000;\">#demo </span>{<span style=\"color: #ff0000;\">    width</span>:<span style=\"color: #0000ff;\">20px</span>;<span style=\"color: #ff0000;\">    height</span>:<span style=\"color: #0000ff;\">20px</span>;<span style=\"color: #ff0000;\">    background-color</span>:#0080FF;<span style=\"color: #ff0000;\">    transition</span>:<span style=\"color: #0000ff;\">width 1.5s</span>;}<span style=\"color: #800000;\">#demo:hover </span>{<span style=\"color: #ff0000;\">    width</span>:<span style=\"color: #0000ff;\">30px</span>;<span style=\"color: #ff0000;\">    height</span>:<span style=\"color: #0000ff;\">30px</span>;}</code></pre><p>  只会对width的改变产生动画效果&darr;</p><div id=\"transition_property_demo1\"> </div><style><!--#transition_property_demo1 {	width:20px;	height:1em;	background-color:#0080FF;	transition:width 1.5s;	-webkit-transition:width 1.5s;	-moz-transition:width 1.5s;	-o-transition:width 1.5s;}#transition_property_demo1:hover {	width:30px;	height:30px;}--></style><p>  可以选择多个属性的值;</p><pre class=\"language-javascript\"><code><span style=\"color: #800000;\">#demo </span>{<span style=\"color: #ff0000;\">    width</span>:<span style=\"color: #0000ff;\">20px</span>;<span style=\"color: #ff0000;\">    height</span>:<span style=\"color: #0000ff;\">20px</span>;<span style=\"color: #ff0000;\">    background-color</span>:<span style=\"color: #0000ff;\">#0080FF</span>;<span style=\"color: #ff0000;\">    transition-property</span>:<span style=\"color: #0000ff;\">width , height</span>;<span style=\"color: #008000;\">/*</span><span style=\"color: #008000;\">写多个值用逗号分割</span><span style=\"color: #008000;\">*/</span><span style=\"color: #ff0000;\">    transition-duration</span>:<span style=\"color: #0000ff;\">2s</span>;<span style=\"color: #008000;\">/*</span><span style=\"color: #008000;\">过渡持续时间可以只写一个,也可分别指定,同样用逗号分割</span><span style=\"color: #008000;\">*/</span>}</code></pre><p> 使用简写时指定多个属性:</p><pre class=\"language-javascript\"><code><span style=\"color: #800000;\">#demo </span>{<span style=\"color: #ff0000;\">    width</span>:<span style=\"color: #0000ff;\">20px</span>;<span style=\"color: #ff0000;\">    height</span>:<span style=\"color: #0000ff;\">20px</span>;<span style=\"color: #ff0000;\">    background-color</span>:<span style=\"color: #0000ff;\">#0080FF</span>;<span style=\"color: #ff0000;\">    transition</span>:<span style=\"color: #0000ff;\">width 2s, height 4s</span>;<span style=\"color: #008000;\">/*</span><span style=\"color: #008000;\">两条定义之间用逗号分割,后两个值为选填.</span><span style=\"color: #008000;\">*/</span>}</code></pre><p> 使用子属性时需要注意几点:</p><pre class=\"language-javascript\"><code><span style=\"color: #800000;\">#demo </span>{<span style=\"color: #ff0000;\">    transition-property</span>:<span style=\"color: #0000ff;\">width , height , top</span>;<span style=\"color: #ff0000;\">    transition-duration</span>:<span style=\"color: #0000ff;\">2s , 3s</span>;<span style=\"color: #008000;\">/*</span><span style=\"color: #008000;\">定义时间个数少于属性个数,会再次循环数组</span><span style=\"color: #008000;\">*/</span>}<span style=\"color: #008000;\">/*</span><span style=\"color: #008000;\">相当于</span><span style=\"color: #008000;\">*/</span><span style=\"color: #800000;\">#demo </span>{<span style=\"color: #ff0000;\">    transition-property</span>:<span style=\"color: #0000ff;\">width , height , top</span>;<span style=\"color: #ff0000;\">    transition-duration</span>:<span style=\"color: #0000ff;\">2s , 3s , 2s</span>;}</code></pre><pre class=\"language-javascript\"><code><span style=\"color: #800000;\">#demo </span>{<span style=\"color: #ff0000;\">    transition-property</span>:<span style=\"color: #0000ff;\">width , height</span>;<span style=\"color: #ff0000;\">    transition-duration</span>:<span style=\"color: #0000ff;\">2s , 3s , 2s</span>;<span style=\"color: #008000;\">/*</span><span style=\"color: #008000;\">定义时间个数多于属性个数,多出的值会被截取</span><span style=\"color: #008000;\">*/</span>}<span style=\"color: #008000;\">/*</span><span style=\"color: #008000;\">相当于</span><span style=\"color: #008000;\">*/</span><span style=\"color: #800000;\">#demo </span>{<span style=\"color: #ff0000;\">    transition-property</span>:<span style=\"color: #0000ff;\">width , height</span>;<span style=\"color: #ff0000;\">    transition-duration</span>:<span style=\"color: #0000ff;\">2s , 3s</span>;}</code></pre><h2>Transition-duration:</h2><p> 设定过渡持续的时间,可以为秒或毫秒,本人理解为过渡就是通过设置的持续时间结合<a href=\"https:\/\/developer.mozilla.org/zh-CN/docs/Web/CSS/transition-timing-function#.E8.AF.AD.E6.B3.95\" target=\"_blank\">缓动函数</a>计算相应的属性值改变的曲线;</p><p> 比如4秒内宽度从100px过渡到200px,简单的分为4帧(假设) 125px-150px-175px-200px;原理应该与animation的from to 类似;</p><div id=\"transition_duration_demo1\">过渡持续2s</div><style><!--#transition_duration_demo1 {	width:150px;	height:1.5em;	background-color:#0080FF;	transition:width 2s;	-webkit-transition:width 2s;	-moz-transition:width 2s;	-o-transition:width 2s;}#transition_duration_demo1:hover {	width:180px;}--></style><p> </p><div id=\"transition_duration_demo2\">过渡持续4s</div><style><!--#transition_duration_demo2 {	width:150px;	height:1.5em;	background-color:#0080FF;	transition:width 4s;	-webkit-transition:width 4s;	-moz-transition:width 4s;	-o-transition:width 4s;}#transition_duration_demo2:hover {	width:180px;}--></style><p> </p><div id=\"transition_duration_demo3\">过渡持续8s</div><style><!--#transition_duration_demo3 {	width:150px;	height:1.5em;	background-color:#0080FF;	transition:width 8s;	-webkit-transition:width 8s;	-moz-transition:width 8s;	-o-transition:width 8s;}#transition_duration_demo3:hover {	width:180px;}--></style><h2>Transition-timing-function:</h2><p> 设定过渡动画的曲线,这里是<a href=\"http:\/\/www.w3school.com.cn/tiy/t.asp?f=css3_transition-timing-function2\" target=\"_blank\">W3School的示例</a>,里边用到了是几个常用的,浏览器里内置的几种动画曲线,还可以通过cubic-bezier(<em>n</em>,<em>n</em>,<em>n</em>,<em>n</em>)来进行定制,n为0-1之间的值;</p><p> 挺全的一个<a href=\"http:\/\/easings.net/zh-cn\" target=\"_blank\">缓动函数</a>集合,默认不设置时,为ease,慢速开始,然后变快再慢速结束;</p><h2>Transition-delay:</h2><p> 设定动画开始前的等待时间(默认为0,无延迟);</p><div id=\"transition_delay_demo1\">鼠标悬浮2s后拉伸</div><style><!--#transition_delay_demo1 {	width:150px;	height:1.5em;	background-color:#0080FF;	transition:width 3s;	-webkit-transition:width 3s;	-moz-transition:width 3s;	-o-transition:width 3s;	transition-delay:2s;	-webkit-transition-delay:2s;	-moz-transition-delay:2s;	-o-transition-delay:2s;}#transition_delay_demo1:hover {	width:300px;}--></style><h2>总结:</h2><p> 使用Transition能使页面看上去更富有动感,下面是一个按钮的简单例子;</p><p><button id=\"transition-demo1\" class=\"demo-button\"> Hover me </button> <button id=\"transition-demo2\" class=\"demo-button\"> Hover me </button></p><style><!--.demo-button {	border:0px;	background-color:#2aaacb;	position:relative;  padding:0.7em 1.8em;  font-size:1em;  border-radius:3px;  margin-right:2em;  color:#fff;  -webkit-transform: translateZ(0);  transform: translateZ(0);  -webkit-transition-property: color;  transition-property: color;  -webkit-transition-duration: 0.3s;  transition-duration: 0.3s;}.demo-button:before {	content: \"\";	z-index:-1;	position: absolute;	width: 100%;	height: 100%;	background-color: #3BD1F8;	top: 0;	left: 0;  -webkit-transform-origin: 50%;  transform-origin: 50%;  -webkit-transition-property: transform;  transition-property: transform;  -webkit-transition-duration: 0.3s;  transition-duration: 0.3s;  -webkit-transition-timing-function: ease-out;  transition-timing-function: ease-out;}#transition-demo1:before {	-webkit-transform: scaleY(0);  transform: scaleY(0);}#transition-demo1:hover:before {	 -webkit-transform: scaleY(1);  transform: scaleY(1);}#transition-demo2:before {	-webkit-transform: scaleX(0);  transform: scaleX(0);}#transition-demo2:hover:before {	 -webkit-transform: scaleX(1);  transform: scaleX(1);}--></style><p> </p><p> </p><pre class=\"language-javascript\"><code><span style=\"color: #800000;\">.demo-button </span>{<span style=\"color: #ff0000;\">  border</span>:<span style=\"color: #0000ff;\">0px</span>;<span style=\"color: #ff0000;\">  background-color</span>:<span style=\"color: #0000ff;\">#2aaacb</span>;<span style=\"color: #ff0000;\">  position</span>:<span style=\"color: #0000ff;\">relative</span>;<span style=\"color: #ff0000;\">  padding</span>:<span style=\"color: #0000ff;\">0.7em 1.8em</span>;<span style=\"color: #ff0000;\">  font-size</span>:<span style=\"color: #0000ff;\">1.1em</span>;<span style=\"color: #ff0000;\">  border-radius</span>:<span style=\"color: #0000ff;\">3px</span>;<span style=\"color: #ff0000;\">  margin-right</span>:<span style=\"color: #0000ff;\">2em</span>;<span style=\"color: #ff0000;\">  color</span>:<span style=\"color: #0000ff;\">#fff</span>;<span style=\"color: #ff0000;\">  -webkit-transform</span>:<span style=\"color: #0000ff;\"> translateZ(0)</span>;<span style=\"color: #ff0000;\">  transform</span>:<span style=\"color: #0000ff;\"> translateZ(0)</span>;}<span style=\"color: #800000;\">.demo-button:before </span>{<span style=\"color: #ff0000;\">  content</span>:<span style=\"color: #0000ff;\"> \"\"</span>;<span style=\"color: #ff0000;\">  z-index</span>:<span style=\"color: #0000ff;\">-1</span>;<span style=\"color: #ff0000;\">  position</span>:<span style=\"color: #0000ff;\"> absolute</span>;<span style=\"color: #ff0000;\">  width</span>:<span style=\"color: #0000ff;\"> 100%</span>;<span style=\"color: #ff0000;\">  height</span>:<span style=\"color: #0000ff;\"> 100%</span>;<span style=\"color: #ff0000;\">  background-color</span>:<span style=\"color: #0000ff;\"> #3BD1F8</span>;<span style=\"color: #ff0000;\">  top</span>:<span style=\"color: #0000ff;\"> 0</span>;<span style=\"color: #ff0000;\">  left</span>:<span style=\"color: #0000ff;\"> 0</span>;<span style=\"color: #ff0000;\">  -webkit-transition-property</span>:<span style=\"color: #0000ff;\"> transform</span>;<span style=\"color: #ff0000;\">  transition-property</span>:<span style=\"color: #0000ff;\"> transform</span>;<span style=\"color: #ff0000;\">  -webkit-transition-duration</span>:<span style=\"color: #0000ff;\"> 0.3s</span>;<span style=\"color: #ff0000;\">  transition-duration</span>:<span style=\"color: #0000ff;\"> 0.3s</span>;<span style=\"color: #ff0000;\">  -webkit-transition-timing-function</span>:<span style=\"color: #0000ff;\"> ease-out</span>;<span style=\"color: #ff0000;\">  transition-timing-function</span>:<span style=\"color: #0000ff;\"> ease-out</span>;}<span style=\"color: #800000;\">#transition-demo1:before </span>{<span style=\"color: #ff0000;\">  -webkit-transform</span>:<span style=\"color: #0000ff;\"> scaleY(0)</span>;<span style=\"color: #ff0000;\">  transform</span>:<span style=\"color: #0000ff;\"> scaleY(0)</span>;}<span style=\"color: #800000;\">#transition-demo1:hover:before </span>{<span style=\"color: #ff0000;\">  -webkit-transform</span>:<span style=\"color: #0000ff;\"> scaleY(1)</span>;<span style=\"color: #ff0000;\">  transform</span>:<span style=\"color: #0000ff;\"> scaleY(1)</span>;}<span style=\"color: #800000;\">#transition-demo2:before </span>{<span style=\"color: #ff0000;\">  -webkit-transform</span>:<span style=\"color: #0000ff;\"> scaleX(0)</span>;<span style=\"color: #ff0000;\">  transform</span>:<span style=\"color: #0000ff;\"> scaleX(0)</span>;}<span style=\"color: #800000;\">#transition-demo2:hover:before </span>{<span style=\"color: #ff0000;\">  -webkit-transform</span>:<span style=\"color: #0000ff;\"> scaleX(1)</span>;<span style=\"color: #ff0000;\">  transform</span>:<span style=\"color: #0000ff;\"> scaleX(1)</span>;}</code></pre><p>结合transform做的按钮,主要是用到了:before元素,实现这种效果默认时缩小为不可见,hover时还原元素大小,缩放X,Y轴的改变实现了两个不同的button;</p><p>本文如有不足或错误,还请指出.共同学习;</p><p>部分参考资料:</p><p><br /><a href=\"https:\/\/developer.mozilla.org/zh-CN/docs/Web/CSS/transition\" target=\"_blank\">MDNCSS过渡</a></p><p><a href=\"https:\/\/developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Using_CSS_transitions\" target=\"_blank\">MDN使用CSS过渡</a></p><p> </p><p><a href=\"http:\/\/www.w3school.com.cn/css3/css3_transition.asp\" target=\"_blank\">W3School_CSS过渡</a></p><p><a href=\"http:\/\/easings.net/zh-cn\" target=\"_blank\">缓动函数集合</a></p><p> </p>"});