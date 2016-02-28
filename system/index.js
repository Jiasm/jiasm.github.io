"use strict";
var express = require("express"),
    app = express(),
    fs = require("fs"),
    uuid = require("node-uuid"),
    bodyParser = require("body-parser"),
    feedPath = "../feed/", // 博客数据存储位置
    feddIndex = "index.js"; // 博客目录文件名

app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/resource`)); //
app.set("views", `${__dirname}/views`);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get(["/", "/index"], (req, res) => {
    res.render("index");
});
app.get("/newBlog", (req, res) => {
    res.render("newBlog")
});
app.post("/newBlog", (req, res) => {
    var end = "]});";
    fs.readFile(`${feedPath}${feddIndex}`, (err, data) => {
        var indexContent = data.toString(),
            id = uuid.v1(); // 唯一标识
        while (new RegExp(id).test(indexContent)) { // 防止重名
            console.log("一般来说是不会进来的");
            id = uuid.v1();
        }
        var now = new Date(),
            postDate = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`, // 发表时间
            title = req.body.blogTitle, // 博文标题
            content = req.body.blogContent.replace(/\n|\r/g, ""); // 博文内容

        console.log("博文js文件开始生成：")
        fs.writeFile(`../feed/${id}.js`, `define({"id":"${id}","title":"${title}","postDate":"${postDate}","content":"${content.replace(/(\"|\')+?/g, "\\$1")}"});`, (err) => {
            if (err) {
                console.error("博文js文件生成出错了。");
            } else {
                console.log("博文js文件生成完毕。");
                buildIndex(); 	// 重新生成index.js
                gitCommit();	// 提交到git
    			res.redirect("http://jiasm.github.io/");	// 跳转到博客
            }
        })
    });
});
app.listen(12306, () => {
    console.log("runing at 12306");
});

// 调用该函数 重新生成目录.js
function buildIndex() { // 生成博文目录的数据
    let items = []; // 博文列表
    var files = fs.readdirSync(feedPath);
    // 获取所有的博文
    files.forEach((item) => {
        if (item != feddIndex) { // 跳过目录.js
            let itemPath = `${feedPath}${item}`;
            let stats = fs.statSync(itemPath);
            if (!stats.isDirectory()) { // 如果是文件
                let data = fs.readFileSync(itemPath);
                // 将适用于require的js文件砍掉一些，以转换为标准json格式
                var str = data.toString().replace(/^define\(|\,\"?content\"?\:.*\)\;$/g, "") + "}";
                if (/\{id\:/.test(str)) { // 如果json的key不标准（没有双引号）给他加上
                    str = str.replace(/(\w+)?\:\"/g, "\"$1\"\:\"");
                }
                items.push(JSON.parse(str));
            }
        }
    });

    items = items.sort((left, right) => {
        return new Date(left.postDate) - new Date(right.postDate)
    })
    var indexRender = `define(${JSON.stringify({data : items})});`;

    console.log("开始生成目录文件：");
    fs.writeFileSync(`${feedPath}${feddIndex}`, indexRender);
}

// 提交改动到git
function gitCommit() {
    var exec = require('child_process').exec,
        cmd = 'git add --all';
    exec(cmd, (error) => {
        if (error) {
            console.error(error);
        } else {
            let cmd = `git commit -m "${"来自本地博客后台系统" + new Date()}`;
            exec(cmd, (error) => {
                if (error) {
                    console.error(error);
                } else {
                    console.log(`提交完成：${new Date()}`);
                }
            })
        }
    });
}
