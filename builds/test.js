/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	require('babel-polyfill/');

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _marked = [fibonacci, objectEntries].map(regeneratorRuntime.mark);

	function fibonacci() {
	    var prev, curr, _ref;

	    return regeneratorRuntime.wrap(function fibonacci$(_context) {
	        while (1) {
	            switch (_context.prev = _context.next) {
	                case 0:
	                    prev = 0;
	                    curr = 1;

	                case 2:
	                    _ref = [curr, prev + curr];
	                    prev = _ref[0];
	                    curr = _ref[1];
	                    _context.next = 7;
	                    return curr;

	                case 7:
	                    _context.next = 2;
	                    break;

	                case 9:
	                case 'end':
	                    return _context.stop();
	            }
	        }
	    }, _marked[0], this);
	}

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
	    for (var _iterator = fibonacci()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var n = _step.value;

	        if (n > 1000) break;
	        console.log(n);
	    }
	} catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	} finally {
	    try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	        }
	    } finally {
	        if (_didIteratorError) {
	            throw _iteratorError;
	        }
	    }
	}

	function objectEntries() {
	    var propKeys, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, key;

	    return regeneratorRuntime.wrap(function objectEntries$(_context2) {
	        while (1) {
	            switch (_context2.prev = _context2.next) {
	                case 0:
	                    propKeys = Object.keys(this);
	                    _iteratorNormalCompletion2 = true;
	                    _didIteratorError2 = false;
	                    _iteratorError2 = undefined;
	                    _context2.prev = 4;
	                    _iterator2 = propKeys[Symbol.iterator]();

	                case 6:
	                    if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
	                        _context2.next = 13;
	                        break;
	                    }

	                    key = _step2.value;
	                    _context2.next = 10;
	                    return [key, this[key]];

	                case 10:
	                    _iteratorNormalCompletion2 = true;
	                    _context2.next = 6;
	                    break;

	                case 13:
	                    _context2.next = 19;
	                    break;

	                case 15:
	                    _context2.prev = 15;
	                    _context2.t0 = _context2['catch'](4);
	                    _didIteratorError2 = true;
	                    _iteratorError2 = _context2.t0;

	                case 19:
	                    _context2.prev = 19;
	                    _context2.prev = 20;

	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }

	                case 22:
	                    _context2.prev = 22;

	                    if (!_didIteratorError2) {
	                        _context2.next = 25;
	                        break;
	                    }

	                    throw _iteratorError2;

	                case 25:
	                    return _context2.finish(22);

	                case 26:
	                    return _context2.finish(19);

	                case 27:
	                case 'end':
	                    return _context2.stop();
	            }
	        }
	    }, _marked[1], this, [[4, 15, 19, 27], [20,, 22, 26]]);
	}

	var jane = { first: 'Jane', second: 'Doe' };

	jane[Symbol.iterator] = objectEntries;

	var _iteratorNormalCompletion3 = true;
	var _didIteratorError3 = false;
	var _iteratorError3 = undefined;

	try {
	    for (var _iterator3 = jane[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	        var _step3$value = _slicedToArray(_step3.value, 2);

	        var key = _step3$value[0];
	        var value = _step3$value[1];

	        console.log(key + ': ' + value);
	    }
	} catch (err) {
	    _didIteratorError3 = true;
	    _iteratorError3 = err;
	} finally {
	    try {
	        if (!_iteratorNormalCompletion3 && _iterator3.return) {
	            _iterator3.return();
	        }
	    } finally {
	        if (_didIteratorError3) {
	            throw _iteratorError3;
	        }
	    }
	}

/***/ }
/******/ ]);