const path = require('path'),
      webpack = require('webpack');

module.exports = {
  mode:'development',
  entry: ['./code/js/main.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js'
  }
};