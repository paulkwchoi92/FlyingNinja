/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ enemy.js":
/*!***********************!*\
  !*** ./src/ enemy.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar CONSTANTS = {\n  EZDIRS: [[0, 1], [0, -1]],\n  HARDDRIS: [[1, -1], [1, 1], [-1, 1], [1, 1]]\n};\n\nvar Enemy = function () {\n  function Enemy(level, ctx) {\n    _classCallCheck(this, Enemy);\n\n    this.dir = \"down\";\n    this.numOfNinjas = level * 2;\n    this.vel = level * 5;\n    if (level < 5) {\n      this.hits = 1;\n    } else {\n      this.hits = level / 5 + 1;\n    }\n    this.yCoordGenerator = this.yCoordGenerator.bind(this);\n    this.ctx = ctx;\n    this.Yarr = this.yCoordGenerator();\n\n    this.move = this.move.bind(this);\n    this.animate = this.animate.bind(this);\n  }\n\n  _createClass(Enemy, [{\n    key: \"randomNumGenerator\",\n    value: function randomNumGenerator(min, max) {\n      return Math.random() * (max - min) + min;\n    }\n  }, {\n    key: \"yCoordGenerator\",\n    value: function yCoordGenerator() {\n      var _this = this;\n\n      var newArr = [];\n      var target = this.numOfNinjas;\n      for (var i = 0; i < target; i++) {\n        if (newArr.length === 0) {\n          newArr.push(Math.floor(this.randomNumGenerator(50, 450)));\n        } else if (newArr.length !== 0 && newArr.length <= target) {\n          var _ret = function () {\n\n            var newNum = Math.floor(_this.randomNumGenerator(50, 450));\n            ;\n            if (newArr.every(function (ele) {\n\n              return newNum > ele + 50 || newNum < ele - 50;\n            })) {\n\n              newArr.push(newNum);\n            }\n\n            if (newArr.length === target) return {\n                v: newArr\n              };\n            if (newArr.length !== target) _this.yCoordGenerator(_this.yCoordGenerator.bind(_this));\n          }();\n\n          if ((typeof _ret === \"undefined\" ? \"undefined\" : _typeof(_ret)) === \"object\") return _ret.v;\n        }\n      }\n    }\n  }, {\n    key: \"move\",\n    value: function move(y) {\n      switch (this.dir) {\n        case \"down\":\n          if (y === 459 || y === 458) this.dir = \"up\";\n          return y += 1;\n        case \"up\":\n          if (y === 70 || y === 71) this.dir = \"down\";\n          return y -= 1;\n        default:\n          return null;\n      }\n    }\n  }, {\n    key: \"animate\",\n    value: function animate() {\n      var enemy = document.getElementById(\"enemy\");\n      for (var i = 0; i < this.Yarr.length; i++) {\n        this.ctx.drawImage(enemy, 800, this.Yarr[i], 100, 100);\n        this.Yarr[i] = this.move(this.Yarr[i]);\n      }\n    }\n  }]);\n\n  return Enemy;\n}();\n\nexports.default = Enemy;\n\n//# sourceURL=webpack:///./src/_enemy.js?");

/***/ }),

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar BackGround = function () {\n  function BackGround(dimensions, ctx) {\n    _classCallCheck(this, BackGround);\n\n    this.rock1 = document.getElementById(\"rock2\");\n    this.rock2 = document.getElementById(\"rock3\");\n    this.rock3 = document.getElementById(\"rock1\");\n    this.rocksArr = [rock1, rock2, rock3];\n    this.dimensions = dimensions;\n    this.ctx = ctx;\n    this.movingRocksArr = [{ rock: this.rock3, x: this.dimensions.width }];\n    this.animate = this.animate.bind(this);\n  }\n\n  _createClass(BackGround, [{\n    key: \"animate\",\n    value: function animate() {\n      for (var i = 0; i < this.movingRocksArr.length; i++) {\n        this.ctx.drawImage(this.movingRocksArr[i].rock, this.movingRocksArr[i].x, 580, 100, 100);\n        this.movingRocksArr[i].x -= 4;\n        if (this.movingRocksArr[i].x === 501) {\n          var randNumber = Math.floor(Math.random() * 2);\n          var rock = this.rocksArr[randNumber];\n          this.movingRocksArr.push({ rock: rock, x: this.dimensions.width });\n        }\n      }\n    }\n  }]);\n\n  return BackGround;\n}();\n\nexports.default = BackGround;\n\n//# sourceURL=webpack:///./src/background.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Game = function () {\n  function Game() {\n    _classCallCheck(this, Game);\n\n    this.start = false;\n    this.renderKeys = false;\n    this.point = 0;\n    this.level = 1;\n    this.gameStarter = this.gameStarter.bind(this);\n  }\n\n  _createClass(Game, [{\n    key: \"collidedWidth\",\n    value: function collidedWidth(object1, object2) {}\n  }, {\n    key: \"gameStarter\",\n    value: function gameStarter(e) {\n\n      switch (e.key) {\n        case \"p\":\n          return this.start = true;\n        case \"i\":\n          return this.renderKeys = true;\n        default:\n          return this.start;\n      }\n    }\n  }, {\n    key: \"incrementLevel\",\n    value: function incrementLevel() {\n      if (this.point % 5 === 0) {\n        this.level += 1;\n      }\n    }\n  }]);\n\n  return Game;\n}();\n\nexports.default = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _background = __webpack_require__(/*! ./background */ \"./src/background.js\");\n\nvar _background2 = _interopRequireDefault(_background);\n\nvar _ninja = __webpack_require__(/*! ./ninja */ \"./src/ninja.js\");\n\nvar _ninja2 = _interopRequireDefault(_ninja);\n\nvar _enemy = __webpack_require__(/*! ./ enemy */ \"./src/ enemy.js\");\n\nvar _enemy2 = _interopRequireDefault(_enemy);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar FlyingNinja = function () {\n  function FlyingNinja(game, canvas) {\n    _classCallCheck(this, FlyingNinja);\n\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = { width: canvas.width, height: canvas.height };\n    this.game = game;\n    this.ninja = new _ninja2.default(this.dimensions, this.ctx);\n    this.background = new _background2.default(this.dimensions, this.ctx);\n    this.enemy = new _enemy2.default(this.game.level, this.ctx);\n    this.begMusic = new Audio();\n    this.fightMusic = new Audio();\n    this.begMusic.src = \"./sounds/begMusic\";\n    this.fightMusic.src = \"./sounds/fightMusic\";\n    this.animate();\n    this.keypressListener();\n\n    this.animate = this.animate.bind(this);\n  }\n\n  _createClass(FlyingNinja, [{\n    key: \"keypressListener\",\n    value: function keypressListener() {\n      this.moveNinja = this.ninja.moveNinja.bind(this);\n      window.addEventListener(\"keydown\", this.moveNinja);\n    }\n  }, {\n    key: \"begScreenAudio\",\n    value: function begScreenAudio() {\n      this.begMusic.play();\n    }\n  }, {\n    key: \"fightScreenAudio\",\n    value: function fightScreenAudio() {\n      this.begMusic.pause();\n      this.fightMusic.play();\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      // this.animate()\n      this.game.start ? this.animate() : this.animateIntro();\n\n      requestAnimationFrame(this.start.bind(this));\n    }\n  }, {\n    key: \"animateIntro\",\n    value: function animateIntro() {\n\n      this.ctx.font = \"900 70px Times\";\n      this.ctx.fillText(\"Press 'p' to play\", 250, 300);\n      // requestAnimationFrame(this.animateIntro.bind(this))\n    }\n  }, {\n    key: \"animate\",\n    value: function animate() {\n      if (this.ninja.start) {\n        // this.fightScreenAudio()\n        var numOfEnemies = this.level * 3;\n        for (var i = 0; i > numOfEnemies; i++) {}\n        var bg = document.getElementById(\"background\");\n\n        this.ctx.drawImage(bg, 0, 0);\n        this.ninja.animate();\n        this.background.animate();\n        this.enemy.animate();\n      } else {\n        // this.begScreenAudio()\n        var _bg = document.getElementById(\"background\");\n        this.ctx.drawImage(_bg, 0, 0);\n        this.ctx.font = \"900 70px Times\";\n        this.ctx.fillText(\"Press 'p' to play\", 250, 300);\n      }\n      requestAnimationFrame(this.animate.bind(this));\n    }\n  }]);\n\n  return FlyingNinja;\n}();\n\nexports.default = FlyingNinja;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nvar _game2 = _interopRequireDefault(_game);\n\nvar _game_view = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\nvar _game_view2 = _interopRequireDefault(_game_view);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconsole.log();\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var canvas = document.getElementById('flying-ninja');\n  var game = new _game2.default();\n  new _game_view2.default(game, canvas);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/ninja.js":
/*!**********************!*\
  !*** ./src/ninja.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _ninja_stars = __webpack_require__(/*! ./ninja_stars */ \"./src/ninja_stars.js\");\n\nvar _ninja_stars2 = _interopRequireDefault(_ninja_stars);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar CONSTANTS = {\n\n  NINJA_WIDTH: 50,\n  NINJA_HEIGHT: 50\n};\n\nvar Ninja = function () {\n  function Ninja(dimensions, ctx) {\n    _classCallCheck(this, Ninja);\n\n    this.dimensions = dimensions;\n    this.x = this.dimensions.width / 6;\n    this.y = this.dimensions.height / 5;\n    this.vel = 30;\n    this.ctx = ctx;\n    this.start = false;\n    this.moveNinja = this.moveNinja.bind(this);\n    this.coordinates = { x: this.x + 50, y: this.y };\n  }\n\n  _createClass(Ninja, [{\n    key: \"moveNinja\",\n    value: function moveNinja(e) {\n      switch (e.key) {\n        case \"ArrowLeft\":\n          if (this.x === -14.5) {\n            return this.x;\n          }\n          return this.x -= this.vel;\n        case \"ArrowRight\":\n          if (this.x === 945.5) {\n            return this.x;\n          }\n          return this.x += this.vel;\n        case \"ArrowUp\":\n          if (this.y === -20) {\n            return this.y;\n          }\n          return this.y -= this.vel;\n        case \"ArrowDown\":\n          if (this.y === 610) {\n            return this.y;\n          }\n          return this.y += this.vel;\n        case \" \":\n          this.ninjaStar = new _ninja_stars2.default({ x: this.x, y: this.y }, this.ctx);\n          return this.ninjaStar.animate();\n        case \"p\":\n          return this.start = true;\n        default:\n          return this.x;\n      }\n    }\n  }, {\n    key: \"animate\",\n    value: function animate() {\n      var ninja = document.getElementById('main');\n      this.ctx.drawImage(ninja, this.x, this.y, CONSTANTS.NINJA_WIDTH, CONSTANTS.NINJA_HEIGHT); //asdasdasd\n    }\n  }]);\n\n  return Ninja;\n}();\n\nexports.default = Ninja;\n\n//# sourceURL=webpack:///./src/ninja.js?");

/***/ }),

/***/ "./src/ninja_stars.js":
/*!****************************!*\
  !*** ./src/ninja_stars.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar NinjaStars = function () {\n  function NinjaStars(coordinates, ctx) {\n    _classCallCheck(this, NinjaStars);\n\n    this.x = coordinates.x;\n    this.y = coordinates.y;\n    this.vel = 10;\n    this.ctx = ctx;\n    this.animate = this.animate.bind(this);\n  }\n\n  _createClass(NinjaStars, [{\n    key: 'animate',\n    value: function animate() {\n      var ninjaStar = document.getElementById('ninjastar');\n      this.ctx.drawImage(ninjastar, this.x, this.y, 40, 40);\n      this.x += this.vel;\n\n      requestAnimationFrame(this.animate.bind(this));\n    }\n  }]);\n\n  return NinjaStars;\n}();\n\nexports.default = NinjaStars;\n\n//# sourceURL=webpack:///./src/ninja_stars.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ })

/******/ });