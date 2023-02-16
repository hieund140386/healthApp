import { Line } from "react-chartjs-2";
import classes from "./Chart.module.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useMemo } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },

  scales: {
    x: {
      grid: {
        color: "#777",
        drawTicks: false,
      },
    },
    y: {
      display: false,
    },
  },
};

export default function Chart(props) {
  const data = useMemo(() => {
    return {
      labels: props.labels,
      options: {
        backgroundColor: "#000",
      },
      datasets: [
        {
          label: "Original Data",
          data: props.datasets.data1,
          borderColor: "#FFCC21",
          backgroundColor: "#FFCC21",
        },
        {
          label: "Recorded Data",
          data: props.datasets.data2,
          borderColor: "#8FE9D0",
          backgroundColor: "#8FE9D0",
        },
      ],
    };
  }, [props.datasets, props.labels]);

  useEffect(() => {
    const canvasEl = document.getElementById(props.id);
    canvasEl.style.backgroundColor = "#000";
  }, [props.id]);

  return (
    <div
      id={props.id}
      className={classes.chart}
      style={{ width: "100%", height: 312 }}
    >
      <Line datasetIdKey={props.id} data={data} options={options} />
    </div>
  );
}
