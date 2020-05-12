import 'normalize.css';
import 'dayjs/locale/zh-cn';
import '@/services';
import { CustomWindow } from './interfaces/common';

// 初始主题设置：dark | light
((global as unknown) as CustomWindow).theme = 'dark';
