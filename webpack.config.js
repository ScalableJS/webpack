// Webpack v4
const webpack = require('webpack');
module.exports = {
	entry: './src/home',
	output: {
		filename: 'index.js',
	},
	mode: 'development',
	plugins: [
		new webpack.DefinePlugin({
			'IS_DEV_MODE': JSON.stringify(true)
		})
	]
}