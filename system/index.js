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
    postDate: `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()} ${now.getHours()}:${now.getMinutes()}}`,
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
  var commitCmd = `git commit -m "${'powered by jarvis ' + new Date()}"`
  var pushCmd = 'git push'

  execSync(commitCmd)
  execSync(pushCmd)
}

app.listen(12306, () => console.log('run as 12306'))
