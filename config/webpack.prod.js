'use strict'

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {merge} = require('webpack-merge')
const common = require('./webpack.common')
const semver = require('./version')
const paths = require('./paths')

const config = merge(
    common({
        styleLoader: MiniCssExtractPlugin.loader
    }),
    {
        mode: 'production',
        devtool: 'source-map',
        entry: {
            main: paths.src + '/index.js'
        },
        output: {
            filename: 'static/js/[name].[contenthash].bundle.js',
            path: paths.dist,
            publicPath: 'auto',
            clean: true
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'static/css/[name].[contenthash].bundle.css'
            }),
            semver({
                files: [paths.root + '/package.json']
            })
        ],
        performance: {
            hints: false,
            maxEntrypointSize: 512000,
            maxAssetSize: 512000
        }
    }
)

module.exports = new Promise(resolve => {
    resolve(config)
})
