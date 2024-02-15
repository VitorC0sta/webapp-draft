import { useEffect } from "react";
import { Container } from "./styles";
import * as echarts from "echarts";
import theme from "../../../../styles/theme";

export function PieChart() {
  useEffect(() => {
    const chart = echarts.init(document.getElementById("piechart-container"));

    const data = [
      {
        value: 1048,
        name: "Sonolência",
        itemStyle: { color: theme.COLORS.RED_500 },
      },
      {
        value: 735,
        name: "Cinto de Segurança",
        itemStyle: { color: theme.COLORS.GREEN_700 },
      },
      {
        value: 300,
        name: "Bêbado",
        itemStyle: { color: theme.COLORS.BLUE_700 },
      },
      {
        value: 484,
        name: "Condução Perigosa",
        itemStyle: { color: theme.COLORS.YELLOW_700 },
      },
    ];

    const totalValue = data.reduce((total, item) => total + item.value, 0);

    const chartOption = {
      tooltip: {
        trigger: "item",
      },
      grid: {},
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["40%", "70%"],
          center: ["50%", "70%"],
          startAngle: 180,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2,
          },
          label: {
            show: true,
            formatter(param) {
              return " (" + param.percent * 2 + "%)";
            },
          },
          data: [
            ...data,
            {
              value: totalValue,
              itemStyle: {
                color: "none",
                decal: {
                  symbol: "none",
                },
              },
              label: {
                show: false,
              },
            },
          ],
        },
      ],
    };

    chart.setOption(chartOption);

    return () => {
      chart.dispose();
    };
  });

  return <Container id="piechart-container" />;
}
