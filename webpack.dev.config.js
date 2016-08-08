var path = require('path');
var webpack = require('webpack');

const SOURCE_PATH = path.resolve(__dirname, 'src');
const BUILD_FOLDER = 'build';

module.exports = {
    entry: `${SOURCE_PATH}/app.js`,
    output: { path: `${__dirname}/${BUILD_FOLDER}`, filename: `bundle.js` },

    module: {
        loaders: [
            // .js or .jsx files => compile ES6 and JSX
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}