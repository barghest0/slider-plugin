const { merge } = require('webpack-merge');
const config = require('./webpack.config');

const devConfig = merge(config, {
  mode: 'development',
  devtool: 'inline-source-map', // use source mapping to debug SCSS in browser
  devServer: {
    static: {
      directory: config.externals.path.dist,
      watch: true,
    },
    hot: true,
    port: 8080,
    open: false,
    
    // need for live reload by changes in all files
    watchFiles: {
      paths: ['src/**/*.*'],
      options: {
        usePolling: true,
      },
    },
  },
});

module.exports = devConfig;
