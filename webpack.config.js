const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const DEV = process.env.NODE_ENV==='development';
const host = 'localhost';

const config = {
  entry: './src/client',
  output: {
    path:'./public',
    filename: 'bundle.js'
  },
  devServer: {
    host: host,
    contentBase: 'public',
    historyApiFallback: {
      index: '/index.html'
    }
  },
  devtool: DEV ? 'inline-source-map' : 'source-map',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new webpack.NoErrorsPlugin()
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
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};

if(DEV){
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