
module.exports = {
    module: {
        loaders: [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },

    entry: {
        syntax: './src/test.es6'
    },
    output: {
        filename: './browser/test.js'
    }
}
