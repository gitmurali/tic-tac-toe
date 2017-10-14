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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _functions = __webpack_require__(1);

var _functions2 = _interopRequireDefault(_functions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {
  var x = "x";
  var o = "o";
  var o_win = 0;
  var x_win = 0;
  var count = 0;
  var boxes = document.querySelectorAll('#game li');

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function (event) {
      event.preventDefault();
      if ((0, _functions.checkO)() || (0, _functions.checkX)()) {
        (0, _functions2.default)(event.target);
      } else if (count == 8) {
        alert('Game over!');
        (0, _functions.resetItems)();
        count = 0;
      } else if ((0, _functions.hasClass)(event.target, 'disable')) {
        alert('Already selected');
      } else if (count % 2 == 0) {
        count++;
        event.target.innerText = x;
        event.target.className += ' disable xBtn btn-primary';
        if ((0, _functions.checkX)()) {
          alert('x wins');
          count = 0;
          x_win++;
        }
      } else {
        count++;
        event.target.innerText = o;
        event.target.className += ' disable oBtn btn-info';
        if ((0, _functions.checkO)()) {
          alert('O wins');
          count = 0;
          o_win++;
        }
      }
    });
    document.getElementById("reset").addEventListener("click", function () {
      (0, _functions.resetItems)();
      count = 0;
    });
  }
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var reset = exports.reset = function reset(elm) {
  elm.innerText = "?";
  elm.className = elm.className.replace('disable', '');
  elm.className = elm.className.replace('oBtn', '');
  elm.className = elm.className.replace('xBtn', '');
  elm.className = elm.className.replace('btn-primary', '');
  elm.className = elm.className.replace('btn-info', '');
};

var hasClass = exports.hasClass = function hasClass(target, className) {
  return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
};

var resetItems = exports.resetItems = function resetItems() {
  var boxes = document.querySelectorAll('#game li');
  for (var i = 0; i < boxes.length; i++) {
    reset(boxes[i]);
  }
};

var checkO = exports.checkO = function checkO() {
  if (document.getElementById("square1").className === 'o' && document.getElementById("square2").className === 'o' && document.getElementById("square3").className === 'o' || document.getElementById("square4").className === 'o' && document.getElementById("square5").className === 'o' && document.getElementById("square6").className === 'o' || document.getElementById("square7").className === 'o' && document.getElementById("square8").className === 'o' && document.getElementById("square9").className === 'o' || document.getElementById("square1").className === 'o' && document.getElementById("square4").className === 'o' && document.getElementById("square7").className === 'o' || document.getElementById("square2").className === 'o' && document.getElementById("square5").className === 'o' && document.getElementById("square8").className === 'o' || document.getElementById("square3").className === 'o' && document.getElementById("square6").className === 'o' && document.getElementById("square9").className === 'o' || document.getElementById("square1").className === 'o' && document.getElementById("square5").className === 'o' && document.getElementById("square9").className === 'o' || document.getElementById("square3").className === 'o' && document.getElementById("square5").className === 'o' && document.getElementById("square7").className === 'o') {
    return true;
  }
  return false;
};

var checkX = exports.checkX = function checkX() {
  if (document.getElementById("square1").className === 'x' && document.getElementById("square2").className === 'x' && document.getElementById("square3").className === 'x' || document.getElementById("square4").className === 'x' && document.getElementById("square5").className === 'x' && document.getElementById("square6").className === 'x' || document.getElementById("square7").className === 'x' && document.getElementById("square8").className === 'x' && document.getElementById("square9").className === 'x' || document.getElementById("square1").className === 'x' && document.getElementById("square4").className === 'x' && document.getElementById("square7").className === 'x' || document.getElementById("square2").className === 'x' && document.getElementById("square5").className === 'x' && document.getElementById("square8").className === 'x' || document.getElementById("square3").className === 'x' && document.getElementById("square6").className === 'x' && document.getElementById("square9").className === 'x' || document.getElementById("square1").className === 'x' && document.getElementById("square5").className === 'x' && document.getElementById("square9").className === 'x' || document.getElementById("square3").className === 'x' && document.getElementById("square5").className === 'x' && document.getElementById("square7").className === 'x') {
    return true;
  }
  return false;
};

exports.default = reset;

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map