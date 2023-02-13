import classes from "./ActionMenuItem.module.scss";

export default function ActionMenuItem(props) {
  return (
    <div className={classes["action-menu-item"]} onClick={props.onClick}>
      {props.children}
    </div>
  );
}
