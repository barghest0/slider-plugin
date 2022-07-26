const { merge } = require('webpack-merge');
const config = require('./webpack.config');

const devConfig = merge(config, {
  mode: 'development',
  devServer: {
    static: {
      directory: config.externals.paths.dist,
      watch: true,
    },
    hot: true,
    port: 8080,
    open: false,
  },
});

module.exports = devConfig;
