const Path = require("path"); // for resolving to absolute paths
const HtmlWebpackPlugin = require('html-webpack-plugin'); // for processing html (eg. caching hash) -- npm install --save-dev html-webpack-plugin
module.exports = {
    mode: 'development',
    devtool: 'source-map',
    context: __dirname + '/src', // set context for entry, default is cwd, __dirname is absolute path to /
    entry: './index.js', // context + path here, default: ./src/index.js
    output: {
        filename: './scripts/bundle.js' // default: ./dist/main.js
    },
    devServer: {
        contentBase: Path.resolve(__dirname, 'src') // static content
        // default path is output.filename (without /dist or /src)
    },
    module: { // loader for processing/transforming matching modules/things found in require/import
        rules: [
            // css -> put in to bundle.js
            {
                test: /\.css$/,
                use:['style-loader','css-loader'] // 2. style-loader <-- 1. css-loader
                // 2. put string into style-tag; npm install --save-dev style-loader
                // 1. collect referenced css into a string; npm install --save-dev css-loader
            },
            // images
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader', // npm install --save-dev file-loader
                        options: {
                            name: './images/[name].[ext]'
                        }
                    }
                ]
            },
            // parse html -> images:file-loader
            // using together with HtmlWebpackPlugin to copy image: deactivate stylesheet in html and import in index.js (else: Error: return window && document && document.all && !window.atob; ReferenceError: window is not defined)
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: ['img:src', 'link:href']
                    }
                }
            }
        ]
    },
    // instancing plugin loaded with require
    plugins: [
        // create html from template and adding bundle.js - hash where to see?
        new HtmlWebpackPlugin({
            template: 'index.html',  // why not ./src/index.html necessary ???
            filename: 'index.html'
        })
    ]
};