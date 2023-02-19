import React from "react";
import classes from "./CardText.module.scss";
import dayjs from "dayjs";

export default function CardText(props) {
  return (
    <div className={classes["card-text"]}>
      <div className={classes["title"]}>
        <p>
          {props.dateTime &&
            dayjs(new Date(props.dateTime)).format("YYYY.MM.DD")}
        </p>
        <p>
          {props.dateTime && dayjs(new Date(props.dateTime)).format("HH:MM")}
        </p>
      </div>
      <div className={classes["main-content"]}>
        <p>{props.title}</p>
        <div>{props.content}</div>
      </div>
    </div>
  );
}
