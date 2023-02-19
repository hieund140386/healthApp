import React from "react";
import classes from "./ProgressPercent.module.scss";

export default function ProgressPercent(props) {
  return (
    <div className={classes.container}>
      <div className={classes["progress-wrapper"]}>
        <svg viewBox="0 0 36 36">
          <path
            fill="none"
            stroke="transparent"
            strokeWidth={1}
            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className={classes.circle}
            fill="none"
            strokeWidth={1}
            strokeLinecap="square"
            stroke="#fff"
            strokeDasharray={`${props.value}, 100`}
            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
      </div>
      <div className={classes.content}>
        <span>{props.date}</span>
        <span>{props.value}%</span>
      </div>
    </div>
  );
}
