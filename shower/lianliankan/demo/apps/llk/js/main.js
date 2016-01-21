function onBeforeMainWinOpen(win) {
	var grid = win.findChildByName("ui-grid", true);

	var rows = 8;
	var cols = 6;
	var imageTypeNr = 12;
	var imageNr = rows * cols;
	var gameLevel = window.gameLevel;

	grid.setRows(rows);
	grid.setCols(cols);

	if(gameLevel === "medium") {
		imageTypeNr = 8;
	}
	else if(gameLevel === "easy") {
		imageTypeNr = 6;
	}

	var children = grid.getChildren();

	var n = rows * cols;
	var m = n - children.length;

	for(var i = 0; i < m; i++) {
		grid.addChild(grid.dupTemplateChild());
	}
	children.length = n;

	grid.reset = function() {
		var mapArr = [];
		var imageNrOfEachType = imageNr/imageTypeNr;
		imageNrOfEachType = imageNrOfEachType%2 ? imageNrOfEachType + 1 : imageNrOfEachType;
		imageTypeNr = imageNr/imageNrOfEachType;
		var labelTime = win.findChildByName("ui-label-time", true);
		labelTime.setText("0");

		for(var i = 0; i < imageTypeNr; i++) {
			for(var j = 0; j < imageNrOfEachType; j++) {
				mapArr.push(i);
			}
		}

		for(var i = 0; i < n; i++) {
			var iter = children[i];
			iter.setImageSrc(null);
			iter.setClickable(false);
			iter.setBorderStyle(null, 0);
			iter.imageID = -1;
		}

		var randArr = makeUniqRandArray(0, n-1);
		for(var i = 0; i < imageNr; i++) {
			var index = randArr[i];
			var iter = children[index];
			var imageID = mapArr[i];

			iter.imageID = imageID;
			iter.setClickable(true);
			iter.setClickedStyle(CanTK.UIImage.CLICKED_STYLE_RECT_BORDER, 3);
			iter.setImageSrc(iter.getImageSrc("option_image_" + imageID));
		}

		this.startTime = null;
		this.firstImage = null;
		this.secondImage = null;

		if(this.timerId) {
			clearTimeout(this.timerId);
			delete this.timerId;
		}

		this.relayout();
	}

	grid.replay = function() {
		this.reset();
	}

	grid.reset();

	////////////////////////////////////////////////////

	function X1_Link_X2(x, y1, y2) {
		var y = 0;

		if(y1>y2){
			y  = y1;
			y1 = y2;
			y2 = y;
		}

		for(i=y1+1; i<=y2; i++)	{
			if(i==y2) return true;

			if(children[i*cols+x].imageID >= 0) break;
		}

		if(XThrough(x-1,y1,false)&&XThrough(x-1,y2,false)) return true;

		if(XThrough(x+1,y1,true)&&XThrough(x+1,y2,true))	return true;

		return false;
	}

	function Y1_Link_Y2(x1, x2, y) {
		var x = 0;
		if(x1 > x2) {
			x=x1;
			x1=x2;
			x2=x;
		}

		for(i=x1+1;i<=x2;i++) {
			if(i==x2) return true;

			if(children[y*cols+i].imageID >= 0) break;
		}

		if(YThrough(x1,y-1,false)&&YThrough(x2,y-1,false)) return true;

		if(YThrough(x1,y+1,true)&&YThrough(x2,y+1,true))	return true;

		return false;
	}

	function LineX(x, y1, y2) {
		var y = 0;

		if(y1>y2)	{
			y=y1;
			y1=y2;
			y2=y;
		}

		for(y=y1;y<=y2;y++) {
			var i = y*cols+x;
			if(children[i].imageID >= 0) return false;
			if(y==y2) return true;
		}

		return false;
	}

	function LineY(x1, x2, y) {
		var x = 0;
		if(x1>x2) {
			x=x1;
			x1=x2;
			x2=x;
		}

		for(x=x1;x<=x2;x++){
			var i = y*cols+x;
			if(children[i].imageID >= 0) return false;
			if(x==x2) return true;
		}

		return false;
	}

	function OneCornerLink(x1, y1,x2, y2) {
		var n = 0;

		if(x1>x2) 	{
			n=x1;
			x1=x2;
			x2=n;
			n=y1;
			y1=y2;
			y2=n;
		}

		if(y2<y1) {
			if(LineY(x1+1,x2,y1)&&LineX(x2,y1,y2+1)) return true;
			if(LineY(x2-1,x1,y2)&&LineX(x1,y2,y1-1)) return true;
			return false;
		}	
		else 	{
			if(LineY(x1+1,x2,y1)&&LineX(x2,y1,y2-1)) return true;
			if(LineY(x2-1,x1,y2)&&LineX(x1,y2,y1+1)) return true;		

			return false;
		}

		return false;
	}

	function TwoCornerLink(x1, y1, x2, y2){
		var n = 0;

		if(x1>x2)
		{
			n=x1;
			x1=x2;
			x2=n;
			n=y1;
			y1=y2;
			y2=n;
		}

		if(XThrough(x1+1,y1,true)&&XThrough(x2+1,y2,true)) return true;

		if(XThrough(x1-1,y1,false)&&XThrough(x2-1,y2,false)) return true;

		if(YThrough(x1,y1-1,false)&&YThrough(x2,y2-1,false)) return true;
		
		if(YThrough(x1,y1+1,true)&&YThrough(x2,y2+1,true)) return true;

		for(x=x1+1;x<cols;x++)	{
			if(children[y1*cols+x].imageID >= 0)
				break;
			if(OneCornerLink(x,y1,x2,y2))
				return true;
		}

		for(x=x1-1;x>-1;x--) {
			if(children[y1*cols+x].imageID >= 0)
				break;
			if(OneCornerLink(x,y1,x2,y2))
				return true;
		}

		for(y=y1-1;y>-1;y--)
		{
			if(children[y*cols+x1].imageID >= 0)
				break;
			if(OneCornerLink(x1,y,x2,y2))
				return true;
		}

		for(y=y1+1;y<rows;y++)
		{
			if(children[y*cols+x1].imageID >= 0)
				break;
			if(OneCornerLink(x1,y,x2,y2))
				return true;
		}
		
		return false;
	}

	function XThrough(x, y, bAdd)
	{
		if(bAdd)
		{
			for(i=x;i<cols;i++)
				if(children[y*cols+i].imageID >= 0)
					return false;
		}
		else
		{
			for(i=0;i<=x;i++)
				if(children[y*cols+i].imageID >= 0)
					return false;
		}
		return true;
	}

	function YThrough(x, y, bAdd)
	{
		if(bAdd)
		{
			for(i=y;i<rows;i++)
				if(children[i*cols+x].imageID >= 0)
					return false;
		}
		else
		{
			for(i=0;i<=y;i++)
				if(children[i*cols+x].imageID >= 0)
					return false;
		}
		return true;
	}

	grid.IsLinked = function () {
		var indexOfFirst = children.indexOf(this.firstImage);
		var indexOfSecond = children.indexOf(this.secondImage);
		var y1 = Math.floor(indexOfFirst/cols);
		var x1 = indexOfFirst%cols;
		var y2 = Math.floor(indexOfSecond/cols);
		var x2 = indexOfSecond%cols;

		if(x1==x2)	{
			if(X1_Link_X2(x1,y1,y2))	return true;
		}
		else if(y1==y2)	{
			if(Y1_Link_Y2(x1,x2,y1))	return true;
		}

		if(OneCornerLink(x1,y1,x2,y2))	{
			return true;
		}
		else if(TwoCornerLink(x1,y1,x2,y2))	{
			return true;
		}

		return false;
	}

	function animateLinked(grid) {
		var firstImage = grid.firstImage;
		var secondImage = grid.secondImage;
		
		var config = {};

		config.opacityStart = 0.6;
		config.opacityEnd = 0;
		config.delay = 10;
		config.duration = 1000;
		config.scaleStart = 0.6;
		config.scaleEnd = 0.2;
		config.onDone = function(el) {
			el.imageID = -1;
			el.setScale(1);
			el.setOpacity(1);
			el.setClickable(false);
			el.setImageSrc(null);
			
			if(grid.isDone()) {
				var now = new Date();
				var cost = (now.getTime() - grid.startTime.getTime())/1000;
				var tips = cost + " seconds";
				HighScores.add(window.gameLevel, "player", cost);
				grid.openWindow("win_done", 
					function (retCode) {
						if(retCode) {
							grid.reset();
						}
						else {
							setTimeout(function() {
								grid.closeWindow(0);
							}, 1000);
						}	
				}, false, tips);
			}
		}

		firstImage.imageID = -1;
		secondImage.imageID = -1;

		firstImage.animate(config);
		secondImage.animate(config);
		
		CanTK.getEffectsPlayer().play("disappear");

		return;
	}

	grid.isDone = function() {
		for(var i = 0; i < this.children.length; i++) {
			var iter = this.children[i];
			if(iter.imageID >= 0) {
				return false;
			}
		}

		return true;
	}

	grid.updateTime = function() {
		function updateCostTime() {
			var str = "";
			var now = new Date();
			var labelTime = win.findChildByName("ui-label-time", true);
			if(grid.startTime) {
				str = Math.floor((now.getTime() - grid.startTime.getTime())/1000);
			}
			else {
				str = "0";
			}

			labelTime.setText(str);
			labelTime.postRedraw();

			if(grid.isDone()) {
				return;
			}

			if(grid.startTime) {
				setTimeout(updateCostTime, 1000);
			}
		}

		updateCostTime();

		return;
	}

	grid.onChildClicked = function(child) {
		if(child.imageID < 0) {
			return;
		}

		if(!this.startTime) {
			this.startTime = new Date();
			grid.updateTime();		
		}

		if(!this.firstImage) {
			this.firstImage = child;
			child.setBorderStyle("blue", 1);
		}
		else if(child.imageID >= 0) {
			if(this.firstImage === child) {
				return;
			}

			if(this.firstImage.imageID != child.imageID) {
				this.firstImage.setBorderStyle(null, 0);
				this.firstImage = child;
				child.setBorderStyle("blue", 1);
				return;
			}

			this.secondImage = child;
			if(this.IsLinked()) {
				animateLinked(this);
			}

			this.firstImage.setBorderStyle(null, 0);
			this.firstImage = null;	
			this.secondImage.setBorderStyle(null, 0);
			this.secondImage = null;
		}
	}

	CanTK.getEffectsPlayer().load("disappear", "apps/llk/audio/disappear.mp3");
}
