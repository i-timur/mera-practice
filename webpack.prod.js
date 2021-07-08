const { merge } = require('webpack-merge');
const CommonConfig = require('./webpack.config.js');

module.exports = merge(CommonConfig, {
	mode: 'production',

	optimization: {
		minimize: true
	}
});
