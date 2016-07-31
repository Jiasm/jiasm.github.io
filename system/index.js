// "use strict";
// var express = require("express"),
//     app = express(),
//     fs = require("fs"),
//     uuid = require("node-uuid"),
//     bodyParser = require("body-parser"),
//     exec = require('child_process').exec,
//     url = require("url"),
//     qs = require("querystring"),
//     feedPath = "./feed/", // 博客数据存储位置
//     feddIndex = "index.js"; // 博客目录文件名
//
// app.set("view engine", "ejs");
// app.use(express.static(`${__dirname}/resource`));
// app.set("views", `${__dirname}/views`);
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
// app.get(["/", "/index"], (req, res) => {
//     res.render("index");
// });
// // add操作
// app.get("/newBlog", (req, res) => {
//     res.render("newBlog")
// });
// app.post("/newBlog", (req, res) => {
//     var end = "]});";
//     fs.readFile(`${feedPath}${feddIndex}`, (err, data) => {
//         var indexContent = data.toString(),
//             id = uuid.v1(); // 唯一标识
//         while (new RegExp(id).test(indexContent)) { // 防止重名
//             console.log("一般来说是不会进来的");
//             id = uuid.v1();
//         }
//         var now = new Date(),
//             postDate = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`, // 发表时间
//             title = req.body.blogTitle, // 博文标题
//             content = req.body.blogContent.replace(/\n|\r/g, ""); // 博文内容
//
//         writeBlog(id, title, postDate, content, res);
//     });
// });
// // 文章列表 进行删除修改操作
// app.get("/list", (req, res) => {
//     let items = getAllBlogs();
//     res.render("list", {
//         blogs: items.reverse()
//     })
// });
// // 删除文章 ?id=XXX
// app.get("/removeBlog", (req, res) => {
//     var fileName = qs.parse(url.parse(req.url).query).id;
//     var cmd = `git rm ${feedPath}${fileName}.js`; // 删除文件
//     exec(cmd, (error) => {
//         if (error) {
//             console.error(error);
//         } else {
//             gitCommit((error) => {
//                 if (error) {
//                     console.error(error);
//                 } else {
//                     let items = getAllBlogs();
//                     res.render("list", {
//                         blogs: items.reverse()
//                     })
//                 }
//             });
//         }
//     })
// });
// // 编辑文章 ?id=XXX
// app.get("/editorBlog", (req, res) => {
//     var fileName = qs.parse(url.parse(req.url).query).id;
//     var blog = getBlog(`${feedPath}${fileName}.js`);
//     res.render("editorBlog", {
//         blog: blog
//     });
// })
// app.post("/editorBlog", (req, res) => {
//     var id = req.body.blogId,
//         postDate = req.body.blogPost, // 发表时间
//         title = req.body.blogTitle, // 博文标题
//         content = req.body.blogContent.replace(/\n|\r/g, ""); // 博文内容
//     writeBlog(id, title, postDate, content, res);
// })
// app.listen(12306, () => {
//     console.log("runing at 12306");
// });
// // 提交完git后的回调 跳转到我的博客
// function callback(res) { // 对文件操作完成后的回掉
//     console.log("进入提交完成后的回调");
//     res.redirect("http://jiasm.github.io/"); // 跳转到博客
// }
// // 写入文章 用于 add alter
// function writeBlog(id, title, postDate, content, res) {
//     console.log("博文js文件开始生成：")
//     fs.writeFile(`${feedPath}${id}.js`, `define({"id":"${id}","title":"${title}","postDate":"${postDate}","content":"${content.replace(/(\"|\')+?/g, "\\$1")}"});`, (err) => {
//         if (err) {
//             console.error("博文js文件生成出错了。", err);
//         } else {
//             console.log("博文js文件生成完毕。");
//             buildIndex(); // 重新生成index.js
//             gitCommit(callback, res); // 提交到git
//         }
//     })
// }
// // 调用该函数 重新生成目录.js
// function buildIndex() { // 生成博文目录的数据
//     let items = getAllBlogs(); // 博文列表
//     var indexRender = `define(${JSON.stringify({data : items})});`;
//
//     console.log("开始生成目录文件：");
//     fs.writeFileSync(`${feedPath}${feddIndex}`, indexRender);
//     console.log("目录文件生成完毕");
// }
//
// // 获取所有文章
// function getAllBlogs() {
//     let items = [],
//         files = fs.readdirSync(feedPath);
//     // 获取所有的博文
//     files.forEach((item) => {
//         if (item != feddIndex) { // 跳过目录.js
//             let itemPath = `${feedPath}${item}`;
//             let stats = fs.statSync(itemPath);
//             if (!stats.isDirectory()) { // 如果是文件
//                 items.push(genratorJSON(itemPath));
//             }
//         }
//     });
//
//     return items.sort((left, right) => {
//         return new Date(left.postDate) - new Date(right.postDate)
//     })
// }
// // 获取文章json 不包含content
// function genratorJSON(path) {
//     let data = fs.readFileSync(path);
//     // 将适用于require的js文件砍掉一些，以转换为标准json格式
//     var str = data.toString().replace(/^define\(|\,\"?content\"?\:.*\)\;$/g, "") + "}";
//     if (/\{id\:/.test(str)) { // 如果json的key不标准（没有双引号）给他加上（主要是前期js用java生成，搞得不太标准）
//         str = str.replace(/(\w+)?\:\"/g, "\"$1\"\:\"");
//     }
//     var obj = JSON.parse(str);
//     obj.postDate = obj.postDate.replace(/\-/g, "\/"); // 将之前的日期的横线转一下（改用 / 省得出问题- -）
//     return obj;
// }
// // 获取文章json 包含content
// function getBlog(path) {
//     let data = fs.readFileSync(path);
//     var str = data.toString().replace(/^define\(|\)\;?$/g, "");
//     if (/\{id\:/.test(str)) { // 如果json的key不标准（没有双引号）给他加上（主要是前期js用java生成，搞得不太标准）
//         str = str.replace(/(\w+)?\:\"/g, "\"$1\"\:\"");
//     }
//     var obj = JSON.parse(str);
//     obj.postDate = obj.postDate.replace(/\-/g, "\/");
//     return obj;
// }
//
// // 提交改动到git
// function gitCommit(callback, res) {
//     var cmd = 'git add --all';
//     exec(cmd, (error) => {
//         if (error) {
//             console.error(error);
//         } else {
//             let cmd = `git commit -m "${"来自本地博客后台系统" + new Date()}"`;
//             exec(cmd, (error) => {
//                 if (error) {
//                     console.error(error);
//                 } else {
//                     console.log("提交到git");
//                     exec('git push', (error) => {
//                         if (error) {
//                             console.error(error);
//                         } else {
//                             callback(res)
//                         }
//                     });
//                 }
//             })
//         }
//     });
// }

