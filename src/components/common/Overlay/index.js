import { createPortal } from "react-dom";
import classes from "./Overlay.module.scss";

export default function Overlay(props) {
  return createPortal(
    <div className={classes.overlay}></div>,
    document.getElementById("root")
  );
}
