const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const PATHS = {
	src: path.join(__dirname, "./src"),
	dist: path.join(__dirname, "./dist"),
		assets: ("assets/")	
};

module.exports = {
	mode: "development",
	//объект с путями для merge конфигов
	externals: {
		path: PATHS,
	},
	//точка входа
	entry: {
		app: "./src/demo/index.ts",
	},
	//точка выхода
	output: {
		filename: `${PATHS.assets}js/[name].[fullhash].js`,
		path: PATHS.dist,
		publicPath: "/",
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					name: "vendors",
					test: /node_modules/,
					chunks: "all",
					enforce: true,
				},
			},
		},
	},

	//кросс-браузерная совместимость
	module: {
		rules: [
			{
				//файлы
				test: /\.js$/,
				//лоадеры (транспилируют файлы)
				use: ["babel-loader"],
				//исключения
				exclude: "/node_modules/",
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
					"css-loader",
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: { config: "postcss.config.js" },
						},
					},
					{
						loader: "sass-loader",
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
	devServer: {
		static: {
			directory: "./dist",
			watch: true,
		},
		port: 8080,
		open: true,
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: `${PATHS.assets}css/[name].[fullhash].css`,
		}),
		new webpack.ProvidePlugin({
				$:'jquery',
				jQuery:'jquery'
		}),
		new HtmlWebpackPlugin({
			template: `${PATHS.src}/demo/index.html`,
			filename: `./index.html`,
		}),
	],
};
