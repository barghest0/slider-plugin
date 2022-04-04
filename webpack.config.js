const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ProvidePlugin } = require('webpack');

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist'),
  assets: 'assets/',
};

const config = {
  externals: {
    path: PATHS,
    jquery: 'jQuery',
  },

  entry: {
    index: './src/Demo/index.ts',
    slider: './src/slider-plugin.ts',
  },

  output: {
    path: PATHS.dist,
    filename: `${PATHS.assets}js/[name].js`,
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: '/node_modules/',
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
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
    ],
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].css`,
      chunkFilename: `[name].[contenthash].css`,
    }),

    new HtmlWebpackPlugin({
      template: `${PATHS.src}/Demo/index.html`,
      filename: `./index.html`,
    }),
  ],
};

module.exports = config;
