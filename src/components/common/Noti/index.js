import classes from "./Noti.module.scss";

export default function Noti(props) {
  return <div className={classes.badge}>{props.children}</div>;
}
