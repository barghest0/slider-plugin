const path = require('path');
const PugPlugin = require('pug-plugin');

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
    // using pug-plugin, the Entrypoint is Pug file
    // source of scripts and styles must be used directly in Pug:
    //
    // link(rel='stylesheet' href=require('style/slider.scss'))
    // script(src=require('demo/index.ts'))

    index: path.join(PATHS.demo, 'pages/index/index.pug'),
  },

  output: {
    path: PATHS.dist,
    publicPath: '/',
    filename: `${PATHS.assets}/js/[name].[contenthash:8].js`,
    clean: true,
  },

  resolve: {
    extensions: ['.js', '.ts'],
    modules: ['node_modules'],
    alias: {
      components: path.resolve(__dirname, './src/components'),
      'pug-components': path.resolve(__dirname, './src/demo/components'),
      demo: path.resolve(__dirname, './src/demo'),
      utils: path.resolve(__dirname, './src/utils'),
      plugin: path.resolve(__dirname, './src/plugin'),
      fonts: path.resolve(__dirname, './src/demo/assets/fonts'), // use in SCSS alias instead of relative path, like '../fonts'
      images: path.resolve(__dirname, './src/demo/assets/static'), // used in index.pug
      style: path.resolve(__dirname, './src/style'), // used in index.pug
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
        test: /\.(scss|css)$/,
        use: [
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
        test: /\.pug$/,
        loader: PugPlugin.loader,
        options: {
          method: 'render', // fast method to compile static HTML
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: `${PATHS.assets}/fonts/[name][ext]`,
        },
      },
      {
        test: /\.(ico|png|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: `${PATHS.assets}/img/[name].[fullhash:8][ext]`,
        },
      },
    ],
  },

  plugins: [
    // enable processing of Pug files from entry
    new PugPlugin({
      modules: [
        // extract CSS from source styles used in Pug
        PugPlugin.extractCss({
          // output filename of styles
          filename: `${PATHS.assets}/css/[name].[contenthash:8].css`,
        }),
      ],
    }),
  ],
};

module.exports = config;
