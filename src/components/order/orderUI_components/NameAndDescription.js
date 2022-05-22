import React from "react";
import MenuItemContainer from "../../reusables/MenuItemContainer";
import styles from "./NameAndDescription.module.css";

export default React.memo(function NameAndDescription({ name, description }) {
  return (
    <MenuItemContainer>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
    </MenuItemContainer>
  );
});
