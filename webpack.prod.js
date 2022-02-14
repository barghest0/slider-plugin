const { merge } = require('webpack-merge');
const config = require('./webpack.config');

const prodConfig = merge(config, {
  mode: 'production',

  output: {
    filename: `${config.externals.path.assets}js/[name].[fullhash].js`,
    path: config.externals.path.dist,
    clean: true,
    library: {
      name: 'slider',
      type: 'umd',
      export: 'default',
    },
  },
});

module.exports = new Promise(resolve => {
  resolve(prodConfig);
});
