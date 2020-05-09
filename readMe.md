# 大屏组件库Demo

## 概要

本示例为结合`@td-design/charts`组件库的图表使用实例，需要先安装`@td-design/charts`依赖。

## 用babel-plugin-import引入@td-design/charts组件样式

需要在项目根目录下`babel.config.js`文件中加入以下配置：

```js
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
          return true;
        },
      },
    ],
  ],
```