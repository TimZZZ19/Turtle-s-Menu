import React, { useRef, useEffect } from "react";
import styles from "./MenuCategory.module.css";
import MenuItem from "./MenuItem";

const addCategoryConstitutes = (constitutes, type, items) => {
  const propertyName = `category${capitalize(type)}`;
  if (constitutes) {
    items.forEach((item) => {
      item[propertyName] =
        type === "dressings" || type === "pastas" || type === "toppings"
          ? [...constitutes]
          : { ...constitutes };
    });
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
};

const MenuCategory = ({ category, indicatorObserver }) => {
  const categoryRef = useRef(null);
  const {
    name,
    items,
    description,
    dressings,
    pastas,
    substitutes,
    extras,
    toppings,
  } = category;

  // Add category constitutes

  // substitutes
  addCategoryConstitutes(substitutes, "substitutes", items);
  //extras
  addCategoryConstitutes(extras, "extras", items);
  // dressings
  addCategoryConstitutes(dressings, "dressings", items);
  // pastas
  addCategoryConstitutes(pastas, "pastas", items);
  // toppings
  addCategoryConstitutes(toppings, "toppings", items);

  // Also add category name to each item
  items.forEach((item) => {
    item["category"] = name;
  });

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

export default React.memo(MenuCategory);
