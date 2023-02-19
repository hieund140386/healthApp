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
import BadgesList from "../Badge/BadgesList";
import { useDispatch } from "react-redux";
import actions from "../../../store/actions";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart(props) {
  const dispatch = useDispatch();

  const CHART_OPTIONS = useMemo(() => {
    const defaultOptions = {
      responsive: true,
      layout: {
        padding: {
          left: 53,
          top: 12,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        title: {
          text: ["BODY", "RECORD"],
          display: props.isDetail,
          align: "start",
          padding: {
            top: 0,
            bottom: 10,
          },
          color: "#fff",
        },
        labels: {
          color: "red",
        },
      },
      scales: {
        x: {
          grid: {
            color: "#777",
            drawTicks: false,
          },
          ticks: {
            color: "#fff",
          },
        },
        y: {
          display: false,
          beginAtZero: true,
          min: 0,
          max: 120,
          ticks: {
            stepSize: 10,
          },
        },
      },
    };
    if (props.options) {
      return { ...defaultOptions, ...props.options };
    }
    return defaultOptions;
  }, [props.options, props.isDetail]);

  const BADGES_LIST = useMemo(() => {
    return [
      {
        title: "日",
        onClick: () => {
          dispatch(actions.changeChartData("date"));
        },
      },
      {
        title: "週",
        onClick: () => {
          dispatch(actions.changeChartData("week"));
        },
      },
      {
        title: "月",
        onClick: () => {
          dispatch(actions.changeChartData("month"));
        },
      },
      {
        title: "年",
        onClick: () => {
          dispatch(actions.changeChartData("year"));
        },
      },
    ];
  }, [dispatch]);

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
    canvasEl.style.backgroundColor = "inherit";
  }, [props.id]);

  return (
    <div id={props.id} className={classes.chart}>
      {props.isDetail && props.duration && (
        <div className={classes["duration-label"]}>{props.duration}</div>
      )}
      <div style={{ height: props.height }}>
        <Line datasetIdKey={props.id} data={data} options={CHART_OPTIONS} />
      </div>
      {props.isDetail && <BadgesList badgesList={BADGES_LIST} />}
    </div>
  );
}
