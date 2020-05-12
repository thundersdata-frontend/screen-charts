import { CustomWindow } from '@/interfaces/common';

/**
 * @功能描述: 初始化自定义主题色/重新设定主题色
 * @参数: 无
 * @返回值: 无
 */
export const themeInit = () => {
  const theme = ((global as unknown) as CustomWindow).theme;
  let styleLink = document.getElementById('theme-style') as HTMLLinkElement;
  const body = document.getElementsByTagName('body')[0];
  if (styleLink) {
    // 假如存在id为theme-style 的link标签，直接修改其href
    if (theme) {
      styleLink.href = `/theme/${theme}.css`;
      body.className = `body-warp-${theme}`; // 切换自定义组件的主题
    }
  } else {
    // 不存在的话，则新建一个
    styleLink = document.createElement('link');
    styleLink.type = 'text/css';
    styleLink.rel = 'stylesheet';
    styleLink.id = 'theme-style';
    if (theme) {
      styleLink.href = `/theme/${theme}.css`;
      body.className = `body-warp-${theme}`; // 切换自定义组件的主题
    }
    document.body.append(styleLink);
  }
};
