import React, { useContext } from "react";
import styles from "./Menu.module.css";
import MenuContext from "../../store/MenuContext";
import MenuCategory from "../menu/MenuCategory";

export default function Menu() {
  const menuContext = useContext(MenuContext);
  const menuItems = menuContext.menuItems;
  const menuContent = menuItems.map((category) => (
    <MenuCategory key={Math.random()} category={category} />
  ));
  return (
    <section className={styles["menu"]}>
      <div className={styles["menu-navbar"]}>
        <a className={styles["menu-navbar__link"]}>Appetizers</a>
        <a className={styles["menu-navbar__link"]}>Entrée Salads</a>
        <a className={styles["menu-navbar__link"]}>Sandwiches</a>
        <a className={styles["menu-navbar__link"]}>Pasta</a>
        <a className={styles["menu-navbar__link"]}>Pizza</a>
      </div>
      <div className={styles["menu-area"]}>{menuContent}</div>
    </section>
  );
}
