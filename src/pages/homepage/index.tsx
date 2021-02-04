import React from 'react';
import {
  ChartDom,
  createLinePlot,
  createColumnPlot,
  createGroupColumnPlot,
  createDonutPlot,
  createStackColumnPlot,
  createRangeColumnPlot,
  createWaterfallPlot,
  createLiquidPlot,
  createDonutRosePlot,
  createCustomBarPlot,
  createStackRosePlot,
  createRadarPlot,
  createStackAreaPlot,
  createScatterPlot,
  createCustomRangeBarPlot,
  createCustomGroupedBarPlot,
  createRadialStackPlot,
  createDualLinePlot,
  createGroupedColumnLinePlot,
  createColumnLinePlot,
} from '@td-design/charts';
import styles from './index.module.less';
import {
  data1,
  data2,
  pieData,
  roseData,
  radarData,
  groupedBarData,
  radialStackData,
  scatterData,
  comboData,
  groupedComboData,
} from './data';
import { formatChartData } from '@/utils/array';

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <ChartDom
        title="普通折线图示例"
        className={styles.block}
        getDom={(dom) =>
          createLinePlot({
            dom,
            data: data1,
            config: { xField: 'date', yField: 'value', seriesField: 'type' },
          })
        }
      />
      <ChartDom
        title="普通柱状图示例"
        className={styles.block}
        getDom={(dom) =>
          createColumnPlot({
            dom,
            data: data1,
            config: {
              xField: 'date',
              yField: 'value',
            },
          })
        }
      />
      <ChartDom
        title="分组柱状图示例"
        className={styles.block}
        getDom={(dom) =>
          createGroupColumnPlot({
            dom,
            data: data1,
            config: {
              xField: 'date',
              yField: 'value',
              groupField: 'type',
            },
          })
        }
      />
      <ChartDom
        title="堆叠柱状图示例"
        className={styles.block}
        getDom={(dom) =>
          createStackColumnPlot({
            dom,
            data: data1,
            config: {
              xField: 'date',
              yField: 'value',
              seriesField: 'type',
            },
          })
        }
      />
      <ChartDom
        title="环形图示例"
        className={styles.pieBlock}
        getDom={(dom) =>
          createDonutPlot({
            dom,
            data: pieData,
            config: {
              angleField: 'value',
              colorField: 'type',
            },
          })
        }
      />
      <ChartDom
        title="单例环形图示例"
        className={styles.pieBlock}
        getDom={(dom) =>
          createDonutPlot({
            dom,
            data: 26,
            config: {
              isSingle: true,
              titleName: '图例1',
            },
          })
        }
      />
      <ChartDom
        title="区间柱状图示例"
        className={styles.block}
        getDom={(dom) =>
          createRangeColumnPlot({
            dom,
            data: data2,
            config: {
              xField: 'type',
              yField: 'values',
            },
          })
        }
      />
      <ChartDom
        title="瀑布图示例"
        className={styles.block}
        getDom={(dom) =>
          createWaterfallPlot({
            dom,
            data: data1,
            config: {
              xField: 'date',
              yField: 'value',
            },
          })
        }
      />
      <ChartDom
        title="注水图示例"
        className={styles.pieBlock}
        getDom={(dom) =>
          createLiquidPlot({
            dom,
            data: 0.5,
          })
        }
      />
      <ChartDom
        title="玫瑰图示例"
        className={styles.roseBlock}
        getDom={(dom) =>
          createDonutRosePlot({
            dom,
            data: pieData,
            config: {
              layout: 'half',
              colorField: 'type',
              radiusField: 'value',
            },
          })
        }
      />
      <ChartDom
        title="玫瑰图-螺旋堆叠"
        className={styles.roseBlock}
        getDom={(dom) =>
          createStackRosePlot({
            dom,
            data: roseData,
            config: {
              xField: 'category',
              yField: 'value',
              seriesField: 'type',
              isSpiral: true,
            },
          })
        }
      />
      <ChartDom
        title="南丁格尔玫瑰图-堆叠"
        className={styles.roseBlock}
        getDom={(dom) =>
          createStackRosePlot({
            dom,
            data: roseData,
            config: {
              yField: 'value',
              xField: 'category',
              seriesField: 'type',
            },
          })
        }
      />
      <ChartDom
        title="基础条形图示例"
        className={styles.roseBlock}
        getDom={(dom) =>
          createCustomBarPlot({
            dom,
            data: pieData,
            config: {
              xField: 'type',
              yField: 'value',
            },
          })
        }
      />
      <ChartDom
        title="雷达图"
        className={styles.roseBlock}
        getDom={(dom) =>
          createRadarPlot({
            dom,
            data: radarData,
            config: {
              xField: 'item',
              yField: 'score',
              seriesField: 'user',
            },
          })
        }
      />
      <ChartDom
        title="面积图示例"
        className={styles.block}
        getDom={(dom) =>
          createStackAreaPlot({
            dom,
            data: data1,
            config: {
              xField: 'date',
              yField: 'value',
              seriesField: 'type',
            },
          })
        }
      />
      <ChartDom
        title="区间条形图示例"
        className={styles.block}
        getDom={(dom) =>
          createCustomRangeBarPlot({
            dom,
            data: data2,
            config: {
              xField: 'type',
              yField: 'values',
            },
          })
        }
      />
      <ChartDom
        title="单象限散点图示例"
        className={styles.scatterBlock}
        getDom={(dom) =>
          createScatterPlot({
            dom,
            data: scatterData,
            config: {
              xField: 'date',
              yField: 'type',
              sizeField: 'value',
              yNameFormatter: (name: number) => `条件${name}`,
            },
          })
        }
      />
      <ChartDom
        title="分组条形图示例"
        className={styles.block}
        getDom={(dom) =>
          createCustomGroupedBarPlot({
            dom,
            data: groupedBarData,
            config: {
              xField: 'country',
              yField: 'value',
              groupField: 'type',
            },
          })
        }
      />
      <ChartDom
        title="玉珏图"
        className={styles.pieBlock}
        getDom={(dom) =>
          createRadialStackPlot({
            dom,
            data: radialStackData,
            config: {
              padding: [0, 0, 70, 0],
              xField: 'type',
              yField: 'value',
              maxAngle: 350,
              radius: 0.8,
              innerRadius: 0.2,
              tooltip: {
                formatter: (datum: Record<string, any>) => {
                  return { name: 'star数', value: datum.value };
                },
              },
              barBackground: {},
              barStyle: { lineCap: 'round' },
            },
          })
        }
      />
      <ChartDom
        title="双线图"
        className={styles.block}
        getDom={(dom: HTMLElement) =>
          createDualLinePlot({
            dom,
            data: formatChartData({
              dataSource: comboData,
              mapping: {
                yAxisLeftLabelName: '价格',
                yAxisRightLabelName: '个数',
              },
            }),
            config: {
              xField: 'time',
              yField: ['价格', '个数'],
            },
          })
        }
      />
      <ChartDom
        title="柱状图+折线图"
        className={styles.block}
        getDom={(dom: HTMLElement) =>
          createColumnLinePlot({
            dom,
            data: formatChartData({
              dataSource: comboData,
              mapping: {
                yAxisLeftLabelName: '价格',
                yAxisRightLabelName: '个数',
              },
            }),
            config: {
              xField: 'time',
              yField: ['价格', '个数'],
              geometryOptions: [
                {
                  geometry: 'column',
                },
                {
                  geometry: 'line',
                  lineStyle: {
                    lineWidth: 2,
                  },
                },
              ],
            },
          })
        }
      />
      <ChartDom
        title="分组柱状图+折线图"
        className={styles.block}
        getDom={(dom: HTMLElement) =>
          createGroupedColumnLinePlot({
            dom,
            data: formatChartData({
              dataSource: groupedComboData,
              mapping: {
                yAxisLeftLabelName: '价格',
                yAxisRightLabelName: '个数',
                yAxisLeftName: 'uvValue',
                yAxisRightName: 'billValue',
                sortTypeLegendNames: ['uv', 'bill'],
                sortTypeValueNames: ['uvValue', 'billValue'],
              },
            }),
            config: {
              xField: 'time',
              yField: ['value', '个数'],
              geometryOptions: [
                {
                  geometry: 'column',
                  isGroup: true,
                  seriesField: 'type',
                },
                {
                  geometry: 'line',
                  lineStyle: {
                    lineWidth: 2,
                  },
                },
              ],
            },
          })
        }
      />
    </div>
  );
};
export default Homepage;
