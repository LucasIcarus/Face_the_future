/**
 * Created by Fancy on 2016/3/25 0025.
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () {
    function sliceIterator(arr, i) {
        var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;_e = err;
        } finally {
            try {
                if (!_n && _i["return"]) _i["return"]();
            } finally {
                if (_d) throw _e;
            }
        }return _arr;
    }return function (arr, i) {
        if (Array.isArray(arr)) {
            return arr;
        } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
        } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
    };
}();

var _marked = [fibs].map(regeneratorRuntime.mark);

{
    var _a = 1;
}

// 对于let的独立作用域实现，babel采用了转换变量名的方式。

var some = [];

var _loop = function _loop(i) {
    some[i] = function () {
        console.log(i);
    };
};

for (var i = 0; i < 10; i++) {
    _loop(i);
}

some[5]();

// 循环赋值与循环绑定事件处理函数采用的是直接将i作为参数传入执行函数的方式。

{
    var _a2 = "secret";
    //function f () {               //在严格模式下，函数只能在顶层作用域和函数内声明。
    //    return a;
    //}
}

// f();

// ES6 废除了原本的变量提升和函数提升。

var A = exports.A = 1;

// 解构赋值

var a = 1;
var b = 2;
var c = 3;

// 模式匹配

var some = 1;
var someother = [2, 3, 4];
var _ref = ['x'];
var x = _ref[0];
var y = _ref[1];

var z = _ref.slice(2);

// 不完全解构

var a = 1;
var _ref2 = [2, 3];
var b = _ref2[0];
var d = 4;

// 解构赋值仅需要这种数据结构具有Iterator接口。

function fibs() {
    var a, b, _ref3;

    return regeneratorRuntime.wrap(function fibs$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    a = 0;
                    b = 1;

                case 2:
                    if (!true) {
                        _context.next = 10;
                        break;
                    }

                    _context.next = 5;
                    return a;

                case 5:
                    _ref3 = [b, a + b];
                    a = _ref3[0];
                    b = _ref3[1];
                    _context.next = 2;
                    break;

                case 10:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}

var _fibs = fibs();

var _fibs2 = _slicedToArray(_fibs, 6);

var first = _fibs2[0];
var second = _fibs2[1];
var third = _fibs2[2];
var fourth = _fibs2[3];
var fifth = _fibs2[4];
var sixth = _fibs2[5];

console.log(fifth);

var _foo$bar = { foo: "aaa", bar: "bbb" };
var baz = _foo$bar.foo;

var node = {
    loc: {
        start: {
            line: 1,
            column: 5
        }
    }
};

var line = node.loc.start.line;

// 解构的嵌套

var obj = {
    p: ["hello", {
        y: "World"
    }]
};

var _obj$p = _slicedToArray(obj.p, 2);

var x = _obj$p[0];
var y = _obj$p[1].y;

// 函数参数的解构

function add(_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2);

    var x = _ref5[0];
    var y = _ref5[1];

    return x + y;
}

add([1, 2]);

[[1, 2], [3, 4]].map(function (_ref6) {
    var _ref7 = _slicedToArray(_ref6, 2);

    var a = _ref7[0];
    var b = _ref7[1];
    return a + b;
});

// 函数参数的解构也可以使用默认值

// 为解构指定默认值
function move() {
    var _ref8 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var _ref8$x = _ref8.x;
    var x = _ref8$x === undefined ? 0 : _ref8$x;
    var _ref8$y = _ref8.y;
    var y = _ref8$y === undefined ? 0 : _ref8$y;

    return [x, y];
}

move({}); // [0, 0]
move(); // [0, 0]

// 为函数的参数指定默认值
function move_1() {
    var _ref9 = arguments.length <= 0 || arguments[0] === undefined ? { x: 0, y: 0 } : arguments[0];

    var x = _ref9.x;
    var y = _ref9.y;

    return [x, y];
}

move_1({}); // [undefined, undefined]
move_1(); // [0, 0]

// undefined 会触发函数参数的默认值
[1, undefined, 3].map(function () {
    var x = arguments.length <= 0 || arguments[0] === undefined ? 'yes' : arguments[0];
    return x;
});

// 圆括号的使用问题

/*
 * 变量声明中的模式不能带有圆括号。(var let const 语句中等号前面的部分不能带有圆括号)
 * 函数的参数中，模式中不能带有圆括号
 * 不能将整个模式或者嵌套模式中的一层放入圆括号。
 */

// 用途

// 交换变量的值

// 取出函数返回的多个值
var _ref10 = [y, x];
x = _ref10[0];
y = _ref10[1];
function example() {
    return [1, 2, 3];
}

var _example = example();

var _example2 = _slicedToArray(_example, 3);

var aa = _example2[0];
var bb = _example2[1];
var cc = _example2[2];

function example_1() {
    return {
        lal: 12,
        ala: 21
    };
}

var _example3 = example();

var lal = _example3.lal;
var ala = _example3.ala;
