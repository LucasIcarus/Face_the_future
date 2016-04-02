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

	// require('babel-polyfill');

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var arr = Array.of(1, 2, 3);

	// console.log(arr);

	arr.push(12);

	// console.log('Need I do anything more to pleasure my boss?');

	var customers = [{
	    name: 'Jack',
	    age: 30,
	    city: 'Xiamen'
	}, {
	    name: 'Lily',
	    age: 25,
	    city: 'Xuzhou'
	}];

	var results = customers.filter(function (c) {
	    if (c.city == 'Xiamen') {
	        return { name: c.name, age: c.age };
	    }
	});
	console.log(results);

	function m1() {
	    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var _ref$x = _ref.x;
	    var x = _ref$x === undefined ? 0 : _ref$x;
	    var _ref$y = _ref.y;
	    var y = _ref$y === undefined ? 0 : _ref$y;

	    return [x, y];
	}

	function m2() {
	    var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? { x: 0, y: 0 } : arguments[0];

	    var x = _ref2.x;
	    var y = _ref2.y;

	    return [x, y];
	}

	var arr1 = [12, 34];

	function add(x, y) {
	    return x + y;
	}

	add.apply(undefined, arr1);

	function laLaName() {}

	console.log(laLaName.name);

	var arr_1 = [1, 5, 7, 5, 4, 1, 3];

	var set_1 = new Set(arr_1);

	var arr_2 = [].concat(_toConsumableArray(set_1));

	var arr_test = [['name', 'Dachui'], ['age', 23], ['gender', 'male']];

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
	    for (var _iterator = arr_test[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var _step$value = _slicedToArray(_step.value, 2);

	        key = _step$value[0];
	        value = _step$value[1];

	        console.log(key + 'is' + value);
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

/***/ }
/******/ ]);