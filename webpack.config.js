// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');

const isProduction = process.env.NODE_ENV == 'production';

const config = {
  module: {
    rules: [
      {
        test: /\.graphql$/,
        exclude: /node_modules/,
        use: [{ loader: 'graphql-let/loader' }],
      },
      {
        test: /\.graphqls$/,
        exclude: /node_modules/,
        use: ['graphql-let/schema/loader'],
      },
      {
        test: /\.ya?ml$/,
        type: 'json',
        use: 'yaml-loader',
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }
  return config;
};
