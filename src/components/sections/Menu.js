import React from "react";
import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <section className={styles["menu"]}>
      <div className={styles["menu-navbar"]}>
        <a className={styles["menu-navbar__link"]}>Appetizers</a>
        <a className={styles["menu-navbar__link"]}>Entrée Salads</a>
        <a className={styles["menu-navbar__link"]}>Sandwiches</a>
        <a className={styles["menu-navbar__link"]}>Pasta</a>
        <a className={styles["menu-navbar__link"]}>Pizza</a>
      </div>
    </section>
  );
}
