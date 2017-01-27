const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const __DEV__= process.env.NODE_ENV==='development';
const host = 'localhost';

const VENDOR_LIBS = [
  'react', 'react-dom', 'redux', 'react-redux'
];

const config = {
  entry: {
    bundle: './src/client',
    vendor: VENDOR_LIBS
  },
  output: {
    path:'./public',
    filename: '[name].js'
  },
  devServer: {
    host: host,
    contentBase: 'public',
    historyApiFallback: {
      index: '/index.html'
    }
  },
  devtool: __DEV__? 'inline-source-map' : 'source-map',
  plugins: [
    new ExtractTextPlugin("style.css"),
    new webpack.NoErrorsPlugin(),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new HtmlWebpackPlugin({
      template: 'src/client/index.html'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: [] },
        babelrc: true
      },
      {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract("style", "css!sass"),
      }
    ]
  }
};

if(__DEV__){
  config.module.loaders[0].query.presets.push('react-hmre');
  config.plugins.push(
    new OpenBrowserPlugin({ url: `http://${host}:8080` })
  )
} else {
  config.plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      mangle: false,
      compressor: {
        drop_console: true,
        warnings: true
      }
    })
  );
}

module.exports = config;