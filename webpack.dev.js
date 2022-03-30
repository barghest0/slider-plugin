const { merge } = require('webpack-merge');
const config = require('./webpack.config');

const devConfig = merge(config, {
  mode: 'development',
  output: {
    filename: `${config.externals.path.assets}js/[name].[fullhash].js`,
    path: config.externals.path.dist,
  },
  devServer: {
    static: {
      directory: config.externals.path.dist,
      watch: true,
    },
    port: 8080,
    open: false,
  },
});

module.exports = devConfig 
