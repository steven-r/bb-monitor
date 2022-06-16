// @nrwl/react + SVG
const webpackConfig = require('@nrwl/react/plugins/webpack');

module.exports = config => {
  config.module.rules.push(
    {
      test: /(\.woff2?)|(\.eot)|(\.ttf)$/,
      use: [
        'file-loader'
      ]
    }
  );
  return webpackConfig(config);
};