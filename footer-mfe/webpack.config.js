const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    port: 3003, // Port du Footer
  },
  output: {
    publicPath: 'http://localhost:3003/', // Public path pour le Footer
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Gérer les fichiers JS et JSX
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'footer',
      filename: 'remoteEntry.js',
      exposes: {
        './Footer': './src/Footer', // Expose le Footer
      },
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
