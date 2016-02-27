var express = require("express"),
	app = express(),
    bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/resource`)); //, "/add"
app.set("views", `${__dirname}/views`);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get(["/", "/index"], (req, res) => {
	res.render("index");
});
app.get("/newBlog", (req, res) => {
	res.render("newBlog", {
		userId: 233
	})
});
app.post("/newBlog", (req, res) => {
	var content = req.body.blogContent;
	res.render("test_show", {
		content: content,
		test: content.replace(/\n/g, "")
	})
})
app.listen(12306);