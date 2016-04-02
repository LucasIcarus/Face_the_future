##Finally

####Writing some notes is a good way to learn, right?

Using ES6 in the browser is a hard task. Getting half the results with double the effort is not wise.

In node.js with require, it is quiet simple to handle the polyfill. Then with babel and browserify or webpack doing great.

#### Iterator 对象的原理

    function makeIterator (array) {
        var nextIndex = 0;
        return {
            next: function () {
                return nextIndex > array.length ?
                {value: array[nextindex++]}:
                {done: true};
            }
        }
    }

Iterator只是将接口加到了数据结构上，所以遍历器和所遍历的数据结构实际上是分开的。

ES6规定，默认的Iterator接口都部署在数据结构的Symbol.iterator属性上，其本身是一个表达式，返回Symbol对象的iterator属性。

一共有三种数据结构原生具有Iterator接口，他们是数组，类数组对象，以及Set和Map结构。

