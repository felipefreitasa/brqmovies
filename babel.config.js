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
            '@services': './src/services',
            '@components': './src/components',
          }
        }
      ],
      [
        'module:react-native-dotenv',
        {
          'moduleName': '@env',
          'allowUndefined': false
        }
      ]
    ]
  };
};