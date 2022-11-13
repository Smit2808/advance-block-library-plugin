const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require('path');


const externals = {
    wp: "wp",
    react: "React",
    "react-dom": "ReactDOM",
};

const isProduction = process.env.NODE_ENV === "production";
const mode = isProduction ? "production" : "development";

module.exports = {
    mode,
    entry: {
        front: ["./src/scss/style.scss"],
        editor: ["./src/scss/editor.scss"],
        blockbuild: ["./block.js"]
    },
    output: {
        path: path.resolve(__dirname, "build"),
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ],
    module: {
        rules: [
            {
                test: /.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin({
                test: /\.css/i,
            }),
        ],
    },
};