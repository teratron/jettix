'use strict'

const {merge} = require('webpack-merge')
const common = require('./webpack.common')
const paths = require('../../config/paths')
// import {merge} from 'webpack-merge'
// import common from './webpack.common'
// import paths from '../../config/paths'

const config = merge(
    common({
        styleLoader: 'style-loader'
    }),
    {
        mode: 'development',
        devtool: 'eval-cheap-module-source-map',
        output: {
            filename: 'static/js/[name].bundle.js'
        },
        devServer: {
            static: paths.build + '/static',
            port: 9001,
            historyApiFallback: true,
            compress: true,
            open: true,
            hot: true
        }
    }
)

module.exports = new Promise(resolve => {
    resolve(config)
})
