var webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  context: __dirname,
  entry: "./src/index.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.js|.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-0'],
        plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      },
      {
      test: /\.jpe?g$|\.gif$|\.png$|\.svg$/,
      loader: "file?name=images/[name].[ext]",
      include: __dirname
      }, 
      { 
      test: /\.json$/, 
      loader: 'json'
      },
      {
      exclude: [
        /\.html$/, /\.(js|jsx)$/,/\.css$/,/\.scss$/,/\.json$/,/\.bmp$/,/\.gif$/,/\.jpe?g$/,/\.png$/,/\.ejs$/,
        ],
        loader: 'file-loader',
        options: {
        name: 'static/media/[name].[hash:8].[ext]',
      }, 
    }]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
  },

  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      mangle: false,
      sourcemap: false,
      minimize: true,
      mangle: { except: ['$super', '$', 'exports', 'require', '$q', '$ocLazyLoad'] },
    }),
    new ExtractTextPlugin('src/assets/stylesheets/app.css', {
      allChunks: true,
    }),
  ],
};
