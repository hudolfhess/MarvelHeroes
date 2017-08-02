const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')

const staticPath = `${__dirname}/src`

module.exports = {
    context: staticPath,
    entry: {
        index: [
            'babel-polyfill',
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './index'
        ]
    },
    output: {
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            newRelicLicenseKey: '',
            newRelicApplicationId: '',
            mixpanelToken: '',
            smartlookToken: '',
            template: 'template.hbs'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename: 'application.css'
        }),
        new Dotenv({
            path: `${staticPath}/.env`,
            safe: false
        })
    ],
    devtool: 'source-map',
    devServer: {
        historyApiFallback: {
            index: '/index.html'
        }
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        enforceExtension: false
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ["react-hot-loader", "babel-loader"],
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]",
            },
            {
                test: /\.scss|.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' },
                        { loader: 'sass-loader' },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [autoprefixer]
                            }
                        }
                    ]
                }),
            },
        ],
    },
    node: {
        fs: 'empty'
    }
}