'use strict'

var app = require('koa')()
var router = require('koa-router')()
var serve = require('koa-static')
var views = require('co-views')
let bodyParser = require('koa-body-parser')
var uuid = uuid = require('node-uuid')
var fs = require('fs')
var execSync = require('child_process').execSync

var render = views('./system/views', {
  map: { html: 'ejs' }
})

app.use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(serve('./system/resource'))

router.get('/', function * () {
  this.body = yield render('index')
})

router.get('/blogList', function * () {
  var list = fs.readFileSync('./feed/index.js')
  this.body = list.toString()
})
// add操作
router.get('/new', function * () {
  this.body = yield render('new')
})
router.post('/new', function * () {
  var blogId = uuid.v1()
  var now = new Date()
  var body = this.request.body
  var json = {
    id: blogId,
    title: body.blogTitle,
    postDate: `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`,
    content: body.blogContent.replace(/\\/g, '\\\\')
  }
  var indexFile = fs.readFileSync('./feed/index.js').toString()
  while (new RegExp(blogId).test(indexFile)) { // 防止重名
    blogId = uuid.v1()
  }
  fs.writeFileSync(`./feed/${blogId}.js`, JSON.stringify(json, null, 2))
  buildIndex(blogId)
  this.redirect('/')
})
// 删除文章 ?id=XXX
router.get('/remove/:blogId', function () {
  var blogId = this.params.blogId
  fs.unlinkSync(`./feed/${blogId}.js`)
  buildIndex(blogId)
  this.redirect('/')
})

router.get('/update/:blogId', function * () {
  var blogId = this.params.blogId
  var blogList = fs.readdirSync('./feed')
  if (blogList.includes(`${blogId}.js`)) {
    var result = JSON.parse(fs.readFileSync(`./feed/${blogId}.js`))
    this.body = yield render('editor', {
      blog: result
    })
  }
})

router.post('/update/:blogId', function * () {
  var blogId = this.params.blogId
  var body = this.request.body
  var json = {
    id: blogId,
    title: body.blogTitle,
    postDate: body.blogPost,
    content: body.blogContent.replace(/\\/g, '\\\\')
  }
  fs.writeFileSync(`./feed/${blogId}.js`, JSON.stringify(json, null, 2))
  buildIndex(blogId)
  this.redirect('/')
})
// 调用该函数 重新生成目录.js
function buildIndex (id, self) { // 生成博文目录的数据
  let items = getAllBlogs() // 博文列表
  var indexRender = `${JSON.stringify({data: items})}`

  console.log('开始生成目录文件：')
  fs.writeFileSync('./feed/index.js', indexRender)
  gitCommit([id, 'index'])
  console.log('目录文件生成完毕')
}
// 获取所有文章
function getAllBlogs () {
  let items = []
  let files = fs.readdirSync('./feed')
    // 获取所有的博文
  files.forEach((item) => {
    if (item !== 'index.js' && item !== 'translate.js') { // 跳过目录.js
      let itemPath = `./feed/${item}`
      let stats = fs.lstatSync(itemPath)
      if (stats.isFile()) { // 如果是文件
        let info = JSON.parse(fs.readFileSync(itemPath))
        delete info.content
        items.push(info)
      }
    }
  })

  return items.sort((left, right) => {
    return new Date(left.postDate) - new Date(right.postDate)
  })
}

// 提交改动到git
function gitCommit (fileNames) {
  for (let fileName of fileNames) {
    execSync(`git add feed/${fileName}.js`)
  }
  var commitCmd = `git commit -m "${'power by jarvis ' + new Date()}"`
  var pushCmd = 'git push'

  execSync(commitCmd)
  execSync(pushCmd)
}

app.listen(12306, () => console.log('run as 12306'))
