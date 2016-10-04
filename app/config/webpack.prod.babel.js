import config from './webpack.common.babel';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin'

config.devtool = '#source-map';

config.plugins = [
  ...config.plugins,

  new HtmlWebpackPlugin({ template: './src/index.prod.tpl.html' }),

  new CopyWebpackPlugin([
    // jquery
    {from: './src/vendor/jquery/dist/jquery.min.js'           , to: './vendor/jquery/dist/'},
    // bootstrap
    {from: './src/vendor/bootstrap/dist/js/bootstrap.min.js'  , to: './vendor/bootstrap/dist/js/'},
    {from: './src/vendor/bootstrap/dist/css/bootstrap.min.css', to: './vendor/bootstrap/dist/css/'},
    {from: './src/vendor/bootstrap/dist/fonts'                , to: './vendor/bootstrap/dist/fonts/'},
    // curl
    {from: './src/vendor/curl/dist/curl/curl.js'              , to: './vendor/curl/dist/curl/'},
    // lodash
    {from: './src/vendor/lodash/dist/lodash.min.js'           , to: './vendor/lodash/dist/'},
    // backbone
    {from: './src/vendor/backbone/backbone-min.js'            , to: './vendor/backbone/'}
  ]),

  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  })
];

export default config;
