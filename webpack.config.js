module.exports = {
  entry: './src/babel/app.js',
  output: {
    filename: './bundle/bundle.js.withOutTsloaderBabel'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.webpack.js', '.js', '.jsx']
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