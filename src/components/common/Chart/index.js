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

  const CHART_OPTIONS = useMemo(() => {
    return {
      responsive: true,
      layout: {
        padding: {
          left: 53,
          top: 12
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        title: {
          text: ['BODY', 'RECORD'],
          display: props.isDetail,
          align: 'start',
          padding: {
            top: 0,
            bottom: 10,
          },
          color: "#fff"
        },
        labels: {
          color: "red"
        }
      },
      scales: {
        x: {
          grid: {
            color: "#777",
            drawTicks: false,
          },
          ticks: {
            color: "#fff"
          }
        },
        y: {
          display: true,
          beginAtZero: true,
          min: 0,
          max: 120,
          ticks: {
            stepSize: 10
          }
        },
      },
    };
  }, [props.isDetail])

  const BADGES_LIST = useMemo(() => {
    return [
      {
        title: '日',
        onClick: () => {props.onClick && props.onClick('date')}
      },
      {
        title: '週',
        onClick: () => {props.onClick && props.onClick('week')}
      },
      {
        title: '月',
        onClick: () => {props.onClick && props.onClick('month')}
      },
      {
        title: '年',
        onClick: () => {props.onClick && props.onClick('year')}
      },
    ]
  }, [props.onClick])

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
    <div
      id={props.id}
      className={classes.chart}
      style={{position: 'relative' }}
    >
      {props.isDetail && props.duration && <div className={classes['duration-label']}>{props.duration}</div>}
      <div style={{height: props.isDetail ? 250 : 312}}>
        <Line datasetIdKey={props.id} data={data} options={CHART_OPTIONS} />
      </div>
      {props.isDetail && <BadgesList selectedBadge="" badgesList={BADGES_LIST} />}
    </div>
  );
}
