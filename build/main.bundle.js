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

// add on dom loaded
document.addEventListener("DOMContentLoaded", function () {
  var x = "x";
  var o = "o";
  var count = 0;

  // get all the boxes
  var boxes = document.querySelectorAll('#game li');

  // loop boxes and attach click events.
  for (var i = 0; i < boxes.length; i++) {

    // attach event on each box
    boxes[i].addEventListener('click', function (event) {
      event.preventDefault();
      if (count == 8) {
        alert('Game over!'); // game over if all boxes filled
        (0, _functions2.default)();
        count = 0;
      } else if (event.target.classList.contains('disable')) {
        alert('Already selected'); // when clicked on already selected box
      } else if (count % 2 == 0) {
        count++;
        event.target.innerText = x;
        event.target.className += ' disable xBtn btn-primary';
        if ((0, _functions.checkX)()) {
          alert('x wins');
          (0, _functions2.default)(); // reset boxes if x wins
          count = 0;
        }
      } else {
        count++;
        event.target.innerText = o;
        event.target.className += ' disable oBtn btn-info';
        if ((0, _functions.checkO)()) {
          alert('O wins');
          (0, _functions2.default)(); // reset boxes if o wins
          count = 0;
        }
      }
    });
    document.getElementById("reset").addEventListener("click", function () {
      (0, _functions2.default)(); // reset all boxes
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

var resetItems = exports.resetItems = function resetItems() {
  var boxes = document.querySelectorAll('#game li');
  for (var i = 0; i < boxes.length; i++) {
    reset(boxes[i]);
  }
};

var checkO = exports.checkO = function checkO() {
  if (document.getElementById("square1").classList.contains('oBtn') && document.getElementById("square2").classList.contains('oBtn') && document.getElementById("square3").classList.contains('oBtn') || document.getElementById("square4").classList.contains('oBtn') && document.getElementById("square5").classList.contains('oBtn') && document.getElementById("square6").classList.contains('oBtn') || document.getElementById("square7").classList.contains('oBtn') && document.getElementById("square8").classList.contains('oBtn') && document.getElementById("square9").classList.contains('oBtn') || document.getElementById("square1").classList.contains('oBtn') && document.getElementById("square4").classList.contains('oBtn') && document.getElementById("square7").classList.contains('oBtn') || document.getElementById("square2").classList.contains('oBtn') && document.getElementById("square5").classList.contains('oBtn') && document.getElementById("square8").classList.contains('oBtn') || document.getElementById("square3").classList.contains('oBtn') && document.getElementById("square6").classList.contains('oBtn') && document.getElementById("square9").classList.contains('oBtn')) {
    return true;
  }
  return false;
};

var checkX = exports.checkX = function checkX() {
  if (document.getElementById("square1").classList.contains('xBtn') && document.getElementById("square2").classList.contains('xBtn') && document.getElementById("square3").classList.contains('xBtn') || document.getElementById("square4").classList.contains('xBtn') && document.getElementById("square5").classList.contains('xBtn') && document.getElementById("square6").classList.contains('xBtn') || document.getElementById("square7").classList.contains('xBtn') && document.getElementById("square8").classList.contains('xBtn') && document.getElementById("square9").classList.contains('xBtn') || document.getElementById("square1").classList.contains('xBtn') && document.getElementById("square4").classList.contains('xBtn') && document.getElementById("square7").classList.contains('xBtn') || document.getElementById("square2").classList.contains('xBtn') && document.getElementById("square5").classList.contains('xBtn') && document.getElementById("square8").classList.contains('xBtn') || document.getElementById("square3").classList.contains('xBtn') && document.getElementById("square6").classList.contains('xBtn') && document.getElementById("square9").classList.contains('xBtn')) {
    return true;
  }
  return false;
};

exports.default = resetItems;

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map