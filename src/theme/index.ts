import { CustomWindow } from '@/interfaces/common';
import string from '@/utils/string';

/**
 * @功能描述: 跳转到修改/添加某参数后格式化过的url
 * @参数: @param paramName 参数名,@param paramValue 参数值
 * @返回值: void
 */
const getFormatedUrl = (paramName: string, paramValue: string) => {
  const params = string.getUrlQuery();
  const { origin, pathname } = window.location;
  let newUrl = `${origin}${pathname}?`;
  // 除了paramName之外的参数数组
  const otherParamsKeys = Object.keys(params).filter(
    (item) => item !== paramName,
  );
  otherParamsKeys.forEach((item, idx) => {
    newUrl = newUrl.concat(`${idx !== 0 ? '&' : ''}${item}=${params[item]}`);
  });
  const formatedUrl = `${newUrl}${
    otherParamsKeys.length > 0 ? '&' : ''
  }${paramName}=${paramValue}`;
  window.location.href = formatedUrl;
};

/**
 * @功能描述: 初始化自定义主题色/重新设定主题色
 * @参数: 如果需要修改主题可传入主题theme，否则可不传
 * @返回值: 无
 */
export const themeInit = (customTheme?: string) => {
  let { theme } = (global as unknown) as CustomWindow;
  let styleLink = document.getElementById('theme-style') as HTMLLinkElement;
  const body = document.getElementsByTagName('body')[0];
  const newTheme = customTheme || string.getUrlQuery('theme');
  if (newTheme) {
    ((global as unknown) as CustomWindow).theme = newTheme;
    // 如果地址存在theme参数，使用该theme
    theme = newTheme;
    if (customTheme) {
      getFormatedUrl('theme', theme);
    }
  } else {
    // 如果地址不存在theme参数，添加theme
    getFormatedUrl('theme', theme);
  }

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
