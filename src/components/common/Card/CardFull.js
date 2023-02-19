import React from "react";
import classes from "./CardFull.module.scss";
import dayjs from "dayjs";

export default function CardFull(props) {
  return (
    <div className={classes["card-full"]}>
      <div className={classes.image}>
        <img src={props.imgSrc} alt="card-full" />
        <div className={classes["date-time"]}>
          <span>
            {props.dateTime &&
              dayjs(new Date(props.dateTime)).format("YYYY.MM.DD")}
          </span>
          <span>
            {props.dateTime && dayjs(new Date(props.dateTime)).format("HH:MM")}
          </span>
        </div>
      </div>
      <div className={classes.content}>
        <div>{props.content}</div>
        <div>
          {props.foodType.map((item, idx) => (
            <span key={idx}>#{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
