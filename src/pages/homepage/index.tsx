import React from 'react';
import ChartDom from './components/ChartDom';
import {
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
} from './generate';
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
} from './data';

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
              stackField: 'type',
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
            data: 50,
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
              radiusField: 'value',
              categoryField: 'category',
              stackField: 'type',
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
              radiusField: 'value',
              categoryField: 'category',
              stackField: 'type',
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
              angleField: 'item',
              radiusField: 'score',
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
              stackField: 'type',
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
              yPrefixName: '条件',
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
        title="极坐标下的柱状图"
        className={styles.pieBlock}
        getDom={(dom) =>
          createRadialStackPlot({
            dom,
            data: radialStackData,
            config: {
              colorField: 'type',
              angleField: 'value',
            },
          })
        }
      />
    </div>
  );
};
export default Homepage;
