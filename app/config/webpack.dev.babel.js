import config from './webpack.common.babel';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin'

config.plugins = [
  ...config.plugins,

  new HtmlWebpackPlugin({ template: './src/index.dev.tpl.html' }),

  new CopyWebpackPlugin([
    {from: './src/vendor', to: './vendor'}
  ])
];

export default {
  ...config,

  devtool: '#cheap-module-inline-source-map',

  devServer: {
    port: 8000,
    historyApiFallback: true,
    inline:   true,
    progress: true,
    proxy: {
      "/api": "http://localhost:8080"
    }
  }
};
