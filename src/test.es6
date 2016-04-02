"use strict";

// require('babel-polyfill');

var arr = Array.of(1, 2, 3);

// console.log(arr);

arr.push(12);

// console.log('Need I do anything more to pleasure my boss?');

var customers = [
    {
        name: 'Jack',
        age: 30,
        city: 'Xiamen'
    },
    {
        name: 'Lily',
        age: 25,
        city: 'Xuzhou'
    }
];

var results = customers.filter(function (c) {
    if (c.city == 'Xiamen') {
        return {name: c.name, age: c.age};
    }
});
console.log(results);

function m1 ({x = 0, y= 0} = {}) {
    return [x, y];
}

function m2 ({x, y} = {x: 0, y: 0}) {
    return [x, y];
}

var arr1 = [12, 34];

function add (x, y) {
    return x + y;
}

add(...arr1);

function laLaName () {}

console.log(laLaName.name);

var arr_1 = [1,5,7,5,4,1,3];

var set_1 = new Set (arr_1);

var arr_2 = [...set_1];

var arr_test = [['name', 'Dachui'], ['age', 23], ['gender', 'male']];

for ([key,value] of arr_test) {
    console.log(key + 'is' + value);
}
