import { memo } from "react";
import { NavLink } from "react-router-dom";
import Badge from "../Badge";
import classes from "./MenuItem.module.scss";

export default memo(function MenuItem(props) {
  return (
    <NavLink
      to={props.href}
      className={classes["menu-item"]}
      style={({ isActive }) => ({ color: isActive ? "orange" : "" })}
    >
      {props.imgSrc && <img src={props.imgSrc} alt={props.imgName} />}
      {props.title && <span>{props.title}</span>}
      {props.badge && <Badge>1</Badge>}
      {!props.imgSrc && !props.title && props.children}
    </NavLink>
  );
});
