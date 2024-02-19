import { Container } from "./styles";
import { useEffect } from "react";
import * as echarts from "echarts";

export function StackBarChart() {
  useEffect(() => {
    const chart = echarts.init(document.getElementById("stackbarchart-container"));

    const chartOptions = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {},
      grid: {
        left: "10rem",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"],
      },
      yAxis: {
        type: "log",
        show: false,
      },
      series: [
        {
          name: "Veículos",
          type: "bar",
          stack: "total",
          label: {
            show: true,
          },
          emphasis: {
            focus: "series",
          },
          itemStyle: { color: "#A2CDF0" },
          data: [320, 302, 301, 334, 390, 330, 320],
        },
        {
          name: "Clientes",
          type: "bar",
          stack: "total",
          label: {
            show: true,
          },
          emphasis: {
            focus: "series",
          },
          itemStyle: { color: "#2E2E2E" },
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: "Operações",
          type: "bar",
          stack: "total",
          label: {
            show: true,
          },
          emphasis: {
            focus: "series",
          },
          itemStyle: { color: "#C1F1C0" },
          data: [150, 212, 201, 154, 190, 330, 410],
        },
        {
          name: "Eventos",
          type: "bar",
          stack: "total",
          label: {
            show: true,
          },
          emphasis: {
            focus: "series",
          },
          itemStyle: { color: "#FFC184" },
          data: [820, 832, 901, 934, 1290, 1330, 1320],
        },
      ],
    };

    chart.setOption(chartOptions);

    return () => {
      chart.dispose();
    };
  });

  return <Container id="stackbarchart-container"></Container>;
}
