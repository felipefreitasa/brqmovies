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
            '@theme': './src/theme',
            '@utils': './src/utils',
            '@assets': './src/assets',
            '@routes': './src/routes',
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