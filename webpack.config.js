const path = require('path');
const webpack = require('webpack');
module.exports = {
	entry: {
		home: './src/home'
	},
	output: {
		filename: '[name].js',
		publicPath: path.resolve(__dirname, 'dist/'),
		//publicPath: __dirname + '/dist/',
		//chunkFilename: '[name].bundle.js',
		//path: path.resolve(__dirname, 'dist')
	},
	mode: 'development',
	plugins: [
		new webpack.DefinePlugin({
			'IS_DEV_MODE': JSON.stringify(true)
		})
	]
}