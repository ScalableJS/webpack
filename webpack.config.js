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
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader'
        }
      ]
    }
  }
}
