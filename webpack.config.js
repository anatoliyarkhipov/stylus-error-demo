var path = require('path');
module.exports = {
    entry: './index.js',
    watch: true,
    poll: true,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { 
                test: path.join(__dirname, 'js'), 
                loader: 'babel-loader'
            },
            {
                test: /\.styl$/,
                loader: 'url-loader?limit=1&name=bundle.css!stylus-loader'
            },
        ]
    }
};