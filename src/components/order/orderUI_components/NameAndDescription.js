import React from "react";
import styles from "./NameAndDescription.module.css";

export default function NameAndDescription({ name, description }) {
  return (
    <div className={styles["name-and-description"]}>
      <h3 className={styles.name}>{name}</h3>
      <p>{description}</p>
    </div>
  );
}
