module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    'tsconfig-paths-module-resolver',
    'babel-plugin-transform-typescript-metadata',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    [
      'module-resolver',
      {
        alias: {
          '@config/*': './src/config/*',
          '@controllers/*': './src/controllers/*',
          '@database/*': './src/database/*',
          '@helpers/*': './src/helpers/*',
          '@integrations/*': './src/integrations/*',
          '@jobs/*': './src/jobs/*',
          '@middlewares/*': './src/middlewares/*',
          '@routes/*': './src/routes/*',
          '@services/*': './src/services/*',
        },
      },
    ],
  ],
  ignore: ['**/*.spec.ts'],
};
