const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = function override(config) {
  // do stuff with the webpack config...
  config.plugins.push(new NodePolyfillPlugin());

  config.module.rules = config.module.rules.map((rule) => {
    if (rule.oneOf instanceof Array) {
      rule.oneOf[rule.oneOf.length - 1].exclude = [/\.(js|mjs|jsx|cjs|ts|tsx)$/, /\.html$/, /\.json$/];
    }
    return rule;
  });

  return {
    ...config,
    ignoreWarnings: [
      {
		    // Ignore 'failed to parse source map' warnings
        module: /node_modules\/(moralis|@moralisweb3)/,
      },
    ],
  }
}