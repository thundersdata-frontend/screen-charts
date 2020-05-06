/*
 * @文件描述: 水波图
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-04-27 14:53:56
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-04-29 15:19:20
 */
import { Liquid, LiquidConfig } from '@antv/g2plot';
import { PlotCreateProps, basePieConfig } from './config';

type LiquidPlotCreateProps = Merge<
  PlotCreateProps<Partial<LiquidConfig>>,
  { data: number }
>;

const createLiquidPlot = ({ dom, data, config }: LiquidPlotCreateProps) => {
  const liquidPlot = new Liquid(dom, {
    ...basePieConfig,
    color: '#10ADF9',
    min: 0,
    max: 100,
    value: data,
    liquidStyle: {
      stroke: '#00BBFF',
    },
    statistic: {
      adjustColor: false,
      style: {
        fill: 'white',
        fontSize: 24,
      },
      formatter: (value) => value + '%',
    },
    ...config,
  });
  liquidPlot.render();
};
export default createLiquidPlot;
