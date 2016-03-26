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

/**
 * Created by Fancy on 2016/3/25 0025.
 */

// "use strict";

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
    (function () {
        var f = function f() {
            //在严格模式下，函数只能在顶层作用域和函数内声明。
            return a;
        };

        var a = "secret";
    })();
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
