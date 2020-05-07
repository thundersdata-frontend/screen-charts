module.exports = {
  presets: ['@babel/preset-typescript'],
  plugins: [
    [
      'import',
      {
        libraryName: '@td-design/charts',
        customName: (name) => {
          if (name.indexOf('create') > -1) {
            return `@td-design/charts/es/utils/${name}`;
          }
          return `@td-design/charts/es/components/${name}`;
        },
        style: (name) => {
          if (name.indexOf('create') > -1) {
            return false;
          }
          return `${name}/style/index`;
        },
      },
    ],
  ],
};
