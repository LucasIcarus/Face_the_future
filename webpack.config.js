
module.exports = {
    entry: './src/test.es6',
    output: {
        path: 'builds',
        filename: 'test.js'
    },
    module: {
        loaders: [
            {
                test: /\.es6$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    }
};
