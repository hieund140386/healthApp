import classes from "./Header.module.scss";
import Logo from "../../../assets/images/logo.svg";
import Close from "../../../assets/images/close-menu.svg";
import BurgerMenu from "../../../assets/images/burger-menu.svg";
import Challenge from "../../../assets/images/challenge.svg";
import Noti from "../../../assets/images/noti.svg";
import Record from "../../../assets/images/record.svg";
import MenuItem from "../MenuItem";
import Overlay from "../Overlay";
import ActionMenu from "../ActionMenu";
import React, { useState } from "react";

const MENU_ITEMS = [
  {
    href: "/my-record",
    imgSrc: Record,
    imgName: "Record",
    title: "自分の記録",
    class: classes["menu-list__item"],
  },
  {
    href: "/my-challenge",
    imgSrc: Challenge,
    imgName: "Challenge",
    title: "チャレンジ",
    class: classes["menu-list__item"],
  },
  {
    href: "/my-notification",
    imgSrc: Noti,
    imgName: "Noti",
    title: "お知らせ",
    class: classes["menu-list__item"],
  },
];

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleOnClickActionMenu = () => {
    setIsOpenMenu((prev) => !prev);
  };
  return (
    <header className={classes.header}>
      <nav>
        <div className={classes.logo}>
          <MenuItem imgSrc={Logo} imgName="Logo" href="/my-record" />
        </div>
        <div className={classes["menu-list"]} style={{ position: "relative" }}>
          {MENU_ITEMS.map((item) => (
            <MenuItem
              href={item.href}
              class={item.class}
              imgSrc={item.imgSrc}
              imgName={item.imgName}
              title={item.title}
              key={item.imgSrc}
              badge={item.title === "お知らせ"}
            />
          ))}
          <div
            className={classes["menu-list__item"]}
            onClick={handleOnClickActionMenu}
          >
            <img src={isOpenMenu ? Close : BurgerMenu} alt="menu" />
            {isOpenMenu && <Overlay />}
          </div>
        </div>
      </nav>
      {isOpenMenu && (
        <ActionMenu onClickActionMenuItem={() => setIsOpenMenu(false)} />
      )}
    </header>
  );
}
