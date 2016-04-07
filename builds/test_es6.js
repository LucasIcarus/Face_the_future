var output = function (data) {
    console.log(data);
};

var square = function (x, callback) {
    var result = x * x;
    callback(result);
}

var Thunk = function (fn) {
    return function () {
        var args = Array.prototype.slice.call(arguments);
        return function (callback) {
            args.push(callback);
            return fn.apply(this, args);
        };
    };
};

var squareThunk = Thunk(square);
squareThunk(12)(output);