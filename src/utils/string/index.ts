type valueType = object | number | string;

export default {
  /**
   * 为小于10的数字在前面补零。如9补零后为09
   * @param val
   */
  fillZero(val: number | string) {
    if (typeof val === 'number' && val >= 10) {
      return val;
    }
    return `0${val}`;
  },

  /**
   * 用于字符长度超过指定个数自动截取并添加...
   */
  textEllipsis(text: string, length: number) {
    if (text.length > length && length > 0) {
      return `${text.substring(0, length)}...`;
    }
    return text;
  },

  /**
   * 获取指定分隔符点后面的最后字符串
   * @param (sourceStr splitStr) 源字符串 裁剪字符节点
   * @returns {string} 最后一个裁剪字符后面的字符串
   */
  getLastSubstring(sourceStr = '', splitStr = '') {
    return sourceStr.substring(
      sourceStr.lastIndexOf(splitStr) + splitStr.length,
      sourceStr.length,
    );
  },

  /**
   * 值格式化为string
   * @param value
   */
  valueToString(value: valueType | valueType[]) {
    if (typeof value === 'string') {
      return value;
    }
    return JSON.stringify(value);
  },

  /**
   * @功能描述: 复制文本
   * @参数: text 复制对象的内容
   * @返回值:
   */
  copyText(text: string) {
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.setAttribute('value', text);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
  },

  /**
   * @功能描述: 获得url中的传参
   * @参数: name(指定项的key值)
   * @返回值: 若有name，则返回指定项的value，若没有name则返回一个query的json
   */
  getUrlQuery(name?: string) {
    let after = window.location.search || window.location.hash;
    after = after ? after.split('?')[1] : '';
    const query = {};
    const strs = after ? after.split('&') : [];
    for (let i = 0; i < strs.length; i += 1) {
      const keyValueMaps = strs[i] ? strs[i].split('=') : [];
      if (keyValueMaps.length === 2) {
        query[keyValueMaps[0]] = decodeURIComponent(keyValueMaps[1]);
      } else if (keyValueMaps[0]) {
        query[keyValueMaps[0]] = null;
      }
    }

    if (name && typeof name !== 'object') {
      return query[name];
    }

    return query;
  },
};
