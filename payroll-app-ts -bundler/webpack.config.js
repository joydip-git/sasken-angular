const path = require('path');
module.exports = {
    entry: './source/main.ts',
    output: {
        filename: './bundle.js'
    },
    module: {
        rules: [{
            exclude: [path.resolve(__dirname, 'node_modules')],
            loader:'ts-loader'
        }]
    },
    resolve: {
        extensions: ['.ts', '.js', '.css', '.json']
    },
    devtool:'source-map',
    devServer: {
        port: 8085,
        compress: true,
        contentBase: path.join(__dirname, './')
    }
}