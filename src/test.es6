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


