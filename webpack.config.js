const path = require('path');
const TSLintPlugin = require('tslint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode : "development",
    //mode : "production",
    entry : {
        "entry":"./src/app/index.ts"
    },
    devtool : 'inline-source-map',
    output:{
        filename:"app.js",
        path : path.resolve(__dirname, 'docs/app')
    },
    module : {
        rules :[
            {
                test : /\.tsx?$/,
                use : 'ts-loader',
                exclude : /node_modules/
            },
            {
                test : /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test : /\.js$/,
                exclude : /node_modules/,
                loader: "babel-loader",
                options : {
                    presets : [[
                        "env", {
                            targets : {
                                browsers : ["last 2 versions"]
                            }
                        }
                    ]]
                }
            },
        ]
    },
    resolve : {
        extensions : [".tsx", ".ts", ".js"]
    },
    plugins: [
        new TSLintPlugin({
            files : ['./src/app/**/*.ts'],
        }),
        // new CopyWebpackPlugin([
        //     {
        //         from : './src/**/*.html',
        //         to: './',
        //         force : true,
        //         toType : 'glob'
        //     }
        // ])
    ]
};
