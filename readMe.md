# 大屏组件库 Demo

## 概要

本示例为结合`@td-design/charts`组件库的图表使用实例，需要先安装`@td-design/charts`依赖。

## 用 babel-plugin-import 引入@td-design/charts 组件样式

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

## 使用主题配置功能

### 步骤一：安装环境

安装最新版 `umi-plugin-antd-theme`，

### 步骤二：基础配置

在项目 config 文件夹下新建 theme.config.json 文件，然后加入以下配置：

```json
{
  "theme": [
    {
      "theme": "dark",
      "fileName": "dark.css",
      "modifyVars": {
        "@blue-screen-bg": "#090b2c"
      }
    },
    {
      "theme": "light",
      "fileName": "light.css",
      "modifyVars": {
        "@blue-screen-bg": "#fff"
      }
    }
  ],
  // 是否压缩css
  "min": true,
  // css module
  "isModule": true,
  // 忽略 antd 的依赖
  "ignoreAntd": false,
  // 忽略 pro-layout
  "ignoreProLayout": false,
  // 使用缓存
  "cache": true,
  // 引入外库less文件
  "extraLibraries": ["@td-design/charts"]
}
```

theme 下的 modifyVars 下默认可配置 antd 的自带样式变量如：@primary-color 等。

其中 `extraLibraries` 项目加入组件库名称后可以引入其他库的样式，并且添加组件库中定义的 less 变量到 modifyVars 下，可实现对该变量的主题色自定义配置，就可以实现组件库主题样式的统一配置。

### 步骤三：项目中使用经过主题色配置的变量

在 src/styles 文件夹下 default.less 下添加该变量的默认配置。如：

```less
@blue-screen-bg: #fff;
```

在项目的样式文件`xxx.module.less`中使用该颜色变量，并从 default.less 文件中引入。`antd-pro-merge-less`会自动将该组件库中处理过的样式整合入`/theme/xxx.css`下，缓存在 node_modules/.plugin-theme 下就可以实现自定义主题色配置了。
