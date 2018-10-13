const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const AppCachePlugin = require('appcache-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new AppCachePlugin({
            cache: ['index.html', 'main.js'],
            network: null,
            fallback: [],
            settings: ['prefer-online'],
            exclude: ['sockjs-node/info.*', /.*info.*$/],
            output: 'manifest.appcache'
        })
    ]
});