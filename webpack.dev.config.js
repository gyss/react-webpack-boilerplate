var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var loaders = require('./webpack.loaders');

const SOURCE_FOLDER = 'src';
const BUILD_FOLDER = 'build';

const HOST = '0.0.0.0';
const PORT = '8888';

module.exports = {

    entry: [
        // Webpack Dev Server
        `webpack-dev-server/client?http://${HOST}:${PORT}`,
		`webpack/hot/only-dev-server`,
        // App entry point
        `${__dirname}/${SOURCE_FOLDER}/app.jsx`
    ],
    output: { 
        path: `${__dirname}/${BUILD_FOLDER}`, 
        filename: `bundle.js`
    },

    // Emit source-maps for development
    devtool: 'source-map',

    // Array of extensions that should be used to resolve modules
    resolve: {
		extensions: ['', '.js', '.jsx']
	},

    // Webpack Dev Server Config
    devServer: {
        contentBase: `${__dirname}/${BUILD_FOLDER}`,
        noInfo: true,
        hot: true,
        inline: true,
        port: PORT,
        host: HOST
    },

    plugins: [
        // webpack process will not exit with an error code
		new webpack.NoErrorsPlugin(),
        // enable Hot Module Replacement
		new webpack.HotModuleReplacementPlugin(),
        // Copy index.html to BUILD_FOLDER
		new CopyWebpackPlugin([ {from: `${__dirname}/${SOURCE_FOLDER}/index.html`} ]),
	],

    module: {
        loaders
    }
}