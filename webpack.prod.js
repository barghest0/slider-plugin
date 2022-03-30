const { merge } = require('webpack-merge');
const config = require('./webpack.config');

const prodConfig = merge(config, {
  mode: 'production',

  output: {
    path: config.externals.path.dist,
    filename: `${config.externals.path.assets}js/[name].js`,
    clean: true,
    library: {
      name: 'slider-plugin',
      type: 'umd',
    },
  },
});

module.exports = prodConfig


