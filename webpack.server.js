const path = require('path');
const WebpackNodeExternals = require('webpack-node-externals');
import WebpackNodeExternals from 'webpack-node-externals';
module.exports = {
    target : 'node',
    entry : './server.js',
    output : {
        filename : 'bundle.js',
        path : path.resolve(__dirname, 'build')
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                use : {
                    loader : 'babel-loader'
                }
            }
        ]
    },
    externals : [WebpackNodeExternals()]
}