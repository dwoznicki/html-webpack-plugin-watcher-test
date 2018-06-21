const path = require('path');
const HtmlWebpackPlugin = require('./html-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: { index: './src/index.js' },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
            filename: 'index.html',
        })
    ],
    stats: 'errors-only',
};

