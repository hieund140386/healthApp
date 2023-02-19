import React from "react";
import classes from "./Column.module.scss";

export default function Column(props) {
  return (
    <div className={classes.column}>
      <p>{props.type}</p>
      <p>{props.title}</p>
      <hr />
      <p>{props.text}</p>
    </div>
  );
}
