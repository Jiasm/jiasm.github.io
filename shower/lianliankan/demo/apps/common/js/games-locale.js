var gMyLocaleStringsZH = {
  "Back":"返回",
  "Go":"开始",
  "Preview":"预览",
  "Replay":"再玩一次",
  "Re-play":"重玩",
  "Well Done!":"恭喜过关!",
  "High Scores":"排行榜",
  "Clear":"清除",
  "Easy":"初级",
  "Medium":"中级",
  "Hard":"高级",
  "Help":"帮助",
  "Lost! You triggered a bomb!":"温馨提示：您踩雷了!"
};

var lang = cantkGetLocale();
if(lang.indexOf("zh") >= 0) {
	webappSetLocaleStrings(gMyLocaleStringsZH);
}

