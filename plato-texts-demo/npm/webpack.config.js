const path = require("path");
const webpack = require("webpack");

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        // fix "process is not defined" error:
        // (do "npm install process" before running the build)
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ],
    resolve: {
        alias: {
            "https": require.resolve("https-browserify"),
            "string_decoder": require.resolve("string_decoder/"),
            "url": require.resolve("url"),
            "buffer": require.resolve("buffer"),
            "http": require.resolve("stream-http"),
            "stream": require.resolve("stream-browserify"),
            // "process": false, // require.resolve("process/browser")
        },
    },
}