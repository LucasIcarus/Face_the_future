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

/***/ }
/******/ ]);