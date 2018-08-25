// Webpack v4
module.exports = function (env, argv) {
  const NODE_ENV = env && env.production || 'development';
  return {
    entry: { main: './src/home' },
    output: {
      filename: 'main.js',
      library: 'global'
    },

    watch: NODE_ENV === 'development',
    mode: NODE_ENV === 'development' ? 'development' : 'production',
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
    }
  }
}
