/*
 * @文件描述: 大屏卡片组件
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2019-09-18 15:47:00
 * @LastEditors  : 廖军
 * @LastEditTime : 2020-02-07 13:45:06
 */
import React, { CSSProperties } from 'react';
import styles from './index.module.less';
import classnames from 'classnames';

interface ComCardProps {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  extra?: string | React.ReactNode;
  className?: string;
  mode?: 'default' | 'shineWayPurchase';
  headerStyle?: CSSProperties;
  titleStyle?: CSSProperties;
}

const ComCard: React.FC<ComCardProps> = props => {
  const {
    title,
    subtitle,
    extra,
    className = '',
    mode = 'default',
    headerStyle = {},
    titleStyle = {},
  } = props;

  const subtitleDom = subtitle ? <span className={styles.subtitle}>{subtitle}</span> : null;
  const extraDom = extra ? <span className={styles.extra}>{extra}</span> : null;

  return (
    <div className={classnames(styles['container'], className)}>
      <div className={styles['header']} style={headerStyle}>
        <span className={styles[mode]} style={titleStyle}>
          {title}
        </span>
        {subtitleDom}
        {extraDom}
      </div>
      <div className={styles['content']}>{props.children}</div>
    </div>
  );
};

export default ComCard;
