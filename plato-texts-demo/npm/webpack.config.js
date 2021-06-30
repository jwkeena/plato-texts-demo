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
        new webpack.ProvidePlugin({
            process: 'process/browser', // fix "process is not defined" error in browser
        }),
    ],
    resolve: {
        // All of these are required dependencies that I had to manually install via npm to fix browser errors.
        // Most of these packages had to be installed because webpack 5 does not include node services by default anymore.
        alias: {
            "https": require.resolve("https-browserify"),
            "string_decoder": require.resolve("string_decoder/"),
            "url": require.resolve("url"),
            "buffer": require.resolve("buffer"),
            "http": require.resolve("stream-http"),
            "stream": require.resolve("stream-browserify"),
        },
    },
}