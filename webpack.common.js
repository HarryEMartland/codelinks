const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

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
        new WorkboxPlugin.GenerateSW({
            // these options encourage the ServiceWorkers to get in there fast
            // and not allow any straggling "old" SWs to hang around
            clientsClaim: true,
            skipWaiting: true
        }),
        new WebpackPwaManifest({
            name: 'LearnTo.Codes',
            short_name: 'LTC',
            description: 'A collection of links to help you learn new languages and technologies including javascript, python, kubernetes and more.',
            background_color: 'white',
            crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
            theme_color: 'white',
            icons: [
                {
                    src: path.resolve('./src/assets/icon.png'),
                    sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
                }
            ]
        })
    ]
};