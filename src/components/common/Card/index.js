import React from "react";
import classes from "./Card.module.scss";

export default function Card(props) {
  return (
    <div className={classes.card} onClick={props.onClick}>
      <img src={props.imgSrc} alt="card" />
      <div className={classes.content}>
        <p>{props.type}</p>
        <p>{props.title}</p>
      </div>
    </div>
  );
}
