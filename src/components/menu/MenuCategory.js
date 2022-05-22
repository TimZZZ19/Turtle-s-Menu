import React, { useRef, useEffect } from "react";
import styles from "./MenuCategory.module.css";
import MenuItem from "./MenuItem";

const MenuCategory = ({ category, indicatorObserver }) => {
  const categoryRef = useRef(null);
  const { name, items, description, dressings, substitutes, extras, toppings } =
    category;

  // if substitutes are available for this category,
  // then add them to each item under this category
  if (substitutes) {
    items.forEach((item) => {
      item.categorySubstitutes = { ...substitutes }; // add them as "categorySubsitutes" instead of
      // "substitutes", because we don't want to let them appear as an item's regular substitutes.
    });
  }

  // Same goes for extras
  if (extras) {
    items.forEach((item) => {
      item.categoryExtras = { ...extras };
    });
  }

  // Menu item list
  const menuItemList = items.map((item) => (
    <MenuItem key={Math.random()} item={item} />
  ));

  // Indicator observer
  useEffect(() => {
    const currentTarget = categoryRef.current;
    if (currentTarget) indicatorObserver.observe(categoryRef.current);
  }, [categoryRef]);

  return (
    <div
      ref={categoryRef}
      className={`${styles["menu-category"]}`}
      id={`${name.toLowerCase().replace(" ", "")}`}
    >
      <h3 className={styles["category-name"]}>{name}</h3>
      <p className={styles["category-description"]}>{description}</p>
      <ul className={styles["menu-items-ul"]}>{menuItemList}</ul>
    </div>
  );
};

export default MenuCategory;
