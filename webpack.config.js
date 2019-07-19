const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

var config = (env, options) => [ 
    {
        name: "web",
        entry: options.mode === "production" ? [ './src/web/index-client.tsx'] :
            ['./src/web/index-client.tsx' , 'webpack-hot-middleware/client'],
        output: {
            path: path.resolve(__dirname, 'public/build'),
            publicPath: "/build/",
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/, 
                    include: path.resolve(__dirname, "./src/web"),
                    loader: "awesome-typescript-loader",
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use: options.mode === "production" ?
                    [MiniCssExtractPlugin.loader, "css-loader"] :
                    ["style-loader","css-loader"],
                    exclude: /\.module\.css$/
                },
                {
                    test: /\.(png|jpg|jpeg|gif|svg|ttf|otf|woff|woff2|eot)$/,
                    loader: 'url-loader?limit=4096'
                }
    
            ]
        },
        resolve: {
            extensions: ['.tsx','.ts','.js']
        },
        devtool: options.mode === 'production' ? 'source-map' : 'cheap-module-eval-source-map',
        plugins: options.mode === "production" ? [
                new MiniCssExtractPlugin(),
                new HtmlWebpackPlugin({
                    template: "./src/template.html",
                    hash: true,
                    filename: "main.html",
                })
            ] : [new webpack.HotModuleReplacementPlugin()],
     /**    optimization: {
            runtimeChunk: 'single',
            splitChunks: {
            cacheGroups: {
                vendor: {
                test: /[\\\/]node_modules[\\\/]/,
                name: 'vendors',
                chunks: 'all'
                }
            }
            }
        } */
    },
    {
        name: "server",
        entry: ['./src/server/main.ts'],
        target: 'node',
        externals: [nodeExternals()],
    
        output: {
            path: path.resolve(__dirname, './build'),
            filename: '[name].js',
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        },
        module: {
            rules: [
                {
                    test:/\.tsx?$/,
                    include: path.resolve(__dirname, "./src/server/"),
                    loader: "awesome-typescript-loader"
                }
            ]  
        },
         node: {
            __dirname: true,
            __filename: true
        }
       
    } 
]

module.exports = config;