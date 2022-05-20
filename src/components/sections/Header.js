import React from "react";
import styles from "./Header.module.css";
import CartBtn from "../cart/CartBtn";

export default function Header() {
  return (
    <section className={styles.header}>
      <p className={styles["header-title"]}>Turtle's Menu</p>
      <CartBtn />
    </section>
  );
}
