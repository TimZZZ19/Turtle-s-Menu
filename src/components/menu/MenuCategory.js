import React, { useRef, useEffect } from "react";
import styles from "./MenuCategory.module.css";
import MenuItem from "./MenuItem";

const MenuCategory = ({
  category,
  indicatorObserver,
  // revealingObserver,
  // currentCategory,
}) => {
  const categoryRef = useRef(null);
  const { name, items, description, dressings, substitutes, extras, toppings } =
    category;

  // Menu item list
  const menuItemList = items.map((item) => (
    <MenuItem key={Math.random()} item={item} />
  ));

  // Indicator observer
  useEffect(() => {
    const currentTarget = categoryRef.current;
    if (currentTarget) indicatorObserver.observe(categoryRef.current);
  }, [categoryRef]);

  // Revealing observer
  // useEffect(() => {
  //   const currentTarget = categoryRef.current;
  //   if (currentTarget) revealingObserver.observe(currentTarget);
  // }, [categoryRef]);

  // let secondaryClass = `${styles["category-hidden"]}`;
  // if (`${name.toLowerCase().replace(" ", "")}` === currentCategory) {
  //   secondaryClass = "";
  //   // console.log(`${name.toLowerCase().replace(" ", "")}`);
  //   // console.log(currentCategory);
  // }

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
