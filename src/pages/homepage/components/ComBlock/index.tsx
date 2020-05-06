/*
 * @文件描述: 组件显示的载体 加入边框等样式
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2019-09-09 13:50:09
 * @LastEditors  : 廖军
 * @LastEditTime : 2020-02-14 15:28:08
 */
import React, { CSSProperties } from 'react';
import classnames from 'classnames';
import normal from './normal.module.less';
import hazy from './hazy.module.less';

export interface ComBlockProps {
  className?: string;
  styleType?: 'normal' | 'hazy'; // 风格类型
  style?: CSSProperties;
  contentClassName?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const stylesObject = {
  normal,
  hazy,
};

const ComBlock: React.FC<ComBlockProps> = props => {
  const { className, styleType = 'normal', style = {}, contentClassName, onClick } = props;
  const styles = stylesObject[styleType];

  return (
    <div style={style} className={classnames(styles.comBlock, className)} onClick={onClick}>
      <div className={styles['lt-border']} />
      <div className={styles['lr-border']} />
      <div className={styles['lb-border']} />
      <div className={styles['rb-border']} />
      <div className={classnames(styles['content'], contentClassName)}>{props.children}</div>
    </div>
  );
};

export default ComBlock;
