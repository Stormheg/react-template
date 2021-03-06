const path = require('path');

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    publicPath: '/',
    historyApiFallback: true,
    contentBase: path.resolve(process.cwd(), 'dist/'),
    compress: true,
    port: 8080,
    stats: 'errors-warnings',
  },
});
