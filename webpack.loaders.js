module.exports = [
    // .js or .jsx files => compile ES6 and JSX
    {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
            presets: ['es2015', 'react']
        }
    }
];