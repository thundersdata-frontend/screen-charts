declare module '*.css';
declare module '*.less';
declare module '*.png';

declare module 'antd-dayjs-webpack-plugin';

type Merge<M, N> = Omit<M, Extract<keyof M, keyof N>> & N;
