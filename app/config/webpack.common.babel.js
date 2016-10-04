import path from 'path';
import webpack from 'webpack';
import ExtractPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const include = [path.resolve(process.cwd(), './src')];

const vendors = {
  $: 'jquery',
  _: 'lodash',
  curl: 'curl',
  Backbone: 'backbone'
};

const config = {
  entry: {
    app: './src/app.js'
  },

  output: {
    path: '../src/main/resources/static/',
    filename: '[name].js',
    // sourceMapFilename: 'maps/[file].map'
  },

  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'source-map-loader'
    }],

    loaders: [{
      test: /\.js$/,
      include,
      loader: 'babel',
      query: {
        presets: [
          'stage-0',
          'es2015'
        ],
        plugins: [
          'add-module-exports',
          'transform-class-properties'
        ]
      }
    }, {
      test: /\.css/,
      include: include,
      exclude: /node_modules/, // comment exclusion out if you are using `import bootstrap/**/*.css`
      loader: ExtractPlugin.extract('style', 'css?importloader=1', 'postcss')
    }, {
      test: /\.styl/,
      include: include,
      loader: ExtractPlugin.extract('style', 'css!postcss!stylus?sourceMap')
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      // include: bsInclude,
      exclude: /node_modules/,
      loader: 'file'
    }, {
      test: /\.(woff|woff2)$/,
      // include: bsInclude,
      exclude: /node_modules/,
      loader:'url?prefix=font/&limit=1024'
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      // include: bsInclude,
      exclude: /node_modules/,
      loader: 'url?limit=1024&mimetype=application/octet-stream'
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      // include: bsInclude,
      exclude: /node_modules/,
      loader: 'url?limit=1024&mimetype=image/svg+xml'
    }]
  },

  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules']
  },

  plugins: [
    new ExtractPlugin('[name].css', { allChunks: true }),
    new webpack.ProvidePlugin(vendors)
  ],

  postcss: [
    autoprefixer,
    cssnano
  ],

  externals: vendors,

  node:{
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};

export default config;
