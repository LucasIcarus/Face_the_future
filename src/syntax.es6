/**
 * Created by Fancy on 2016/3/25 0025.
 */

"use strict";

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
    //function f () {               //在严格模式下，函数只能在顶层作用域和函数内声明。
    //    return a;
    //}
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

// 函数参数的解构

function add ([x, y]) {
    return x + y;
}

add([1, 2]);

[[1, 2], [3, 4]].map(([a, b]) => a + b);

// 函数参数的解构也可以使用默认值

// 为解构指定默认值
function move ({x = 0, y = 0} = {}) {
    return [x, y];
}

move({});   // [0, 0]
move();     // [0, 0]

// 为函数的参数指定默认值
function move_1 ({x, y} = {x: 0, y: 0}) {
    return [x, y];
}

move_1({}); // [undefined, undefined]
move_1();  // [0, 0]

// undefined 会触发函数参数的默认值
[1, undefined, 3].map((x = 'yes') => x);

// 圆括号的使用问题

/*
 * 变量声明中的模式不能带有圆括号。(var let const 语句中等号前面的部分不能带有圆括号)
 * 函数的参数中，模式中不能带有圆括号
 * 不能将整个模式或者嵌套模式中的一层放入圆括号。
 */

// 用途

// 交换变量的值
[x, y] = [y, x];

// 取出函数返回的多个值
function example () {
    return [1, 2, 3]
}

var [aa, bb, cc] = example();

function example_1 () {
    return {
        lal: 12,
        ala: 21
    };
}

var {lal, ala} = example();

// 函数参数的定义

// 有序
function ff ([x, y, z]) {
    return ;
}

ff([1, 2, 3]);

// 无序
function fff ({x, y, z}) {
    return ;
}

fff({z: 3, y: 2, x: 1});

// 提取json数据
var jsonData = {
    id: '42',
    status: 'OK',
    data: [867, 1234]
};

let {id, status, data:number} = jsonData;

// 函数参数的默认值

// 遍历map结构

var map = new Map();

map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
    console.log(key + 'is' + value);
}

// 输入模块的指定方法

const { SourceMapConsumer, SourceNode} = require('source-map');

// -------------------------------------------------------------------------

var text = 'sample';

function sample_test (arg1, arg2) {
    return arg1.includes(arg2);
}

sample_test(text, 'sa');

var text_3 = text.repeat(3);

console.log(`
    In JavaScript this is 
    not legal!
    It is a ${text}!
`);

{
    let x = 1,
        y = 2;
    console.log(`${x} + ${y} = ${x + y} `);

    const helloWorld = function () {
        return 'Hello World'
    }

    console.log(` foo ${helloWorld()} bar`);
}


