var path = require('path');
var hwp = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: ['@babel/polyfill', path.join(__dirname, '/src/index.js')],
    output: {
        filename: 'bundle.js',
        publicPath: '/',
        path: path.join(__dirname, '/build')
    },
    module:{
        rules:[
            {
                exclude: /node_modules/,
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { url: false, sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } }
                ],
            },
            {
                test: /\.(gif|png|jpe?g|svg|ico)$/i,
                use: [
                    'file-loader',
                    {
                    loader: 'image-webpack-loader',
                    options: {
                        bypassOnDebug: true, // webpack@1.x
                        disable: true, // webpack@2.x and newer
                    },
                    },
                ],
            },

        ]
    },
    resolve: {
        alias:{
     
                "@" : path.join(__dirname, "src"),
                // "~": path.join(__dirname, "assets"),
        },
        extensions: ['*', '.js', '.jsx']
    },
    plugins:[
        new hwp({
            template:path.join(__dirname, '/src/index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: "style.css"
        })
    ],
    watch: true
}