const path = require('path');
const config = require('./config');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const host = 'localhost';
const __DEV__= config.env==='development';

const webpackConfig = {
  entry: {
    bundle: path.join(config.path.src, 'index.js'),
    vendor: config.VENDOR_LIBS
  },
  output: {
    path: config.path.dist,
    filename: '[name].[chunkhash].js'
  },
  devtool: __DEV__? 'inline-source-map' : 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader!sass-loader'
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: path.join(config.path.src, 'index.html')
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(config.env)
    })
  ]
};

if(__DEV__){
  webpackConfig.module.rules[0].query = { presets: ['react-hmre'] };
  webpackConfig.plugins.push(
    new OpenBrowserPlugin({ url: `http://${host}:8080` })
  )
} else {
  webpackConfig.plugins.push(
    new OptimizeCssAssetsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comments: false,
      compress: {
        warnings: false,
        drop_console: true
      },
      mangle: {
        except: ['webpackJsonp'],
        screw_ie8 : true,
        keep_fnames: true,
      }
    })
  )
}

module.exports = webpackConfig;