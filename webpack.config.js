const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist'),
  demo: path.join(__dirname, './src/demo'),
  assets: 'assets',
};

const config = {
  context: path.resolve(__dirname, 'src'),

  externals: {
    path: PATHS,
    jquery: 'jQuery',
  },

  entry: {
    index: `${PATHS.src}/demo/index.ts`,
    slider: `${PATHS.src}/plugin/plugin.ts`,
  },

  output: {
    path: PATHS.dist,
    filename: `${PATHS.assets}/js/[name].js`,
    clean: true,
  },

  resolve: {
    extensions: ['.js', '.ts'],
    modules: ['node_modules'],
    alias: {
      components: path.resolve(__dirname, './src/components'),
      demo: path.resolve(__dirname, './src/demo'),
      utils: path.resolve(__dirname, './src/utils'),
      plugin: path.resolve(__dirname, './src/plugin'),
    },
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        index: {
          type: 'css/mini-extract',
          name: 'index',
          chunks: chunk => {
            return chunk.name === 'index';
          },
          enforce: true,
        },
        slider: {
          type: 'css/mini-extract',
          name: 'slider',
          chunks: chunk => {
            return chunk.name === 'slider';
          },
          enforce: true,
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.(t|j)s$/,
        use: ['babel-loader'],
        exclude: '/node_modules/',
      },
      {
        test: /\.pug$/,
        use: ['pug-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: `${PATHS.assets}/fonts/[name][ext]`,
        },
      },

      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: { config: 'postcss.config.js' },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },

      {
        test: /\.ico$/,
        type: 'asset/resource',
        generator: {
          filename: `[name][ext]`,
        },
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}/css/[name].css`,
      chunkFilename: `[name].[contenthash].css`,
    }),

    new HtmlWebpackPlugin({
      template: `${PATHS.demo}/pages/index/index.pug`,
      filename: `./index.html`,
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${PATHS.demo}/assets/static`,
          to: `${PATHS.assets}/favicons`,
        },
      ],
    }),
  ],
};

module.exports = config;
