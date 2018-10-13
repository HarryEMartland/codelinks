const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

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
        new CleanWebpackPlugin(['dist']),
        htmlPlugin,
        new webpack.HotModuleReplacementPlugin(),
    ]
};