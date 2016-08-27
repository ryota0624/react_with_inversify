module.exports = {
  entry: './src/main/app.ts',
  output: {
    filename: './bundle/bundle.js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.webpack.js', '.ts', '.tsx', '.js']
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
        loader: 'babel?presets[]=es2015',
        exclude: /node_modules/
      }
    ]
  }
}