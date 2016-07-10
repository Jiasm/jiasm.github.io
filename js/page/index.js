define(['feed/index'],function  (_data) {
	var datas = _data.data;
	var $panel = document.createDocumentFragment();
	var $article = createElement("li");
	var $title = createElement("p");
	var $postTitle = createElement("a");
	var $dateTitle = createElement("time");
	$article.className = "article";
	$title.className = "title";
	$postTitle.className = "post-title";
	$dateTitle.className = "date-title";
	for (var len = datas.length - 1; len >= 0; len--) {
		var data = datas[len];
		$article = $article.cloneNode();
		$title = $title.cloneNode();
		$postTitle = $postTitle.cloneNode();
		$dateTitle = $dateTitle.cloneNode();
		$postTitle.innerHTML = data.title;
		$postTitle.title = data.title;
		$postTitle.href = "#blog=" + data.id;
		$postTitle.id = data.id;
		$dateTitle.innerHTML = data.postDate;
		$postTitle.appendChild($dateTitle);
		$title.appendChild($postTitle);
		$article.appendChild($title);
		$panel.appendChild($article);
	}
	$history.push($panel.cloneNode(true));
	document.getElementById("article-list").appendChild($panel);
});