import React from "react";
import classes from "./Button.module.scss";

export default function Button(props) {
  return (
    <button onClick={props.onClick} className={classes.btn}>
      {props.text || "記録をもっと見る"}
    </button>
  );
}
