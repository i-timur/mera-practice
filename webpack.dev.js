const { merge } = require('webpack-merge');
const CommonConfig = require('./webpack.config.js');

module.exports = merge(CommonConfig, {
	mode: 'development',

	watchOptions: {
		ignored: '/node_modules/',
	},

	devtool: 'inline-source-map',

	devServer: {
		compress: false,
		historyApiFallback: true,
		hot: true,
		port: 3000,
	},
});
