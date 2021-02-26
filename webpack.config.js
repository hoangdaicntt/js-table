const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const JavaScriptObfuscator = require('webpack-obfuscator');

module.exports = {
    entry: {
        jstable: './src/index.js',
    },
    mode: "development",
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        library: 'JSTable',
        libraryExport: 'default'
    },
    // optimization: {
    //     minimize: true,
    //     minimizer: [new TerserPlugin()],
    // },
    // plugins: [
    //     new JavaScriptObfuscator({
    //         rotateUnicodeArray: true
    //     }, ['excluded_bundle_name.js'])
    // ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};
