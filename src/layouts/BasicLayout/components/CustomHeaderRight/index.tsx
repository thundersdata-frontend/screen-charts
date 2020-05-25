import React from 'react';
import { Button } from 'antd';
import { CustomWindow } from '@/interfaces/common';
import { themeInit } from '@/theme';
import styles from './index.module.less';

export default function CustomHeaderRight(/** props: HeaderViewProps */) {
  // 切换主题
  const switchTheme = () => {
    const { theme } = ((global as unknown) as CustomWindow).chartConfig;
    themeInit(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <div style={{ padding: '0 24px' }}>
      <Button className={styles.switchButton} onClick={switchTheme}>
        切换主题
      </Button>
    </div>
  );
}
