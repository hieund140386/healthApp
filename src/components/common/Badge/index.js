import classes from "./Badge.module.scss";

export default function Badge(props) {
  return <button className={classes.badge} onClick={props.onClick}>{props.children}</button>;
}
