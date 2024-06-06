import path from 'path';

module.exports = function override(config, env) {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@components': path.resolve(__dirname, 'src/components'),
    '@shared': path.resolve(__dirname, 'src/components/shared'),
    '@routes': path.resolve(__dirname, 'src/routes'),
    // '@context': path.resolve(__dirname, 'src/context'),
    '@src': path.resolve(__dirname, 'src'),
    '@assets': path.resolve(__dirname, 'src/assets'),
    // '@helpers': path.resolve(__dirname, 'src/helpers'),
    // '@hooks': path.resolve(__dirname, 'src/hooks'),
    '@services': path.resolve(__dirname, 'src/services'),
    // '@localization': path.resolve(__dirname, 'src/localization'),
    // '@models': path.resolve(__dirname, 'src/models'),
    // '@scss': path.resolve(__dirname, 'src/scss'),
    // '@types': path.resolve(__dirname, 'src/types'),
    
  };
  return config;
};
