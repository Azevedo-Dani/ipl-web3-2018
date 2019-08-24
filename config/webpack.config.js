const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const outputDirectory = 'dist';
const projectRoot = path.resolve(__dirname, '..');

function buildConfig(env, argv) {
  const isDevelopment = (argv.mode === 'development');
  return {
    name: 'base',
    context: projectRoot,
    entry: {
      application: './src/client/entries/application.js'
    },
    output: {
      path: path.join(projectRoot, outputDirectory),
      publicPath: isDevelopment ? '//localhost:3000/' : '/',
      filename: isDevelopment ? '[name].js' :  '[name]-[hash].js',
      chunkFilename: isDevelopment ? '[name].chunk.js' : '[name]-[hash].chunk.js',

    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          loader: 'url-loader?limit=100000'
        }
      ]
    },
    devtool: 'inline-source-map',
    devServer: {
      hot: true,
      port: 3000
    },
    plugins: [
      new CleanWebpackPlugin([outputDirectory]), 
      new webpack.HotModuleReplacementPlugin(),
      new ManifestPlugin()
    ]
  };
}

module.exports = buildConfig
