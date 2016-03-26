/**
 * Created by Fancy on 2016/3/25 0025.
 */

// "use strict";

{
    let a = 1;
}

// 对于let的独立作用域实现，babel采用了转换变量名的方式。

var some = [];

for (let i = 0; i < 10; i++) {
    some[i] = function () {
        console.log(i);
    };
}

some[5]();

// 循环赋值与循环绑定事件处理函数采用的是直接将i作为参数传入执行函数的方式。


{
    let a = "secret";
    function f () {               //在严格模式下，函数只能在顶层作用域和函数内声明。
        return a;
    }
}

// f();

// ES6 废除了原本的变量提升和函数提升。

export const A = 1;

// 解构赋值

var [a,b,c] = [1,2,3];

// 模式匹配

var [some, ...someother] = [1,2,3,4];

var [x,y,...z] = ['x'];

// 不完全解构

var [a,[b],d] = [1,[2,3],4];

// 解构赋值仅需要这种数据结构具有Iterator接口。

function* fibs() {
    var a = 0;
    var b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

var [first, second, third, fourth, fifth, sixth] = fibs();

console.log(fifth);

var {foo : baz} = {foo: "aaa", bar: "bbb"};

var node = {
    loc: {
        start: {
            line: 1,
            column: 5
        }
    }
};

var {loc: { start: { line } } } = node;

// 解构的嵌套

var obj = {
    p: ["hello", {
            y: "World"
    }]
};

var { p: [x, { y }] } = obj;



