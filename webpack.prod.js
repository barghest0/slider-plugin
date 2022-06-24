const { merge } = require('webpack-merge');
const config = require('./webpack.config');

const prodConfig = merge(config, {
  mode: 'production',
  devtool: 'source-map'
});

module.exports = prodConfig;
