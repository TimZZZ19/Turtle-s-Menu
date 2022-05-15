import React from "react";
import styles from "./MenuCategory.module.css";
import MenuItem from "./MenuItem";

export default function MenuCategory({ category }) {
  const { name, items, description, dressings, substitutes, extras, toppings } =
    category;

  const menuItemList = items.map((item) => (
    <MenuItem key={Math.random()} item={item} />
  ));

  return (
    <div className={styles["menu-category"]}>
      <h3 className={styles["category-name"]}>{name}</h3>
      <p className={styles["category-description"]}>{description}</p>
      <ul className={styles["menu-items-ul"]}>{menuItemList}</ul>
    </div>
  );
}
