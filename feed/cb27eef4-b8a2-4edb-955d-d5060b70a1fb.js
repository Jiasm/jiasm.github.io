{
  "id": "cb27eef4-b8a2-4edb-955d-d5060b70a1fb",
  "title": "JS-取出字符串中重复次数最多的字符并输出",
  "postDate": "2015-03-31 16:42",
  "content": "<div class=\\\"cnblogs_Highlighter\\\"><p> </p></div><div class=\\\"cnblogs_Highlighter\\\"><pre class=\\\"language-javascript\\\"><code>/**  取出字符串中重复字数最多的字符*/\\nvar words = \\'sdfghjkfastgbyhnvdstyaujskgfdfhlaa\\';   　　　　　\\/\\/创建字符串var word,   　　　　　　　　　　　　　　　　　　　　　　　　　\\/\\/单个字符\\n  length; 　　　　　　　　　　　　　　　　　　　　　　　　　\\/\\/该字符的长度\\n\\/\\/定义输出对象var max = {\\n  wordName : \\'\\',  　　　　　　　　　　　　　　　　　　　　　\\/\\/重复次数最多的字符\\n  wordLength : 0  　　　　　　　　　　　　　　　　　　　　　\\/\\/重复的次数\\n};\\n\\/\\/递归方法,传入字符串\\n(function(words) {\\n  if (!words) return;     \\/\\/如果字符串已经变空则返回,结束递归\\n  word  = words[0];    \t\\/\\/取出字符串中的第一个字符\\n  length  = words.length;     \\/\\/将length设为当前字符串长度\\n  words   = words.replace(new RegExp(word, \\'g\\'), \\'\\'); \\/\\/返回将字符串剔除当前字符的剩余字符串\\n  length  = length - words.length;      \\/\\/重设length为当前字符在字符串中的长度\\n  if (length &gt; max.wordLength)       \\/\\/如果该字符重复次数大于maxLength,则重设maxLength为当前字符重复次数\\n    max = {        \\/\\/重设对象的值\\n      wordName  : word,\\n      wordLength  : length\\n    };\\n  arguments.callee(words);    \\/\\/递归调用,传入剩余字符串\\n})(words);\\nconsole.log(max.wordName+\\\"\\\\n\\\"+max.wordLength);      \\/\\/递归结束后输出结果</code></pre><p>　　</p><p>今天上午偶然看见这样的一个问题.看到网上大部分是用两个循环做出来的.然后自己用递归写了一下</p><p>思路是</p><p>　　每递归一次.取出第一个字符.从字符串中剔除相同符号的字符,并拿之前的字符串长度减去剔除后的字符串长度.</p><p>　　得到的是该字符串中当前字符所重复次数.</p><p>　　判断该字符重复次数是否大于当前输出对象中存储的maxLength.</p><p>　　如true,则更新</p><p>　　然后进入下次递归,直到字符串被替换完,终止</p><p>　　输出对象中存储的就是次数最多的字符以及重复的次数</p>"
}
