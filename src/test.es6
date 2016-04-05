"use strict";

// require('babel-polyfill/');

function* fibonacci () {
    let [prev, curr] = [0, 1];
    for (;;) {
        [prev, curr] = [curr, prev + curr];
        yield curr;
    }
}

for (let n of fibonacci()) {
    if (n > 1000) break;
    console.log(n);
}

function* objectEntries () {
    var propKeys = Object.keys(this);
    
    for (let key of propKeys) {
        yield [key, this[key]];
    } 
}

let jane = {first: 'Jane', second: 'Doe'};

jane[Symbol.iterator] = objectEntries;

for (let [key, value] of jane) {
    console.log(`${key}: ${value}`);
}