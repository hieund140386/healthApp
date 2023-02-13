import { useMemo } from "react";
import classes from "./ActionMenu.module.scss";
import ActionMenuItem from "./ActionMenuItem";
import { useNavigate } from "react-router-dom";

export default function ActionMenu(props) {
  const navigate = useNavigate();
  const ACTION_MENU_ITEMS = useMemo(
    () => [
      {
        title: "自分の記録",
        onClick: () => {
          props.onClickActionMenuItem();
          navigate("/my-record");
        },
      },
      {
        href: "#",
        title: "体重グラフ",
        onClick: () => {
          props.onClickActionMenuItem();
          navigate("#");
        },
      },
      {
        href: "#",
        title: "目標",
        onClick: () => {
          props.onClickActionMenuItem();
          navigate("#");
        },
      },
      {
        href: "#",
        title: "選択中のコース",
        onClick: () => {
          props.onClickActionMenuItem();
          navigate("#");
        },
      },
      {
        href: "#",
        title: "設定",
        onClick: () => {
          props.onClickActionMenuItem();
          navigate("#");
        },
      },
    ],
    []
  );
  return (
    <div className={classes["action-menu"]}>
      {ACTION_MENU_ITEMS.map((item) => (
        <ActionMenuItem key={item.title} onClick={item.onClick}>
          {item.title}
        </ActionMenuItem>
      ))}
    </div>
  );
}
