import React from "react";
import classes from "./MealItem.module.scss";
import dayjs from "dayjs";

export default function MealItem(props) {
  return (
    <div className={classes["meal-item"]}>
      <img src={props.imgSrc} alt="meal-img" />
      <div>
        <span>
          {props.date && dayjs(new Date(props.date)).format("MM.YYYY.")}
        </span>
        <span>{props.time}</span>
      </div>
    </div>
  );
}
