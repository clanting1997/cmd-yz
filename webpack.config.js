const MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    webpack = require('webpack');

let mode = "development"

if (process.env.NODE_ENV === "production") {
    mode = "production";
}

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: mode,

    module: {
        rules: [
            {
                test: /\.s?css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }
        ]

    },

    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
        hot: true,
    },
    
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new webpack.ProvidePlugin({
           $: 'jquery',
           jQuery: 'jquery'
        })
    ]
}
