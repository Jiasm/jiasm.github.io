/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(3);
	
	var _Layout = __webpack_require__(4);
	
	var _Layout2 = _interopRequireDefault(_Layout);
	
	var _LazyLayout = __webpack_require__(9);
	
	var _LazyLayout2 = _interopRequireDefault(_LazyLayout);
	
	var _Header = __webpack_require__(12);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Content = __webpack_require__(22);
	
	var _Content2 = _interopRequireDefault(_Content);
	
	var _List = __webpack_require__(25);
	
	var _List2 = _interopRequireDefault(_List);
	
	var _Blog = __webpack_require__(31);
	
	var _Blog2 = _interopRequireDefault(_Blog);
	
	var _Loading = __webpack_require__(34);
	
	var _Loading2 = _interopRequireDefault(_Loading);
	
	var _Footer = __webpack_require__(19);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _reactRouter = __webpack_require__(18);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var staticConfig = {
	  title: 'Jarvis'
	};
	
	var navList = [{
	  text: '首页',
	  link: '/'
	}, {
	  text: '分类',
	  link: '/'
	}, {
	  text: 'GitHub',
	  href: 'https://github.com/jiasm'
	}];
	
	var getBlogList = function getBlogList(cb) {
	  $.ajax({
	    url: 'feed/index.js',
	    success: function success(result) {
	      cb(result.data.reverse());
	    },
	    dataType: 'json'
	  });
	};
	
	var getBlogContent = function getBlogContent(id) {
	  return function (cb) {
	    $.ajax({
	      url: 'feed/' + id + '.js',
	      success: function success(result) {
	        cb(_react2.default.createElement(
	          _Layout2.default,
	          null,
	          _react2.default.createElement(_Header2.default, { text: result.title, navList: navList, navTitle: staticConfig.title }),
	          _react2.default.createElement(
	            _Content2.default,
	            null,
	            _react2.default.createElement(_Blog2.default, result)
	          ),
	          _react2.default.createElement(_Footer2.default, null)
	        ));
	      },
	      dataType: 'json'
	    });
	  };
	};
	
	var ListLayout = function ListLayout() {
	  return _react2.default.createElement(
	    _Layout2.default,
	    null,
	    _react2.default.createElement(_Header2.default, { text: staticConfig.title, navList: navList }),
	    _react2.default.createElement(
	      _Content2.default,
	      null,
	      _react2.default.createElement(_List2.default, { getData: getBlogList })
	    ),
	    _react2.default.createElement(_Loading2.default, null),
	    _react2.default.createElement(_Footer2.default, null)
	  );
	};
	
	var BlogLayout = function BlogLayout(_ref) {
	  var id = _ref.params.id;
	
	  return _react2.default.createElement(
	    _LazyLayout2.default,
	    { loadData: getBlogContent(id) },
	    _react2.default.createElement(_Header2.default, { text: staticConfig.title, navList: navList, navTitle: staticConfig.title }),
	    _react2.default.createElement(
	      _Content2.default,
	      null,
	      _react2.default.createElement(_Loading2.default, { visible: true })
	    ),
	    _react2.default.createElement(_Footer2.default, null)
	  );
	};
	window.addEventListener('load', function () {
	  (0, _reactDom.render)(_react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.hashHistory },
	    _react2.default.createElement(_reactRouter.Route, { path: '/', component: ListLayout }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/blog/:id', component: BlogLayout })
	  ), document.getElementById('root'));
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1);

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = lib;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(35);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* powered by jarvis */
	
	var Layout = function (_Component) {
	  _inherits(Layout, _Component);
	
	  function Layout() {
	    _classCallCheck(this, Layout);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Layout).apply(this, arguments));
	  }
	
	  _createClass(Layout, [{
	    key: 'render',
	    value: function render() {
	      var children = this.props.children;
	
	      return _react2.default.createElement(
	        'div',
	        { className: _index.layout },
	        children
	      );
	    }
	  }]);
	
	  return Layout;
	}(_react.Component);
	
	exports.default = Layout;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?module&localIdentName=[hash:base64:5]&-url!./index.css", function() {
				var newContent = require("!!./../../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?module&localIdentName=[hash:base64:5]&-url!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, ".DtkqY {\n  color: rgba(0, 0, 0, 0.870588); }\n", ""]);
	
	// exports
	exports.locals = {
		"layout": "DtkqY"
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(10);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* powered by jarvis */
	
	var LazyLayout = function (_Component) {
	  _inherits(LazyLayout, _Component);
	
	  function LazyLayout(props) {
	    _classCallCheck(this, LazyLayout);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LazyLayout).call(this, props));
	
	    _this.state = {
	      children: _this.props.children
	    };
	    return _this;
	  }
	
	  _createClass(LazyLayout, [{
	    key: 'render',
	    value: function render() {
	      var children = this.state.children;
	
	      return _react2.default.createElement(
	        'div',
	        { className: _index.layout },
	        children
	      );
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      var loadData = this.props.loadData;
	
	      loadData(function (children) {
	        _this2.setState({
	          children: children
	        });
	      });
	    }
	  }]);
	
	  return LazyLayout;
	}(_react.Component);
	
	exports.default = LazyLayout;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?module&localIdentName=[hash:base64:5]&-url!./index.css", function() {
				var newContent = require("!!./../../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?module&localIdentName=[hash:base64:5]&-url!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, ".XwPKl {\n  color: rgba(0, 0, 0, 0.870588);\n  overflow: hidden; }\n", ""]);
	
	// exports
	exports.locals = {
		"layout": "XwPKl"
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(13);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _Nav = __webpack_require__(15);
	
	var _Nav2 = _interopRequireDefault(_Nav);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* powered by jarvis */
	
	var Header = function (_Component) {
	  _inherits(Header, _Component);
	
	  function Header(props) {
	    _classCallCheck(this, Header);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Header).call(this, props));
	
	    var defaultKey = _this.defaultKey = 'header';
	    _this.state = {
	      onScroll: _this.defaultKey
	    };
	    _this.scrollHandler = window.screen.availWidth < 480 ? function (e) {
	      var key = void 0;
	      if (window.scrollY >= 20) {
	        key = 'mobileHeader';
	      } else {
	        key = defaultKey;
	      }
	      _this.setState({
	        headerKey: key
	      });
	    } : function (e) {
	      var key = void 0;
	      if (window.scrollY >= 120) {
	        key = 'scrollHeader';
	      } else if (window.scrollY >= 80) {
	        key = 'overHeader';
	      } else {
	        key = defaultKey;
	      }
	      _this.setState({
	        headerKey: key
	      });
	    };
	    return _this;
	  }
	
	  _createClass(Header, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var text = _props.text;
	      var navTitle = _props.navTitle;
	      var navList = _props.navList;
	
	      return _react2.default.createElement(
	        'header',
	        { className: _index2.default[this.state.headerKey || 'header'] },
	        _react2.default.createElement(_Nav2.default, { navList: navList, title: navTitle || text }),
	        _react2.default.createElement(
	          'span',
	          { className: _index.title },
	          text
	        )
	      );
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      window.scrollTo(0, 0);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      window.addEventListener('scroll', this.scrollHandler);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('scroll', this.scrollHandler);
	    }
	  }]);
	
	  return Header;
	}(_react.Component);
	
	exports.default = Header;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?module&localIdentName=[hash:base64:5]&-url!./index.css", function() {
				var newContent = require("!!./../../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?module&localIdentName=[hash:base64:5]&-url!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, "._2gGRo {\n  display: block;\n  position: relative;\n  z-index: 3;\n  width: 100%;\n  height: 256px;\n  margin-bottom: 8px;\n  font-size: 18px;\n  color: white;\n  background-color: #039BE5;\n  font-size: 56px;\n  font-weight: 400;\n  line-height: 1.5;\n  padding: 0 16px;\n  font-family: monospace, sans-serif; }\n\n._2Mohj {\n  line-height: 64px;\n  font-size: 18px; }\n  ._2Mohj ._3mcZ5 {\n    position: fixed;\n    left: 72px;\n    padding: 0;\n    width: 83.33333%; }\n\n.TATsd {\n  position: fixed;\n  height: 64px;\n  top: 0;\n  -webkit-box-shadow: rgba(0, 0, 0, 0.258824) 0px 2px 5px;\n  box-shadow: rgba(0, 0, 0, 0.258824) 0px 2px 5px; }\n\n._3mcZ5 {\n  width: 66.66667%;\n  padding-top: 85px;\n  display: block;\n  margin: 0 auto; }\n\n@media (max-width: 480px) {\n  ._2gGRo {\n    height: 128px;\n    padding: 73px 16px 0; }\n    ._2gGRo ._3mcZ5 {\n      padding: 0;\n      width: 100%;\n      font-size: 24px;\n      white-space: nowrap;\n      overflow: hidden;\n      -o-text-overflow: ellipsis;\n      text-overflow: ellipsis; }\n  ._2mYOC {\n    height: 56px;\n    padding: 0;\n    position: fixed; }\n    ._2mYOC ._3mcZ5 {\n      font-size: 18px;\n      line-height: 56px;\n      padding: 0;\n      padding-left: 56px;\n      padding-right: 18px; } }\n", ""]);
	
	// exports
	exports.locals = {
		"header": "_2gGRo",
		"overHeader": "_2Mohj _2gGRo",
		"title": "_3mcZ5",
		"scrollHeader": "TATsd _2Mohj _2gGRo",
		"mobileHeader": "_2mYOC _2gGRo"
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(16);
	
	var _reactRouter = __webpack_require__(18);
	
	var _Footer = __webpack_require__(19);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* powered by jarvis */
	
	var Nav = function (_Component) {
	  _inherits(Nav, _Component);
	
	  function Nav(props) {
	    _classCallCheck(this, Nav);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Nav).call(this, props));
	
	    _this.state = _this.state || {};
	    return _this;
	  }
	
	  _createClass(Nav, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props;
	      var title = _props.title;
	      var navList = _props.navList;
	
	      var style = this.state.focus ? _index.focusWrap : _index.wrap;
	      return _react2.default.createElement(
	        'div',
	        { className: style },
	        _react2.default.createElement(
	          'div',
	          { onClick: this.clickHandler.bind(this), className: _index.btn },
	          _react2.default.createElement('span', { className: _index.line }),
	          _react2.default.createElement('span', { className: _index.line }),
	          _react2.default.createElement('span', { className: _index.line })
	        ),
	        _react2.default.createElement(
	          'nav',
	          { className: _index.nav },
	          _react2.default.createElement(
	            'h2',
	            { className: _index.navTitle },
	            title
	          ),
	          _react2.default.createElement(
	            'ul',
	            { className: _index.listWrap },
	            navList.map(function (item, index) {
	              return _react2.default.createElement(
	                'li',
	                { className: _index.itemWrap, key: index },
	                item.href ? _react2.default.createElement(
	                  'a',
	                  { href: item.href },
	                  item.text
	                ) : _react2.default.createElement(
	                  _reactRouter.Link,
	                  { activeClassName: _index.active, to: item.link, onClick: _this2.clickHandler.bind(_this2) },
	                  item.text
	                )
	              );
	            })
	          ),
	          _react2.default.createElement(_Footer2.default, { absolute: true })
	        ),
	        _react2.default.createElement('div', { onClick: this.clickHandler.bind(this), className: _index.mask })
	      );
	    }
	  }, {
	    key: 'clickHandler',
	    value: function clickHandler() {
	      if (!this.state.focus) {
	        document.documentElement.style.overflow = 'hidden';
	        document.body.style.overflow = 'hidden';
	      } else {
	        document.documentElement.style.overflow = 'auto';
	        document.body.style.overflow = 'auto';
	      }
	      this.setState({
	        focus: !this.state.focus
	      });
	    }
	  }]);
	
	  return Nav;
	}(_react.Component);
	
	exports.default = Nav;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?module&localIdentName=[hash:base64:5]&-url!./index.css", function() {
				var newContent = require("!!./../../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?module&localIdentName=[hash:base64:5]&-url!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, ".IYJBr {\n  display: inline-block;\n  position: fixed;\n  top: 0;\n  width: 48px;\n  height: 48px; }\n\n._2K8LA {\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  top: 32px;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  -moz-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  -o-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: pointer; }\n\n._1xATT {\n  position: absolute;\n  display: inline-block;\n  width: 20px;\n  height: 2px;\n  top: 30%;\n  left: 0;\n  background-color: #fff;\n  -webkit-border-radius: 1px;\n  border-radius: 1px;\n  -webkit-transition: width .2s, -webkit-transform .2s;\n  transition: width .2s, -webkit-transform .2s;\n  -moz-transition: transform .2s, width .2s, -moz-transform .2s;\n  -o-transition: transform .2s, width .2s, -o-transform .2s;\n  transition: transform .2s, width .2s;\n  transition: transform .2s, width .2s, -webkit-transform .2s, -moz-transform .2s, -o-transform .2s;\n  -webkit-transform-origin: center right;\n  -moz-transform-origin: center right;\n  -ms-transform-origin: center right;\n  -o-transform-origin: center right;\n  transform-origin: center right; }\n  ._1xATT:nth-of-type(2) {\n    top: 50%; }\n  ._1xATT:nth-of-type(3) {\n    top: 70%; }\n\n._23rRE {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  width: 240px;\n  height: 100%;\n  border-right: 1px solid rgba(0, 0, 0, 0.14);\n  background: #fff;\n  color: #333;\n  font-size: 13px;\n  -webkit-transform: translate3d(-100%, 0, 0);\n  -moz-transform: translate3d(-100%, 0, 0);\n  transform: translate3d(-100%, 0, 0);\n  -webkit-transition: -webkit-transform .2s;\n  transition: -webkit-transform .2s;\n  -moz-transition: transform .2s, -moz-transform .2s;\n  -o-transition: transform .2s, -o-transform .2s;\n  transition: transform .2s;\n  transition: transform .2s, -webkit-transform .2s, -moz-transform .2s, -o-transform .2s;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  -moz-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  -o-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 6; }\n  ._23rRE ._1b1jV {\n    padding: 12px 0 10px 0; }\n  ._23rRE ._1uq3Y {\n    padding-top: 18px;\n    padding-bottom: 17px;\n    padding-left: 22px;\n    line-height: 1em;\n    font-weight: 700; }\n  ._23rRE ._2jdRY {\n    border-bottom: 1px solid #e0e0e0;\n    display: block;\n    height: 64px;\n    padding-left: 24px;\n    line-height: 64px;\n    position: relative;\n    font-size: 32px;\n    color: #767676; }\n\n._3JIs9 {\n  position: fixed;\n  display: none;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 5;\n  background-color: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n  -webkit-transition: opacity 0s .2s;\n  -moz-transition: opacity 0s .2s;\n  -o-transition: opacity 0s .2s;\n  transition: opacity 0s .2s;\n  -webkit-animation-fill-mode: forwards;\n  -moz-animation-fill-mode: forwards;\n  -o-animation-fill-mode: forwards;\n  animation-fill-mode: forwards; }\n\n._1P_AI { }\n  ._1P_AI ._2K8LA ._1xATT {\n    width: 50%; }\n    ._1P_AI ._2K8LA ._1xATT:nth-of-type(1) {\n      -webkit-transform: rotate(-30deg);\n      -moz-transform: rotate(-30deg);\n      -ms-transform: rotate(-30deg);\n      -o-transform: rotate(-30deg);\n      transform: rotate(-30deg); }\n    ._1P_AI ._2K8LA ._1xATT:nth-of-type(2) {\n      width: 80%;\n      left: 3px; }\n    ._1P_AI ._2K8LA ._1xATT:nth-of-type(3) {\n      -webkit-transform: rotate(30deg);\n      -moz-transform: rotate(30deg);\n      -ms-transform: rotate(30deg);\n      -o-transform: rotate(30deg);\n      transform: rotate(30deg); }\n  ._1P_AI ._23rRE {\n    -webkit-transform: translate3d(0, 0, 0);\n    -moz-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  ._1P_AI ._3JIs9 {\n    opacity: 1;\n    display: block;\n    -webkit-transition-delay: 0s;\n    -moz-transition-delay: 0s;\n    -o-transition-delay: 0s;\n    transition-delay: 0s; }\n\n@media (max-width: 480px) {\n  ._2K8LA {\n    top: 28px; } }\n", ""]);
	
	// exports
	exports.locals = {
		"wrap": "IYJBr",
		"btn": "_2K8LA",
		"line": "_1xATT",
		"nav": "_23rRE",
		"listWrap": "_1b1jV",
		"itemWrap": "_1uq3Y",
		"navTitle": "_2jdRY",
		"mask": "_3JIs9",
		"focusWrap": "_1P_AI IYJBr"
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(175);

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(20);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* powered by jarvis */
	
	var Footer = function (_Component) {
	  _inherits(Footer, _Component);
	
	  function Footer() {
	    _classCallCheck(this, Footer);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Footer).apply(this, arguments));
	  }
	
	  _createClass(Footer, [{
	    key: 'render',
	    value: function render() {
	      var absolute = this.props.absolute;
	
	
	      return _react2.default.createElement(
	        'div',
	        { className: absolute ? _index.wrap : _index.staticWrap },
	        _react2.default.createElement(
	          'p',
	          null,
	          'Powered by jarvis'
	        ),
	        _react2.default.createElement(
	          'p',
	          { className: _index.desc },
	          '技术=坚持+积累+学习+分享'
	        )
	      );
	    }
	  }]);
	
	  return Footer;
	}(_react.Component);
	
	exports.default = Footer;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(21);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?module&localIdentName=[hash:base64:5]&-url!./index.css", function() {
				var newContent = require("!!./../../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?module&localIdentName=[hash:base64:5]&-url!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, "._1kSuu {\n  color: #212121;\n  font-size: 13px;\n  height: 96px;\n  line-height: 24px;\n  padding: 24px;\n  position: relative;\n  width: 100%;\n  text-align: center;\n  margin-top: 72px; }\n\n.TbL_2 {\n  text-align: left;\n  position: absolute;\n  bottom: 0;\n  margin-top: 0;\n  border-top: 1px solid #e0e0e0; }\n\n._3UgwE {\n  color: rgba(33, 33, 33, 0.5); }\n", ""]);
	
	// exports
	exports.locals = {
		"staticWrap": "_1kSuu",
		"wrap": "TbL_2 _1kSuu",
		"desc": "_3UgwE"
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(23);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* powered by jarvis */
	
	var Content = function (_Component) {
	  _inherits(Content, _Component);
	
	  function Content() {
	    _classCallCheck(this, Content);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Content).apply(this, arguments));
	  }
	
	  _createClass(Content, [{
	    key: 'render',
	    value: function render() {
	      var children = this.props.children;
	
	      return _react2.default.createElement(
	        'main',
	        { className: _index.wrap },
	        children
	      );
	    }
	  }]);
	
	  return Content;
	}(_react.Component);
	
	exports.default = Content;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(24);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?module&localIdentName=[hash:base64:5]&-url!./index.css", function() {
				var newContent = require("!!./../../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?module&localIdentName=[hash:base64:5]&-url!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, "._1SKaG {\n  min-height: 480px;\n  position: relative;\n  width: 66.66667%;\n  margin: 0 auto;\n  padding: 0 8px; }\n  @media (max-width: 480px) {\n    ._1SKaG {\n      width: 83.33333%; } }\n  @media (max-width: 320px) {\n    ._1SKaG {\n      width: 100%;\n      padding: 0 16px; } }\n", ""]);
	
	// exports
	exports.locals = {
		"wrap": "_1SKaG"
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ListItem = __webpack_require__(26);
	
	var _ListItem2 = _interopRequireDefault(_ListItem);
	
	var _index = __webpack_require__(29);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* powered by jarvis */
	
	var List = function (_Component) {
	  _inherits(List, _Component);
	
	  function List(props) {
	    _classCallCheck(this, List);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(List).call(this, props));
	
	    _this.state = {
	      blogList: [],
	      listLength: 0
	    };
	    return _this;
	  }
	
	  _createClass(List, [{
	    key: 'render',
	    value: function render() {
	      var blogList = this.state.blogList;
	
	
	      return _react2.default.createElement(
	        'ul',
	        { className: _index.warp },
	        blogList.map(function (item, index) {
	          return _react2.default.createElement(_ListItem2.default, _extends({ index: index, key: index }, item));
	        })
	      );
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this2 = this;
	
	      this.props.getData(function (list) {
	        _this2.setState({
	          blogList: _this2.state.blogList.concat(list)
	        });
	      });
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      window.DUOSHUO.init();
	    }
	  }]);
	
	  return List;
	}(_react.Component);
	
	exports.default = List;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(27);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* powered by jarvis */
	
	var ListItem = function (_Component) {
	  _inherits(ListItem, _Component);
	
	  function ListItem() {
	    _classCallCheck(this, ListItem);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ListItem).apply(this, arguments));
	  }
	
	  _createClass(ListItem, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var title = _props.title;
	      var postDate = _props.postDate;
	      var id = _props.id;
	      var index = _props.index;
	
	      return _react2.default.createElement(
	        'li',
	        { className: _index.item },
	        _react2.default.createElement(
	          'div',
	          { className: _index.itemButton },
	          _react2.default.createElement(
	            'span',
	            { className: _index.itemTitle },
	            _react2.default.createElement(
	              'a',
	              { href: '#/blog/' + id },
	              title
	            )
	          ),
	          _react2.default.createElement(
	            'time',
	            { className: _index.itemDate },
	            postDate
	          ),
	          _react2.default.createElement('span', { className: _index.itemDs + ' ds-thread-count', 'data-thread-key': id, 'data-count-type': 'comments' })
	        )
	      );
	    }
	  }]);
	
	  return ListItem;
	}(_react.Component);
	
	exports.default = ListItem;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?module&localIdentName=[hash:base64:5]&-url!./index.css", function() {
				var newContent = require("!!./../../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?module&localIdentName=[hash:base64:5]&-url!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, ".jtdXm {\n  border-bottom: 1px dotted #E0E0E0;\n  font-size: 16px;\n  line-height: 48px; }\n\n.Ie0tP {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 48px; }\n\n.tF7Qr {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -moz-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-flex-flow: row;\n  -ms-flex-flow: row;\n  flex-flow: row;\n  padding-left: .5em; }\n  .tF7Qr a {\n    color: #039BE5; }\n\n._15g9p {\n  width: 9em;\n  padding: 0 .5em;\n  text-align: right;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.54); }\n\n._3GwQj {\n  width: 80px;\n  text-align: right;\n  font-size: 13px;\n  color: rgba(0, 0, 0, 0.54);\n  font-family: monospace, sans-serif; }\n\n@media (max-width: 480px) {\n  .Ie0tP {\n    display: block;\n    height: 71px;\n    width: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    -o-text-overflow: ellipsis;\n    text-overflow: ellipsis; }\n  ._15g9p {\n    display: block;\n    width: 100%;\n    line-height: 23px; } }\n", ""]);
	
	// exports
	exports.locals = {
		"item": "jtdXm",
		"itemButton": "Ie0tP",
		"itemTitle": "tF7Qr",
		"itemDate": "_15g9p",
		"itemDs": "_3GwQj"
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(30);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?module&localIdentName=[hash:base64:5]&-url!./index.css", function() {
				var newContent = require("!!./../../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?module&localIdentName=[hash:base64:5]&-url!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(32);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* powered by jarvis */
	
	var Blog = function (_Component) {
	  _inherits(Blog, _Component);
	
	  function Blog() {
	    _classCallCheck(this, Blog);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Blog).apply(this, arguments));
	  }
	
	  _createClass(Blog, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var id = _props.id;
	      var title = _props.title;
	      var content = _props.content;
	
	      return _react2.default.createElement(
	        'article',
	        { className: _index.blog },
	        _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: parseString(content) } }),
	        _react2.default.createElement('section', { className: _index.thread + ' ds-thread', id: "jarvis-comments", 'data-thread-key': id, 'data-title': title, 'data-url': "jiasm.github.io" })
	      );
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      window.Prism.highlightAll();
	      window.DUOSHUO.init();
	    }
	  }]);
	
	  return Blog;
	}(_react.Component);
	
	function parseString(str) {
	  return str.replace(/\\([^ts])?/g, function (_, $1) {
	    return $1 ? $1 === 'n' ? '\n' : $1 : _;
	  });
	}
	
	exports.default = Blog;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(33);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?module&localIdentName=[hash:base64:5]&-url!./index.css", function() {
				var newContent = require("!!./../../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?module&localIdentName=[hash:base64:5]&-url!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, "@charset \"UTF-8\";\n._3zESC {\n  padding-top: 80px;\n  font-size: 14px;\n  line-height: 24px;\n  color: #212121; }\n  ._3zESC h1, ._3zESC h2, ._3zESC a {\n    color: #039BE5; }\n  ._3zESC h1 {\n    font-size: 34px;\n    font-weight: 400;\n    line-height: 40px;\n    margin-bottom: 30px; }\n  ._3zESC h2 {\n    font-size: 24px;\n    font-weight: 400;\n    line-height: 32px;\n    margin-bottom: 30px;\n    margin-top: 60px;\n    overflow: hidden; }\n  ._3zESC h3, ._3zESC h4, ._3zESC h5, ._3zESC h6 {\n    color: #212121;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 24px; }\n  ._3zESC p {\n    color: #616161;\n    margin-bottom: 8px; }\n  ._3zESC blockquote {\n    margin-bottom: 40px; }\n    ._3zESC blockquote p {\n      display: inline;\n      font-size: 13px;\n      color: rgba(0, 0, 0, 0.54); }\n    ._3zESC blockquote::before, ._3zESC blockquote::after {\n      font-size: 36px;\n      line-height: 36px;\n      color: #039BE5; }\n    ._3zESC blockquote::before {\n      content: '\\201C';\n      display: inline; }\n    ._3zESC blockquote::after {\n      content: '\\201D';\n      display: inline; }\n  ._3zESC img {\n    max-width: 100%; }\n\n._1IQWC {\n  z-index: 1; }\n\n@media (max-width: 480px) {\n  ._3zESC {\n    padding-top: 60px; }\n    ._3zESC h1 {\n      font-size: 24px;\n      line-height: 32px;\n      margin-bottom: 42px; }\n    ._3zESC h2 {\n      font-size: 20px;\n      padding-top: 15px;\n      margin-top: 30px; } }\n", ""]);
	
	// exports
	exports.locals = {
		"blog": "_3zESC",
		"thread": "_1IQWC"
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(35);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* powered by jarvis */
	
	var Loading = function (_Component) {
	  _inherits(Loading, _Component);
	
	  function Loading() {
	    _classCallCheck(this, Loading);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Loading).apply(this, arguments));
	  }
	
	  _createClass(Loading, [{
	    key: 'render',
	    value: function render() {
	      var visible = this.props.visible;
	
	      var style = {
	        display: visible ? 'block' : 'none'
	      };
	      return _react2.default.createElement('div', { className: _index.loading, style: style });
	    }
	  }]);
	
	  return Loading;
	}(_react.Component);
	
	exports.default = Loading;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(36);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?module&localIdentName=[hash:base64:5]&-url!./index.css", function() {
				var newContent = require("!!./../../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?module&localIdentName=[hash:base64:5]&-url!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, "._15VWb {\n  display: block;\n  position: fixed;\n  z-index: 2000;\n  top: 50%;\n  left: 50%;\n  margin-top: -15px;\n  margin-left: -15px;\n  width: 30px;\n  height: 30px;\n  border: solid 2px transparent;\n  border-top-color: #2196F3;\n  border-left-color: #2196F3;\n  -webkit-border-radius: 50%;\n  border-radius: 50%;\n  -webkit-animation: _3Vian .4s linear infinite;\n  -moz-animation: _3Vian .4s linear infinite;\n  -o-animation: _3Vian .4s linear infinite;\n  animation: _3Vian .4s linear infinite; }\n\n@-webkit-keyframes _3Vian {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@-moz-keyframes _3Vian {\n  0% {\n    -moz-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -moz-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@-o-keyframes _3Vian {\n  0% {\n    -o-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -o-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes _3Vian {\n  0% {\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    -moz-transform: rotate(360deg);\n    -o-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n", ""]);
	
	// exports
	exports.locals = {
		"loading": "_15VWb",
		"load": "_3Vian"
	};

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map