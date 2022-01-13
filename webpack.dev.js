const { merge } = require('webpack-merge')
const config = require('./webpack.config')

const devConfig = merge(config, {
    mode: 'development',

    devServer: {
        static: {
            directory: config.externals.path.dist,
            watch: true,
        },
        port: 8080,
        open: true,
    },
})

module.exports = new Promise((resolve, reject) => {
    resolve(devConfig)
})
