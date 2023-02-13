import classes from "./Badge.module.scss";

export default function Badge(props) {
  return <div className={classes.badge}>{props.children}</div>;
}
