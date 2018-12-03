module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.(js|jsx)$/,
    loader: require.resolve('babel-loader'),
  });
  defaultConfig.resolve.extensions.push('.js', '.jsx');
  return defaultConfig;
};
