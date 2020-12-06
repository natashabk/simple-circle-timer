const path = require( 'path' );

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join( __dirname, 'public' ),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx' ],
    alias: {
      react: require.resolve( 'react' ),
    },
  },
  externals: {
    react: 'react'
  }
};
