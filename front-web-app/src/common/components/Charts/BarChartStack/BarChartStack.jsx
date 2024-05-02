import ReactEcharts from 'echarts-for-react';


export function BarChartStack({ legends, data, isDataZoom = false, dataZoom, ...rest }) {
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
            },
        },
        legend: {
            type: 'scroll',
        },
        dataZoom: isDataZoom
            ? [
                  {
                      type: 'slider',
                      start: dataZoom?.start || 0,
                      end: dataZoom?.end || 100,
                  },
              ]
            : undefined,
        grid: {
            left: '2%',
            right: '2%',
            bottom: isDataZoom ? '15%' : '3%',
            containLabel: true,
        },
        xAxis: [
            {
                type: 'category',
                data: legends,
            },
        ],
        yAxis: [
            {
                type: 'value',
            },
        ],
        series: data.map(d => {
            return {
                type: 'bar',
                stack: 'total',
                data: d.data,
                name: d.name,
                itemStyle: {
                    color: d.color,
                },
            };
        }),
    };

    return <ReactEcharts notMerge={true} option={option} style={{ width: '100%', height: '100%' }} {...rest} />;
}