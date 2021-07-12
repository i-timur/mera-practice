const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					}
				}
			},
		 {
			test: /\.css$/i,
			use: ["style-loader", "css-loader"],
		 }
		]
	},
	plugins: [
	 new CleanWebpackPlugin(),
	 new HtmlWebpackPlugin({template: 'index.html', filename: 'index.html'}),
	 new ESLintPlugin()
	]
};
