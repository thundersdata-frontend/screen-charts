import orderBy from 'lodash/orderBy';

export type OrderType = 'desc' | 'asc';

export interface DeepOrderProps<T> {
  data: T[];
  childKey: string;
  orderKey: string;
  type: OrderType;
}

export interface ChartDataSourceItem {
  [value: string]: number | string;
}

export interface ChartMappingProps {
  xAxisName?: string;
  xAxisLabelName?: string;
  yAxisLeftName?: string;
  yAxisLeftLabelName?: string;
  yAxisRightName?: string;
  yAxisRightLabelName?: string;
  // 分组柱状图的图例名称
  sortTypeLegendNames?: [string, string];
  // 分组柱状图的数据名
  sortTypeValueNames?: [string, string];
}

export default {
  /**
   * 递归地将带children的数组展平
   */
  deepFlatten<T>(list: T[], key = 'children') {
    const result: T[] = [];
    const flatten = (arry: T[]) =>
      arry.forEach((item: T) => {
        const newItem = { ...item };
        delete newItem[key];
        result.push(newItem);
        if (item[key] && Array.isArray(item[key])) {
          flatten(item[key]);
        }
      }, []);
    flatten(list);
    return result;
  },

  /**
   * 根据某个字段 递归排序
   */
  deepOrder<T>(props: DeepOrderProps<T>) {
    const { data = [], childKey, orderKey, type = 'asc' } = props;
    const loopOrder = (params: DeepOrderProps<T>) => {
      const { data = [], childKey, orderKey, type = 'asc' } = params;
      return orderBy(data, orderKey, type).map((item: T) => {
        const children: T[] = item[childKey] || [];
        if (children && children.length > 0) {
          item[childKey] = loopOrder({
            data: children,
            childKey,
            orderKey,
            type,
          });
        }
        return item;
      });
    };
    return loopOrder({ data, childKey, orderKey, type });
  },
};

/**
 * @功能描述: 格式化混合图表数据
 * @参数:
 * @param dataSource 图表数据源
 * @param labelName 图表 label 数组:[左轴 label,右轴 label]
 * @param nameMapping x,y 轴 name 字段映射,不传默认 'time','value','count'
 * @返回值: 格式化后的图表 data 数组
 */
export const formatChartData = ({
  dataSource,
  mapping,
}: {
  dataSource: ChartDataSourceItem[];
  mapping: ChartMappingProps;
}) => {
  const {
    xAxisName = 'time',
    xAxisLabelName = 'time',
    yAxisLeftName = 'value',
    yAxisLeftLabelName = 'value',
    yAxisRightName = 'count',
    yAxisRightLabelName = 'count',
    sortTypeLegendNames,
    sortTypeValueNames,
  } = mapping || {};
  const formattedLeftData: ChartDataSourceItem[] = [];
  const formattedRightData: ChartDataSourceItem[] = [];

  dataSource?.forEach((item) => {
    // 非分组
    if (!sortTypeLegendNames || !sortTypeValueNames) {
      formattedLeftData.push({
        [xAxisLabelName]: item[xAxisName],
        [yAxisLeftLabelName]: item[yAxisLeftName],
      });
      formattedRightData.push({
        [xAxisLabelName]: item[xAxisName],
        [yAxisRightLabelName]: item[yAxisRightName],
      });
    } else {
      // 分组
      formattedLeftData.push({
        [xAxisLabelName]: item[xAxisName],
        type: sortTypeLegendNames[0],
        value: item[sortTypeValueNames[0]],
      });
      formattedLeftData.push({
        [xAxisLabelName]: item[xAxisName],
        type: sortTypeLegendNames[1],
        value: item[sortTypeValueNames[1]],
      });
      formattedRightData.push({
        [xAxisLabelName]: item[xAxisName],
        [yAxisRightLabelName]: item[yAxisRightName],
      });
    }
  });
  return [formattedLeftData, formattedRightData];
};
