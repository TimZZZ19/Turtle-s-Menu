import React, { useContext, useState } from "react";
import styles from "./Menu.module.css";
import MenuContext from "../../store/MenuContext";
import MenuCategory from "../menu/MenuCategory";
import NavbarLink from "../menu/NavbarLink";
import useIndicatorObserver from "../../hooks/useIndicatorObserver";

export default function Menu() {
  const [indicatorObserver, activeLink] = useIndicatorObserver();

  // Navbar content
  const navbarLinkNames = [
    "Appetizers",
    "Entrée Salads",
    "Sandwiches",
    "Pasta",
    "Pizza",
  ];
  const navbarContent = navbarLinkNames.map((name) => (
    <NavbarLink
      key={Math.random()}
      categoryName={name}
      activeLink={activeLink}
    />
  ));

  // MenuContent
  const menuContext = useContext(MenuContext);
  const menuItems = menuContext.menuItems;
  const menuContent = menuItems.map((category) => (
    <MenuCategory
      key={Math.random()}
      category={category}
      indicatorObserver={indicatorObserver}
    />
  ));

  return (
    <section className={styles["menu"]}>
      <div className={styles["menu-navbar"]}>{navbarContent}</div>
      <div className={styles["menu-area"]}>{menuContent}</div>
    </section>
  );
}
