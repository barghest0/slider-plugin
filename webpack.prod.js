const { merge } = require("webpack-merge");
const config = require("./webpack.config");

const prodConfig = merge(config, {
	mode: "production",
	output: {
		filename: `${config.externals.path.assets}js/[name].[fullhash].js`,
		path: config.externals.path.dist,
		publicPath: "./",
	},
});

module.exports = new Promise((resolve, reject) => {
	resolve(prodConfig);
});
