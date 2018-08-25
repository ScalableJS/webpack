//webpack.js.org/guides/environment-variables/
const NODE_ENV = process.env.NODE_ENV || 'development';
//webpack --env.NODE_ENV=local
//https://webpack.js.org/guides/environment-variables/
// const  webpack = require('webpack');
module.exports = env => {
	console.log('NODE_ENV: ', env.NODE_ENV) // 'local'
	console.log('Production: ', env.production) // true
	return {
		devtool: NODE_ENV === 'development' ? "eval" : 'null',
		entry: "./src/main", // string | object | array
		// Here the application starts executing
		// and webpack starts bundling
		output: {
			filename: "index.js", // string
			library: "sandbox"
		},
		watch: true,
		watchOptions: {
			aggregateTimeout: 100
		},
		//https://github.com/babel/babel-loader
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								'es2015',
							]
						}
					}
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader']
				},
				{
					test: /\.scss$/,
					use: [{
						loader: "style-loader" // creates style nodes from JS strings
					}, {
						loader: "css-loader" // translates CSS into CommonJS
					}, {
						loader: "sass-loader" // compiles Sass to CSS
					}]
				}
			],
		},
		plugins: [
			// new webpack.Environment('NODE_ENV', 'USER')
		]
	}
};