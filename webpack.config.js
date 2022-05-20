const path = require("path");

module.exports = {
	mode: "development",

	entry: {
		main: path.resolve(__dirname, "src/index.js"),
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "main.js",
	},
	devtool: 'inline-source-map',
	devServer: {
		static: path.resolve(__dirname, 'dist'),
		port: 5001,
		hot: true,
		open: true,
	},
	module: {
			rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
				// Creates `style` nodes from JS strings
				"style-loader",
				// Translates CSS into CommonJS
				"css-loader",
				// Compiles Sass to CSS
				"sass-loader",
				],
			},
		],
	},
};
