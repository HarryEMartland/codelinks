const HtmlWebPackPlugin = require("html-webpack-plugin");
var AppCachePlugin = require('appcache-webpack-plugin');
const webpack = require('webpack');

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {
    output: {},
    devServer: {
        hot: true,
        proxy: {
            '/drs': 'http://localhost:8080'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        htmlPlugin,
        new webpack.HotModuleReplacementPlugin(),
        new AppCachePlugin({
            cache: ['index.html', 'main.js'],
            network: null,
            fallback: [],
            settings: ['prefer-online'],
            exclude: ['sockjs-node/info.*' ,/.*info.*$/],
            output: 'manifest.appcache'
        })
    ]
};