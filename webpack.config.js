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
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        })
    ]
}
