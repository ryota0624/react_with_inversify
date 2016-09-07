module.exports = {
  entry: './src/main/app.js',
  output: {
    filename: './bundle/bundle.js.withOutTsloader'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.webpack.js', '.js']
  },
  module: {
    loaders: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { 
        test: /\.ts(x)?$/,
        loader: 'babel?presets[]=es2015!ts-loader',
        exclude: /node_modules/
      },{
        test: /\.js(x)?$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  }
}