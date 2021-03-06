import React from 'react';
import {
  VictoryBar,
  VictoryArea,
  VictoryLine,
  VictoryScatter,
  VictoryPie,
  VictoryTheme,
  VictoryChart,
} from 'victory-native';
import * as d3Arr from 'd3-array';
import {View} from 'react-native';

const types = {
  AREA: VictoryArea,
  TIME: VictoryLine,
  LINE: VictoryLine,
  BAR: VictoryBar,
  SCATTER: VictoryScatter,
  PIE: VictoryPie,
};

let chartCount = 0;

class Chart extends React.PureComponent {
  constructor(props) {
    super(props);
    this.id = chartCount++;
  }

  render() {
    const {id, props} = this;
    const type = props.type.toUpperCase();
    const INNER_CHART = types[type];
    let {
      scale,
      data,
      domain,
      range,
      domainPadding = 10,
      animate,
      theme = 'grayscale',
      ...customProps
    } = props;

    if (typeof theme === 'string') {
      theme = VictoryTheme[theme];
    }

    if (props.equation) {
      const d = domain;
      data = d3Arr
        .range(d[0], d[1], (d[1] - d[0]) / props.samplePoints)
        .map((x) => {
          try {
            return {
              x: x,
              y: props.equation(x),
            };
          } catch (err) {
            return {
              x: x,
              y: 0,
            };
          }
        });
    }

    if (type === types.TIME) {
      scale = {x: 'time', y: 'linear'};
      data = data.map((d) => {
        return Object.assign({}, d, {
          x: new Date(d.x),
        });
      });
    }

    let formattedRange = {domain: {x: domain, y: range}};

    return (
      <View className={props.className}>
        {type !== 'PIE' ? (
          <VictoryChart
            domainPadding={domainPadding}
            {...formattedRange}
            animate={animate}
            scale={scale}
            containerId={`container-${id}`}
            clipId={`clip-${id}`}
            theme={theme}>
            <INNER_CHART data={data} x={props.x} y={props.y} {...customProps} />
          </VictoryChart>
        ) : (
          <INNER_CHART data={data} colorScale={props.colorScale} />
        )}
      </View>
    );
  }
}

Chart.defaultProps = {
  domain: [-1, 1],
  range: [-1, 1],
  domainPadding: 0,
  samplePoints: 100,
  type: 'line',
};

Chart._idyll = {
  name: 'Chart',
  tagType: 'closed',
  props: [
    {
      name: 'type',
      type: 'string',
      example: '"scatter"',
      defaultValue: "'line'",
      description:
        'The type of the chart to display, can be `line`, `scatter`, `bar`, `pie`, or `time`. The time type is a line chart that expects the `x` values in the data to be in the temporal domain.',
    },
    {
      name: 'data',
      type: 'array',
      example: '`[{x: 1, y: 1}, { x: 2, y: 2 }]`',
      description:
        'A JSON object containing the data for this chart. It uses the [victory](https://formidable.com/open-source/victory/docs) library to handle rendering, so see those docs for more information on what types of data can be passed in.',
    },
    {
      name: 'x',
      type: 'string',
      example: '"year"',
      defaultValue: '"x"',
      description: 'The data property to be used for the `x` dimension.',
    },
    {
      name: 'y',
      type: 'string',
      example: '"value"',
      defaultValue: '"y"',
      description: 'The data property to be used for the `y` dimension.',
    },
    {
      name: 'domain',
      type: 'array',
      example: '`[0, 1]`',
      defaultValue: '`[0, 1]`',
      description: 'The chart extent along the x dimension.',
    },
    {
      name: 'range',
      type: 'array',
      example: '`[0, 1]`',
      defaultValue: '`[0, 1]`',
      description: 'The chart extent along the y dimension.',
    },
    {
      name: 'theme',
      type: 'string',
      example: "'material'",
      defaultValue: "'grayscale'",
      description:
        'The theme to use, e.g. `grayscale` or `material` or a custom object (see [an example here](https://github.com/FormidableLabs/victory/blob/master/packages/victory-core/src/victory-theme/grayscale.js))',
    },
  ],
};

export default Chart;
