import React, { useContext, useMemo } from "react";
import styles from "./Menu.module.css";
import MenuContext from "../../store/MenuContext";
import MenuCategory from "../menu/MenuCategory";
import NavbarLink from "../menu/NavbarLink";
import useIndicatorObserver from "../../hooks/useIndicatorObserver";

// Navbar content
const navbarLinks = [
  { key: "l1", name: "Appetizers" },
  { key: "l2", name: "Entrée Salads" },
  { key: "l3", name: "Sandwiches" },
  { key: "l4", name: "Pasta" },
  { key: "l5", name: "Pizza" },
];

export default function Menu() {
  const [indicatorObserver, activeLink] = useIndicatorObserver();

  // Navbar links
  const navbarContent = navbarLinks.map((link) => (
    <NavbarLink
      key={link.key}
      categoryName={link.name}
      activeLink={activeLink}
    />
  ));

  // MenuContent
  const menuContext = useContext(MenuContext);
  const menuItems = useMemo(
    () => menuContext.menuItems,
    [menuContext.menuItems]
  );

  const menuContent = menuItems.map((category) => (
    <MenuCategory
      key={category.key}
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
