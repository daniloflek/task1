const path = require('path');
const HtmlWebpackPlugins = require("html-webpack-plugin");

module.exports = {
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
    },
    watch: true,
    devServer: {
        port: 3001,
    },
    plugins:[
        new HtmlWebpackPlugins({
            name: "index.html",
            inject: false,
            template: './static/index.html'
        })

    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.scss/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
}