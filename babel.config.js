module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: [ './src'],
          alias: {
            '@hooks': './src/hooks',
            '@assets': './src/assets',
            '@screens': './src/screens',
            '@context': './src/context',
            '@components': './src/components',
          }
        }
      ]
    ]
  };
};