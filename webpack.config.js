const path = require('path');
const webpack = require('webpack');
module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './scripts/main.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist/assets'),
    publicPath: '/assets'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src') // New
  },
  module: {
    rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        options: { presets: ['es2015'] },
        exclude: [/node_modules/]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.png$/,
        use: { loader: 'url-loader', options: { limit: 100000 } },
      },
      {
        test: /\.jpg$/,
        use: ['file-loader']
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/octet-stream"
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader"
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml"
      }
    ]
  },
  plugins: [new webpack.optimize.CommonsChunkPlugin({
    name: 'commons',
    filename: 'commons.js',
    minChunks: 2
  }), new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    Tether: 'tether'
  })]
};
