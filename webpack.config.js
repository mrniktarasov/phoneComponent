const path = require('path');

const BUILD_PATH = path.resolve(__dirname, 'build');

module.exports = {
  entry: './src/app.js',
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  mode: 'development',
};
