import classes from "./Badge.module.scss";
import { useSelector } from "react-redux";

export default function Badge(props) {
  const { selectedChartData } = useSelector((state) => state.chart);
  return (
    <button
      className={`${classes.badge} ${
        props.children === selectedChartData ? classes.active : ""
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
